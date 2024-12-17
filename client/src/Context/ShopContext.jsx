


import React from 'react'
import {useState} from 'react'
import all_inventory from '../Components/Inventory/inventory'
import { createContext} from 'react'

export const ShoeShopContext = createContext(null)


  const OriginalCart = () => {
        let emptyCart = {}
        for(let i = 0; i < all_inventory.length + 1; i++) {
            emptyCart[i] = 0
        }
            return emptyCart
  }


 const ShopContextProvider = ({ children }) => {
        const [originalCartItems, setOriginalCartItems] = useState(OriginalCart());

        const TotalCartAmountItems = () => {
          let totalCartAmount = 0;
           for(const index in originalCartItems) {
               if(originalCartItems[index] > 0 ) {
                 totalCartAmount += originalCartItems[index]
               }
           }
                return totalCartAmount
        }


        const TotalCartAmount = () => {
            let totalCartAmount = 0;
            for(const index in originalCartItems) {
                 if(originalCartItems[index] > 0 ) {
                    const CartItemInfo =  all_inventory.find((product) => product.id === Number(index))
                    totalCartAmount += originalCartItems[index] * CartItemInfo.new_price
                 }
            }
                    return totalCartAmount;
        }

        
            const AddCartItems = (items) => {
                setOriginalCartItems((cartItems) => ({...cartItems, [items]: cartItems[items] + 1} ))
            }



            const RemoveCartItems = (items) => {
                setOriginalCartItems((cartItems) => ({...cartItems,[items]: cartItems[items] - 1}))
            }


            
            const contextValue = {all_inventory, originalCartItems, TotalCartAmountItems, TotalCartAmount, AddCartItems, RemoveCartItems}


        return (

            <>  
                <ShoeShopContext.Provider value={contextValue}>
                        {children}
                </ShoeShopContext.Provider>


            </>
        )


 }




 export default ShopContextProvider