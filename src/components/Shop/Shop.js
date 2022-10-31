import React, { useState } from 'react';
 import fakeData from '../../fakeData';
import Product from '../Product/Product';
 import './Shop.css';

const Shop = () => {
     const first10 = fakeData.slice(0,10);
     const [products, setProducts]= useState(first10);

     const [cart, setCart] = useState([]);

     const handleAddProduct=(product)=> {
        console.log("Product Added.",product);
        const newCart = [...cart,product];
        setCart(newCart);
     }
    
    return (
        <div className='shop-container'>
            <div className="product-container">
            <ul>
                {
                    products.map(products=> <Product 
                        handleAddProduct={handleAddProduct}
                        product={products}></Product>) 
                }
              </ul>
            </div>

            <div className="chart-container">
                <h1>Oder Summary</h1>
                <h5>Items Ordered: <span style={{color:"red"}}>{cart.length}</span></h5>
                <h5>Items: <span style={{color:"red"}}>${cart.length}</span></h5>
                <h5>shipping & handling: <span style={{color:"red"}}>${cart.length}</span></h5>
                <h5>Total before Tax: <span style={{color:"red"}}>${cart.length}</span></h5>
                <h5>Estimated Tax: <span style={{color:"red"}}>${cart.length}</span></h5>
                <h3>Order Total: ${cart.length}</h3>
            </div>
           
             
           
        </div>
    );
};

export default Shop;