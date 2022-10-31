import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const cart= props.cart;
    const Total = cart.reduce((total,cart)=>total+cart.price,0);
    let shipping=0;
    if(Total>100 || Total<=0){
        shipping=0;
    }
    else if (Total >35 || Total<=100) {
        shipping=4.99;
    } 
    else if(Total>0 || Total<=35){
        shipping=12.99;
    }
    else{
        shipping=0;
    }
    
    const tax= Total*.10;
    const totalBill= Total+shipping+tax;

    const formatNumber= num=>{
        const float= num.toFixed(2);
        return Number(float);
    }
    return (
        <div className='cart'>
            <h3 className='center'>Order Summary</h3>
            <h4 className='center'>Items Order: {cart.length} </h4>
            <h5><small>Product price:  ${formatNumber(Total)}</small></h5>
            <h5><small>Shipping & Handling Price:   ${formatNumber(shipping)}</small> </h5>
            <h5><small>Total before Tax :    ${formatNumber(Total+shipping)}</small></h5>
            <h5><small>Estimated Tax:  ${formatNumber(tax)}</small>   </h5><hr />
            
            <h3 style={{color:'red'}}>Total Bill:   ${formatNumber(totalBill)}</h3>
            <button className='reviewBtn'>Review Your Order</button>
        </div>
    );
};

export default Cart;