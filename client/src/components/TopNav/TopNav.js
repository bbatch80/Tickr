import React from "react";
import './TopNav.css';
import '../Modal';



class TopNav extends React.Component {

  render(){

	return <nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>                        
     </button>
      <a className="navbar-brand" href="/">Tickr</a>
    </div>
    <div className="collapse navbar-collapse" id="myNavbar">
      <ul className="nav navbar-nav">
        <li><a href="#">Getting Started</a></li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li><Modal/></li>
      </ul>
    </div>
  </div>
</nav>;
}
}


export default TopNav;

