import React from "react";
import logo from "../../../images/logo.png";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import CategoryIcon from '@material-ui/icons/Category';
import HomeIcon from '@material-ui/icons/Home';
import  { useState } from "react";
import "./Header.css"
import { Link, NavLink } from "react-router-dom";



const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <img src={logo}></img>
        </div>

        {/* 2nd menu part  */}
        <div
          className="menu-link">
          <ul>
            <li>
              <NavLink to="/"className="link" ><HomeIcon className="icon link" />{'\u00A0'}Home</NavLink>
            </li>
            <li>
              <NavLink to="/products"className="link"><CategoryIcon className="icon link"/>{'\u00A0'}Products</NavLink>
            </li>
            <li >
              
              <NavLink to="/search"className="link"><SearchIcon className="icon link" />{'\u00A0'}Search</NavLink>
            
          </li>
          <li>
            
              <NavLink to="/cart"className="link"> <ShoppingCartIcon className="icon link" />{'\u00A0'}Cart</NavLink>
            
          </li>
          <li>
            
              <NavLink to="/account"className="link"><AccountBoxIcon className="icon link" />{'\u00A0'}Profile</NavLink>
            
          </li>
            
          </ul>
          
         
          
        </div>
      
      
        

      </nav>

     
    </>
  );
};

export default Navbar;
