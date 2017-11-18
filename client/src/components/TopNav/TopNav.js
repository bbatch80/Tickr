import React from "react";



const TopNav = props =>
<div>
	<nav>
    <div className="nav-wrapper">
      <a className="brand-logo right">{props.title}</a>
      <ul id="nav-mobile" className="left hide-on-med-and-down">
        <li><a href="#">Sign in</a></li>
        <li><a>Getting Started</a></li>
        <li><a></a></li>
      </ul>
    </div>
  </nav>
	</div>;


export default TopNav;

