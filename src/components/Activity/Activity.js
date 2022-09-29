import React, { useEffect, useState } from "react";
import Answer from "../Answer/Answer";
import Break from "../Breaktime/Break";
import Cart from "../Cart/Cart";
import Exercise from "../Exercise/Exercise";
import Header from "../Header/Header";
import Information from "../Self-Info/Information";
import "./Activity.css";
const Activity = () => {

    const [activities, setActivity] = useState([]);

    const [cart, setCart] = useState([])
    
    useEffect(() => {
        
        fetch('data.json')
        .then(res => res.json())
        .then(data => setActivity(data))

    },[])


  const handleAddToExercise = (data) => {
      console.log("cliked", data);
      const newCart = [...cart, data];
      
    setCart(newCart);
  };   

    return (
		<div className="activity-container">
			<div>
				<Header></Header>

	<div className="card">
	{activities.map((exersise) => (
	<Exercise exersise={exersise}
			key={exersise.id}
		handleAddToExercise={handleAddToExercise}
						></Exercise>
					))}
				</div>
			</div>

			<div className="side-container">
	<Information></Information>

    <Break></Break>
               
    <Cart cart={cart}></Cart>
        </div>
        
        <Answer></Answer>
	</div>
    );
};

export default Activity;
