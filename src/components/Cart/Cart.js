import React from 'react';
import "./Cart.css";
const Cart = (props) => {
    const {cart} = props
    console.log(cart)
    let times = 0;

    for (const total of cart) {
        times = times + total.time;
    console.log(typeof total.time)
      
    }
    return (
        <div className='total-count'>
          
          <h4>Exercise time: {times} seconds </h4>  


        </div>
    );
};

export default Cart;