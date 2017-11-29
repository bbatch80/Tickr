import React, { Component } from "react";
import Container from "../../components/Container";
import Row from "../../components/Row";
import TopNav from "../../components/TopNav"
import LeftNav from "../../components/LeftNav"
import API from "../../utils/API";
import Modal from "../../components/Modal";





class Portfolio extends Component {

	state = {
    portfolio: []
};

componentDidMount() {
    API.getPortfolios()
    .then(console.log(this.state))
      .then(res => this.setState({ portfolio: res.data }))
      .catch(err => console.log(err));

  }

render() {
	return (
		
		<Container>
			<div className="container-fluid text-center">
			  <div className="row content">
			   <LeftNav/>
			     <div className="col-sm-10 text-left" style={{height: 900}}>
			     <div>
			     
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