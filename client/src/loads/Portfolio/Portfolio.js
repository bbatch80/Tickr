import React, { Component } from "react";
import Container from "../../components/Container";
import Row from "../../components/Row";
import TopNav from "../../components/TopNav"
import LeftNav from "../../components/LeftNav"






class Portfolio extends Component {

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
			     <div>
			     <h3>Market Open 9:30 AM EST - 4:00 PM EST (Weekdays)</h3>
			     <p></p>
			     </div>

			     </div>
			  </div>
			</div>
 		</Container>

		);
	}
}


export default Portfolio;