


import React, { useContext } from "react"
import '../Cart/Cart.css'
import { ShoeShopContext } from "../../Context/ShopContext"


    const CartItems = () => {
            const {TotalCartAmount, all_inventory, originalCartItems, RemoveCartItems} = useContext(ShoeShopContext);


        return (

            <>

            <div className="cart-item-container">
                <div className="cart-item-wrapper">

                <div><h3>Products</h3></div>
                <div><h3>Title</h3></div>
                <div><h3>Price</h3></div>
                <div><h3>Quantity</h3></div>
                <div><h3>Total</h3></div>
                <div><h3>Remove</h3></div>

                </div>

                </div>

                <hr />








                <div className="checkout-product-container">
                  {all_inventory.map((data) => {
                     if(originalCartItems[data.id] > 0) {
                        return (
                           <div className="checkout-product-wrapper">
                                <div><div><img src={data.image} alt=""></img></div></div>
                                <div><div><p>{data.name}</p></div></div>
                                <div><div><p>$ {data.new_price}</p></div></div>
                                <div><div><p>$ {data.old_price}</p></div></div>
                                <div><div><p>{originalCartItems[data.id]}</p></div></div>
                                <div><div><p>$ {data.new_price * originalCartItems[data.id]} </p></div></div>
                                <div onClick={() => RemoveCartItems(data.id)} style={{cursor: 'pointer'}}><div>X</div></div>
                            </div>
                                
                        )
                     }
                   
                  })}


                </div>

                <hr />





                <div className="cart-total-container">

                    <div className="cart-total-headline"><div><h3>Cart Totals</h3></div></div>

                        

                    <div className="cart-total-wrapper">



                    
               

                      <div className="subtotal-child-wrapper">
                      <div><div><p>Subtotal</p></div></div>
                      <div><div>{TotalCartAmount()}</div></div>
                      </div>


                        <div className="subtotal-child-wrapper-two">
                          <div><div>Shipping Fee</div></div>
                           <div><p>Free</p></div>
                        </div>



                        <div className="subtotal-child-wrapper-three">
                         <div><h3>Total</h3></div>
                         <div><div>{TotalCartAmount()}</div></div>
                       </div>









                    <div className="cart-total-promo-wrapper">

                       <div><div><p>If you have a promo code, Enter it here</p></div></div>

                    
                        <div><input type="text" placeholder="enter promo"></input></div>
                        <div><button>Submit</button></div>
              



                    </div>



               





                    </div>





                </div>

            




                   









               








                        <div className="cart-container-three">

                            <div className="proceed-to-checkout-wrapper">
                            <div><button>PROCEED TO CHECKOUT</button></div>
                            </div>



                        </div>
                 





                 







                  

             



          











            </>
        )
    }



    export default CartItems