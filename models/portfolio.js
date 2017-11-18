const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stockSchema = new Schema({
  symbol: { type: String, required: true },
  purchaseDate: { type: String, required: true},
  shares: { type: String, required: true }
  });

const portfolioSchema = new Schema({
  username: { type: String, required: true },
  wallet: { type: String, required: true },
  stock: [stockSchema]
  });

const Portfolio = mongoose.model("Portfolio", portfolioSchema);

module.exports = Portfolio;

// {
// 	"_id" : ObjectId("5a0e3a95e1fb8d51b0615ea2"),
// 	"username" : "Bobby"
// 	"wallet" : 100000,
// 	"stock" : [
// 		{
// 			"symbol" : "AAPL",
// 			"purchaseDate" : ISODate("2017-11-17T01:25:41.396Z"),
// 			"shares" : 20
// 		},
// 		{
// 			"symbol" : "DIS",
// 			"purchaseDate" : ISODate("2017-11-17T01:25:41.396Z"),
// 			"shares" : 10
// 		},
// 		{
// 			"symbol" : "SNE",
// 			"purchaseDate" : ISODate("2017-11-17T01:25:41.396Z"),
// 			"shares" : 50
// 		}
// 	]
// }
