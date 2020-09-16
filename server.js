const { MongoClient } = require('mongodb');
const { ObjectId } = require('mongodb').ObjectId;
const express = require('express'); // use Express
const path = require("path");
// const bodyParser = require("body-parser"); // for parsing POST requests
const app = express(); // create application
const PORT = process.env.PORT || 3001; // port for listening
console.log(1)
async function main() {
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
    * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details */

    const uri =process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/eventsList";
    const client = new MongoClient(uri, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    });
    try {
        // Connect to the MongoDB cluster
        await client.connect();
        // Make the appropriate DB calls
        await init(client);

    } catch (e) {
        console.error(e);
    }
}
main().catch(console.err);

async function init(client) {
    // if (process.env.NODE_ENV === "production") {
        app.use(express.static("client/build"));
    //   }
      app.use(express.urlencoded({ extended: true }));
      app.use(express.json());
    //extended:true to encode objects and arrays  https://github.com/expressjs/body-parser#bodyparserurlencodedoptions

    const db = client.db('eventList')
    const events = db.collection('events')

    app.get('/init', function (req, res) {
        events.insertOne({
            text: "Some Helpful event",
            start_date: new Date(2018, 8, 1),
            end_date: new Date(2018, 8, 5)
        })
        events.insertOne({
            text: "Another Cool Event",
            start_date: new Date(2020, 9, 11),
            end_date: new Date(2020, 9, 12)
        })
        events.insertOne({
            text: "Super Activity",
            start_date: new Date(2018, 8, 9),
            end_date: new Date(2018, 8, 10)
        })
        res.send("Test events were added to the database")
    });

    app.get('/data', function (req, res) {
        events.find().toArray(function (err, data) {
            //set the id property for all client records to the database records, which are stored in ._id field
            for (var i = 0; i < data.length; i++) {
                data[i].id = data[i]._id;
                delete data[i]["!nativeeditor_status"];
            }
            //output response
            res.send(data);
        });
    });


    // Routes HTTP POST requests to the specified path with the specified callback functions. For more information, see the routing guide.
    // http://expressjs.com/en/guide/routing.html

    app.post('/data', function (req, res) {
        var data = req.body;
        var mode = data["!nativeeditor_status"];
        var sid = data.id;
        var tid = sid;

        function update_response(err) {
            if (err)
                mode = "error";
            else if (mode == "inserted") {
                tid = data._id;
            }
            res.setHeader("Content-Type", "application/json");
            res.send({ action: mode, sid: sid, tid: String(tid) });
        }

        if (mode == "updated") {
            events.updateOne({ "_id": ObjectId(tid) }, { $set: data }, update_response);
        } else if (mode == "inserted") {
            events.insertOne(data, update_response);
        } else if (mode == "deleted") {
            events.deleteOne({ "_id": ObjectId(tid) }, update_response)
        } else
            res.send("Not supported operation");
    });
    app.use(function(req, res) {
        res.sendFile(path.join(__dirname, "./client/build/index.html"));
      });
      console.log("inner")
};
console.log("out")
app.listen(PORT, () => {
    console.log("Server is running on port " + PORT + "...");
});