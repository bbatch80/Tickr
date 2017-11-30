import React, { Component } from "react";
import Container from "../../components/Container";
import LeftNav from "../../components/LeftNav"
import "./Trade.css";
import API from "../../utils/API";






class Trade extends Component {

	state = {
    portfolio: [],
    symbol: "",
    order: "",
    quantity: ""
  };



render() {
	return (
		
		<Container>
		  <div className="container-fluid text-center">
		    <div className="row content">
			  <LeftNav/>
			  <div className="col-sm-10 text-left" style={{height: 900}}>
      		    <h1>Trade Stocks</h1>
    		     <h2>Market Open 9:30 AM EST - 4:00 PM EST (Weekdays)</h2>
                <h4>Order Stock</h4>
      	      
      	      <form>
  			  Symbol: <input 
  			  			type="text" 
  			  			name="symbol" 
  			  			id="symbol"
  			  			value={this.state.symbol}
                		onChange={this.handleInputChange}>
  			  			</input>
  			  
  			  Transaction: <select id="buySell" value={this.state.order}
                onChange={this.handleInputChange}>
    			<option value="" disabled="disabled" selected="selected">Buy or Sell</option>
    			<option value="1">Buy</option>
    			<option value="2">Sell</option>
							</select>
				
				Quantity: <input type="text" 
								name="quantity"
								value={this.state.quantity}
                				onChange={this.handleInputChange}>
                				</input>
				
				<button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off" 
                onClick={this.handleFormSubmit}>
  				Submit Order
				</button>
			  </form>
			  

			</div>
		  </div>
		  </div>
 		</Container>

		);
	}
}


export default Trade;