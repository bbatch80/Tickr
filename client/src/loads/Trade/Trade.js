import React, { Component } from "react";
import Container from "../../components/Container";
import Row from "../../components/Row";
import TopNav from "../../components/TopNav"
import LeftNav from "../../components/LeftNav"







class Trade extends Component {

	// state = {
	// 	null;
	// }

render() {
	return (
		
		<Container>
		  <div className="container-fluid text-center">
		    <div className="row content">
			  <LeftNav/>
			  <div className="col-sm-10 text-left" style={{height: 900}}>
      		    <h1>Trade Stocks</h1>
    		     <h2>Market Open 9:30 AM EST - 4:00 PM EST (Weekdays)</h2>
                <p>Buy or Sell</p>
      	      </div>
			</div>
		  </div>
 		</Container>

		);
	}
}


export default Trade;