import React from 'react';
import "./Exercise.css";
const Exercise = ({exersise}) => {
    // console.log(props.exersise)
    console.log(exersise)

    const { img, name, text, age, time} = exersise
    return (
		<div className="container">
            <img src={img} alt="" />
            
			<div className='activity-info'>
				<h3>{name}</h3>
				<p>
					{text
						? text?.slice(0, 150) + "..."
						: "no found"}
				</p>
				<h4>Age: {age}</h4>
                <h5>Time: {time}s</h5>

                
                <button className='btn-select'>Add To List</button>
            </div>
            
            
		</div>
    );
};

export default Exercise;