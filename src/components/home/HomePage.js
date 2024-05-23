import React from "react";
import { useState } from "react";

const HomePage = () => {
	const [counter, setCounter] = useState(0);

	const handleClick = () => {
		setCounter(counter + 1);
		console.log("Clicked " + counter);
	};

	return (
		<div>
			<h1>This HomePage</h1>
			<b>{counter}</b>
			<button onClick={handleClick}>+1</button>
		</div>
	);
};

export default HomePage;
