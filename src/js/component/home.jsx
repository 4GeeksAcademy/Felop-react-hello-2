
import React, { useState } from "react";

//include images into your bundle


//create your first component
const Home = () => {
	const [activeLight, setActiveLight] =useState("red")
	const toggleLight = () => {
		if (activeLight === "red") setActiveLight("yellow");
		else if (activeLight === "green") setActiveLight("red");
		else setActiveLight("green");
	  };
	
	return (
		<div className="text-center">
			<div id="trafficTop"></div>
			<div id="container">
				<div className={`red light ${activeLight === "red" ? "active" : ""}`}
					onClick={() => setActiveLight("red")}
				></div>
				<div className={`yellow light ${activeLight === "yellow" ? "active" : ""}`}
					onClick={() => setActiveLight("yellow")}
				></div>
				<div className={`green light ${activeLight === "green" ? "active" : ""}`}
					onClick={() => setActiveLight("green")}
				></div>
			</div>
			<button className="btn btn-primary mt-3" onClick={toggleLight}>
        puchele mi hacker
      </button>
		</div>
	);
};

export default Home;
