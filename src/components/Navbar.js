import React from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css'


 const Navbar = ()=>{
    return(
            <nav className="nav">
                <div className="container">
                    <Link to="/" className="brand-logo">Shopify</Link>
                    
                    <ul className="right">
                        <li><Link to="/">Our Store</Link></li>
                        <li><i class="material-icons">store</i></li>
                        <li><Link to="/cart">My cart</Link></li>
                        <li><i class="material-icons">shopping_cart</i></li>
                        


                    </ul>
                </div>
            </nav>  
    )
}

export default Navbar;
