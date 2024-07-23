import React, { useEffect, useState } from "react";
import SecondsCounterWrapper from "../component/SecondsCounterWrapper";

//create your first component
const Home = () => {
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		const start = Date.now();

		const intervalId = setInterval(() => {
			setSeconds(Math.floor((Date.now() - start) / 1000));
			
		}, 1000);

		return () => clearInterval(intervalId);

	}, []);

	return (
		<div className="header">
		<div className="card">			
			<SecondsCounterWrapper seconds={seconds}/> 
		</div>
		</div>
	);
};

export default Home;
