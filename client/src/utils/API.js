import axios from "axios";

export default {
  // Gets all quotes
  getQuotes: function () {
    return axios.get("/api/quotes");
  },
  // Gets the quotes with the given id
  getQuotes: function (id) {
    return axios.get("/api/quotes/" + id);
  },
  // Deletes the quotes with the given id
  deleteQuotes: function (id) {
    return axios.delete("/api/quotes/" + id);
  },
  // Saves a quotes to the database
  saveQuotes: function (quotesData) {
    return axios.post("/api/quotes", quotesData);
  }
};
