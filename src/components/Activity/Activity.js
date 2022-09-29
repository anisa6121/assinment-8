import React, { useEffect, useState } from "react";
import Break from "../Breaktime/Break";
import Exercise from "../Exercise/Exercise";
import Header from "../Header/Header";
import Information from "../Self-Info/Information";
import "./Activity.css";
const Activity = () => {

    const [activities, setActivity] = useState([]);
    
    useEffect(() => {
        
        fetch('data.json')
        .then(res => res.json())
        .then(data => setActivity(data))

    },[])


    return (
		<div className="activity-container">
		<div>
                <Header></Header>
                
                <div className="card">
                   
            {
             activities.map(exersise => <Exercise           
                        
                 exersise={exersise}
                 
                 key={exersise.id}
                        
                        ></Exercise>)
                        
             }   
                
    </div>
			</div>

			<div className="side-container">
				
<Information></Information>

<Break></Break>
			</div>
		</div>
    );
};

export default Activity;
