import React from 'react';
import data from './data'
import './App.css';

function App() {
    const openMenu = () =>{
        document.querySelector(".sidebar").classList.add("open");
    }
    const closeMenu = () =>{
        document.querySelector(".sidebar").classList.remove("open");
    }    
  return (
    <div className='grid-container'>
           <header className='header'>
               <div className="brand">
                   <button onClick={openMenu}>
                       &#9776;
                   </button>
                   <a href="index.html">JessPrime</a>
               </div>
               <div className="header-links">
                   <a href="cart.html">Cart</a>
                   <a href="signin.html">Login</a>
               </div>
           </header> 
           <aside className="sidebar">
               <h3>Shopping Categories</h3>
               <button className="sidebar-close-button" onClick={closeMenu}>X</button>
               <ul>
                   <li>
                       <a href="index.html">pants</a>
                   </li>
                   <li>
                    <a href="index.html">shirts</a>
                </li>
               </ul>
           </aside>
           <main className='main'>
               <div className='content'>
                    <ul className='products'>
                        {
                            data.products.map(product =>
                                <li>
                                <div className='product'>
                                    <img className="product-image" src={product.image} alt="product" />
                                    <div className="product-name">
                                        <a href="product.html">{product.name}</a> 
                                    </div>
                                    <div className="product-brand">{product.brand}</div>
                                    <div className="product-price">${product.price}</div>
                                    <div className="product-rating">{product.rating} Stars {product.numReviews}</div>
                                </div>
                            </li>)
                        }
                    </ul>          
               </div>
           </main>
           <footer className='footer'>
               All rights reserved 2020
           </footer>
        </div>
      
  );
}

export default App;
