import React from 'react';
import "./Cart.css";
 import { ToastContainer, toast } from "react-toastify";
const Cart = (props) => {
 const { cart } = props
     
   const notify = () => toast("Wow done your activity"); 
    
    // console.log(cart)
    let times = 0;

    for (const total of cart) {
        times = times + total.time;
    console.log(typeof total.time)
      
    }
    return (
		<div className="total-count">
			<h4>Exercise time: {times} seconds </h4>

			<div className="tost">
				<button onClick={notify}>Activity Completed</button>
				<ToastContainer/>
			</div>
		</div>
    );
};

export default Cart;