import axios from "axios";

export default {
  // Gets all books
  getPortfolios: function() {
    return axios.get("/api/portfolios/");
  },
  // Gets the portfolio with the given username
  getPortfolio: function(username) {
    return axios.get("/api/portfolios/" + username);
  },

  saveUser: function(username) {
    return axios.post("/api/portfolios")
  },
  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // Saves a book to the database
  saveStock: function(stock) {
    return axios.post("/api/portfolios/stock", stock);
  }
};