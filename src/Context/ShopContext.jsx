import React,{createContext} from "react";
import all_product from '../components/Assets/all_product'
import { useState } from "react";
import './ShopContext.css'


export const ShopContext = createContext(null);
const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length; index++)
    {
        cart[index] = 0;
    }
     return cart;
}
 
const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
   
    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        const addedProduct = all_product.find((product) => product.id === Number(itemId));
    
        if (addedProduct) {
            const message = `Added "${addedProduct.name}" to the cart successfully`;
    
            // Create a new div element for the alert
            const alertElement = document.createElement('div');
            alertElement.className = 'alert success'; // You can change 'success' to 'error', 'warning', etc. for different styles
            alertElement.textContent = message;
    
            // Append the alert element to the body
            document.body.appendChild(alertElement);
    
            // Remove the alert after a specified duration (e.g., 3 seconds)
            setTimeout(() => {
                alertElement.classList.add('fade-out');
                setTimeout(() => {
                    alertElement.remove();
                }, 2000); // Adjust the time to match your animation duration
            }, 3000); // Adjust the time for how long the alert is displayed
        }
    };
    
    const removeFromCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount = () => {
        let totalAmount=0;
        let itemInfo;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                 itemInfo = all_product.find((product)=>
                    product.id ===Number(item), 
                    totalAmount += itemInfo.new_price * cartItems[item]
                )
            }
            return totalAmount;
        }
    }
    const getTotalCartItems = () => {
        let totalItem=0;
        for (const item in cartItems)
        {
            if(cartItems[item]>0){
                totalItem+=cartItems[item];
            }
        }
        return totalItem;
    }

    const contextValue = {getTotalCartItems, getTotalCartAmount,all_product,cartItems, addToCart,removeFromCart}; 
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
            </ShopContext.Provider>
    )
}
export default ShopContextProvider;