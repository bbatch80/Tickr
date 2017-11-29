import React from "react";
import './LeftNav.css';


const LeftNav = props =>


<div className="col-sm-2 sidenav">
	  
      <p><a href="/portfolio/Danny">Portfolio</a></p>
      <p><a href="/watchlist">Watchlist</a></p>
      {/* <p><a href="#">Research</a></p>
      // <p><a href="#">Help</a></p>*/}
      <p><a href="/trade">Trade</a></p>
      {/*// <p><a href="#">Rank</a></p>*/}
    </div>
  


export default LeftNav;