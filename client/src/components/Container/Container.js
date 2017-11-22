import React from "react";
import "./Container.css"

const Container = props => 
	<div className="cont">
	{props.children}
	</div>;

export default Container;