import React, { Component } from "react";
import Container from "../../components/Container";
import LeftNav from "../../components/LeftNav"
import API from "../../utils/API";





class Portfolio extends Component {

	state = {
    portfolio: [],
    username: "Danny",
    wallet: [],
    stock: []

    
};

componentDidMount() {
    this.loadPortfolio();
  }

  loadPortfolio = () => {
    API.getPortfolios(this.state.username)
      .then(res => { console.log(res.data);
        this.setState({ portfolio: res.data, username: res.data[0].username, wallet: res.data[0].wallet, 
        	stock: res.data[0].stock[0]})
      })
      .catch(err => console.log(err));
  };


render() {
	return (
		
		<Container>
			<div className="container-fluid text-center">
			  <div className="row content">
			   <LeftNav/>
			     <div className="col-sm-10 text-left" style={{height: 900}}>
			     <div>
			     <h1>{this.state.username}'s Tickr Portfolio</h1>
			     <p>Account Value (USD): ${this.state.wallet}</p>
			     </div>
			     <h2>Stock Portfolio</h2>
			     <table className="table table-striped">
  <thead>
    <tr>
      <th>Symbol</th>
      <th>Description</th>
      <th>Quantity</th>
      <th>Date Purchased</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{this.state.stock.symbol}</th>
      <td>enter description from API</td>
      <td>{this.state.stock.shares}</td>
      <td>{this.state.stock.purchaseDate}</td>
      <td>Current Value(Use API price times shares)</td>
    </tr>
  </tbody>
</table>

			     </div>
			  </div>
			</div>
 		</Container>

		);
	}
}


export default Portfolio;