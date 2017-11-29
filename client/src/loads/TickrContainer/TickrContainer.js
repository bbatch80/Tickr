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
    
                <p>Danny: Add registration form here</p>
      	      </div>
			</div>
		  </div>
 		</Container>

		);
	}
}


export default TickrContainer;
