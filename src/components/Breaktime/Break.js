import React, { useEffect, useState } from "react";

import "./Break.css";

const Break = () => {
	const [time, settime] = useState(0);

useEffect(() => {
const times = JSON.parse(localStorage.getItem("time"));

if (times) {
	settime(times);
	}
	}, []);

	return (
		<div className="">
			<div className="clicked-btn">
				<button
					className="btn"
					onClick={() => {
						settime(10);

						localStorage.setItem(
							"time",
							JSON.stringify(10)
						);
					}}
				>
					10s
				</button>

				<button
					className="btn"
					onClick={() => {
						settime(20);
						localStorage.setItem(
							"time",
							JSON.stringify(20)
						);
					}}
				>
					20s
				</button>

				<button
					className="btn"
					onClick={() => {
						settime(30);
						localStorage.setItem(
							"time",
							JSON.stringify(30)
						);
					}}
				>
					30s
				</button>

				<button
					className="btn"
					onClick={() => {
						settime(40);
						localStorage.setItem(
							"time",
							JSON.stringify(40)
						);
					}}
				>
					40s
				</button>

<button className="btn"onClick={() => {settime(50);
localStorage.setItem("time",JSON.stringify(50));}}>50s
</button>
			</div>
			
<div className="detail">
				<h3> Exercise Details</h3>

				<div className="break-time">
					<h3>Break Time: {time}seconds </h3>
				</div>
			</div>
		</div>
	);
};

export default Break;
