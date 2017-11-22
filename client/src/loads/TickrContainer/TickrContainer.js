import React, { Component } from "react";
import Container from "../../components/Container";
import Row from "../../components/Row";
import TopNav from "../../components/TopNav"
import LeftNav from "../../components/LeftNav"







class TickrContainer extends Component {

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
      		    <h1>Welcome to Tickr</h1>
    
                <p>Tickr is the newest source of of stock market content on the web.  Our goal is to introduce beginners to the ways of the stock market. 
                The stock market can be an intimidating labyrinth, but with Tickr on your side you will be a whiz in no time. </p>
      	      </div>
			</div>
		  </div>
 		</Container>

		);
	}
}


export default TickrContainer;
