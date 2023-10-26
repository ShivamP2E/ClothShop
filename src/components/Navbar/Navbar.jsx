import React, { useContext } from 'react'
import { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { ShopContext } from '../../Context/ShopContext'
const Navbar = () => {


  const [menu, setMenu]=useState("shop");
  const {getTotalCartItems} = useContext(ShopContext)
  return (
    <div className='navbar'>
     <div className='nav-logo'>
        <img src={logo} alt="xyz"/>
        <p>ClothShop</p>
       </div>
       <div className='nav-menu'>
       <ul>
        <li onClick={()=> {setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>SHOP</Link>  {menu === "shop"? <hr/>: <></>}</li>
        <li onClick={()=> {setMenu("men")}}><Link style={{textDecoration:'none'}} to='/men'>MEN</Link> {menu === "men"? <hr/>:  <></>}</li>
        <li onClick={()=> {setMenu("women")}}><Link style={{textDecoration:'none'}} to='/women'>WOMEN</Link> {menu === "women"? <hr/>:  <></>}</li>
        <li onClick={()=> {setMenu("kids")}}><Link style={{textDecoration:'none'}} to='/kids'>KIDS</Link> {menu === "kids"? <hr/>:  <></>}</li>
        </ul>
       </div>
      <div className='nav-login-cart'>
        <Link to='/login'><button type='login'>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt='syx' /></Link>  
        <div className='nav-cart-count'>{getTotalCartItems()}</div>
      </div>
    </div>
  )
}


export default Navbar