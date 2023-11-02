// import React, { useContext } from 'react'
// import { useState } from 'react'
// import './Navbar.css'
// import { Link } from 'react-router-dom'

// import logo from '../Assets/logo.png'
// import cart_icon from '../Assets/cart_icon.png'
// import { ShopContext } from '../../Context/ShopContext'
// const Navbar = () => {


//   const [menu, setMenu]=useState("shop");
//   const {getTotalCartItems} = useContext(ShopContext)
//   return (
//     <div className='navbar'>
//      <div className='nav-logo'>
//         <img src={logo} alt="xyz"/>
//         <p>ClothShop</p>
//        </div>
//        <div className='nav-menu'>
//        <ul>
//         <li onClick={()=> {setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>SHOP</Link>  {menu === "shop"? <hr/>: <></>}</li>
//         <li onClick={()=> {setMenu("men")}}><Link style={{textDecoration:'none'}} to='/men'>MEN</Link> {menu === "men"? <hr/>:  <></>}</li>
//         <li onClick={()=> {setMenu("women")}}><Link style={{textDecoration:'none'}} to='/women'>WOMEN</Link> {menu === "women"? <hr/>:  <></>}</li>
//         <li onClick={()=> {setMenu("kids")}}><Link style={{textDecoration:'none'}} to='/kids'>KIDS</Link> {menu === "kids"? <hr/>:  <></>}</li>
//         </ul>
//        </div>
//       <div className='nav-login-cart'>
//         <Link to='/login'><button type='login'>Login</button></Link>
//         <Link to='/cart'><img src={cart_icon} alt='syx' /></Link>  
//         <div className='nav-cart-count'>{getTotalCartItems()}</div>
//       </div>
//     </div>
//   )
// }


// export default Navbar
import React, { useContext, useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
  const [menu, setMenu] = useState('shop');
  const [user, setUser] = useState(null);
  const { getTotalCartItems } = useContext(ShopContext);

  useEffect(() => {
    // Check if the user is authenticated when the component mounts
    const authenticatedUser = JSON.parse(localStorage.getItem('authUser'));
    if (authenticatedUser) {
      setUser(authenticatedUser);
    }
  }, []);

  const handleSignInWithGoogle = () => {
    // You would initiate the Google Auth0 login process here.
    // Once the user is authenticated, you should store the user information in local storage or state.
    // For simplicity, I'm using local storage to store the user info.

    const fakeAuthUser = {
      name: 'John Doe', // Replace with the actual user's name after successful authentication.
    };

    localStorage.setItem('authUser', JSON.stringify(fakeAuthUser));
    setUser(fakeAuthUser);
  };

  const handleSignOut = () => {
    // Clear the user information from local storage to sign out.
    localStorage.removeItem('authUser');
    setUser(null);
  };

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt='xyz' />
        <p>ClothShop</p>
      </div>
      <div className='nav-menu'>
        <ul>
          <li onClick={() => setMenu('shop')}>
            <Link style={{ textDecoration: 'none' }} to='/'>
              SHOP
            </Link>{' '}
            {menu === 'shop' ? <hr /> : <></>}
          </li>
          <li onClick={()=> {setMenu("men")}}><Link style={{textDecoration:'none'}} to='/men'>MEN</Link> {menu === "men"? <hr/>:  <></>}</li>
         <li onClick={()=> {setMenu("women")}}><Link style={{textDecoration:'none'}} to='/women'>WOMEN</Link> {menu === "women"? <hr/>:  <></>}</li>
       <li onClick={()=> {setMenu("kids")}}><Link style={{textDecoration:'none'}} to='/kids'>KIDS</Link> {menu === "kids"? <hr/>:  <></>}</li>
          {/* Add other menu items as needed */}
        </ul>
      </div>
      <div className='nav-login-cart'>
        {user ? (
          <div>
            <p>Welcome, {user.name}</p>
            <button onClick={handleSignOut}>Sign Out</button>
          </div>
        ) : (
          <Link to='/login'>
            <button type='login' onClick={handleSignInWithGoogle}>
              Login
            </button>
          </Link>
        )}
        <Link to='/cart'>
          <img src={cart_icon} alt='syx' />
        </Link>
        <div className='nav-cart-count'>{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
