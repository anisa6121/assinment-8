
import React, { useEffect, useState } from "react";

import "./Break.css";

const Break = () => {

 	const [time, settime] = useState(0)
	
	
localStorage.setItem('time', JSON.stringify(settime))
    return (
		<div className="">
			<div className="clicked-btn">
				<button className="btn" onClick={() => settime(10)}>10s</button>
				<button className="btn" onClick={() => settime(20)}>20s</button>
				<button className="btn" onClick={() => settime(30)}>30s</button>
				<button className="btn" onClick={() => settime(40)}>40s</button>
				<button className="btn" onClick={() => settime(50)}>50s</button>

				
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