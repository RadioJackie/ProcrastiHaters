const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quoteSchema = new Schema({
    quotation: { type: String, required: true },
    author: { type: String, required: true },
    country: { type: String, required: false },
    published: { type: String, required: false },
    language: { type: String, required: true }
}
});

const Book = mongoose.model("Quote", quoteSchema);

module.exports = quote;
