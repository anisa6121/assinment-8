
import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import "./Break.css";

const Break = () => {

    const [first, setfirst] = useState(0)

    return (
		<div className="">
			<div className="clicked-btn">
				<button onClick={() => setfirst(10)}>10s</button>
				<button onClick={() => setfirst(20)}>20s</button>
				<button onClick={() => setfirst(30)}>30s</button>
				<button onClick={() => setfirst(40)}>40s</button>
				<button onClick={() => setfirst(50)}>50s</button>
			</div>

			<div className="detail">
				<h3> Exercise Details</h3>
<Cart></Cart>
				<div className="break-time">
					<h3>Break Time: {first}seconds </h3>
				</div>
			</div>
		</div>
    );
};

export default Break;