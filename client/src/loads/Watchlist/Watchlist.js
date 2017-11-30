import React, { Component } from "react";
import Container from "../../components/Container";
import LeftNav from "../../components/LeftNav"







class Watchlist extends Component {

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
      		    <h1>Watchlist</h1>
    
                <p>Add quotes from watchlist</p>
      	      </div>
			</div>
		  </div>
 		</Container>

		);
	}
}


export default Watchlist;