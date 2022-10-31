import React from 'react';

const Cart = (props) => {
    const cart= props.cart;
    const Total = cart.reduce((total,cart)=>total+cart.price,0);
    let shipping=0;
    if(Total>35 || Total<=0){
        shipping=0;
    }
    else if (Total >15 || Total<=35) {
        shipping=4.99;
    } 
    else if(Total>0 || Total<=15){
        shipping=12.99;
    }
    else{
        shipping=0;
    }
    
    const tax= Total*.10;
    const totalBill= Total+shipping+tax;
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Order: {cart.length} </p>
            <p>Product price:      ${Total}</p>
            <p><small>Billing & Shipping Price:  ${shipping}</small> </p>
            <p><small>Tax:  </small> ${tax}</p>
            <p><small>Excluded with Tax : ${Total+shipping+tax}</small></p>
            <p>Total Bill:  ${totalBill}</p>
        </div>
    );
};

export default Cart;