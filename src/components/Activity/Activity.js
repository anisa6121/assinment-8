import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import "./Activity.css";
const Activity = () => {

    const [activity, setActivity] = useState([]);
    
    useEffect(() => {
        
        fetch('data.json')
            .then(res => res.json())
        .then(data => setActivity(data))

    },[])


    return (
        <div className='activity-container'>
            
 <div>
                
              
                <Header></Header>
</div>

            
            <div><h1>
            Its one
            </h1></div>

        </div>
    );
};

export default Activity;
