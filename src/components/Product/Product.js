import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'
const Product = (props) => {
    const {img,category,name,seller,price,stock}= props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt=""  />
            </div>
            <div className='product-name'>
                <h4>{category}: {name}</h4>
                <p><small>by {seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} left in stock.</small></p>
                <button 
                onClick={()=> props.handleAddProduct(props.product)}
                className='add-btn'><FontAwesomeIcon icon={faShoppingCart} />add to chart</button>
            </div>
            
        </div>
    );
}; 

export default Product;