import React from 'react';
import "./Information.css";
const Information = () => {
    return (
		<div className="info">
			<h3>
				Name: <span>Qurratul Ayne Anisa</span>
			</h3>

			<h4> Personal Info:
				{" "}
				<strong>
					I like to study and and make desserts.
				</strong>
            </h4>
            
            <h3>Age: 19
                <br />
                Weight: 60
            </h3>
            
           
		</div>
    );
};

export default Information;