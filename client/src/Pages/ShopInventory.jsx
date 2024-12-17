



import React, { useContext } from "react";
import all_inventory from "../Components/Inventory/inventory";
import ShoeData from "../Components/ShoeData/ShoeData";
import { ShoeShopContext } from "../Context/ShopContext";
import Nav_Dropdown from '../Components/images/nav_dropdown.png'
import '../Components/ShopInventory/shopinventory.css'
import Navbar from "../Components/Navbar/Navbar";

const ShopInventory = (props) => {
            const { all_inventory } = useContext(ShoeShopContext)
            
        return (
            <>

                <Navbar />

                <div className="shop-inventory-container">
                    <div className="shop-inventory-wrapper">
                    
                    <div><img src={props.banner} alt="" className="shop-banner"></img></div>
                    

                   
                    </div>



                </div>




                <div className="shop-inventory-container-three">

                <div className="shop-inventory-wrapper-three">
                    <div><p>showing 1-3 <span> out of 3 products</span> </p></div>
                     <div><button>Sort By<img src={Nav_Dropdown} alt=""></img></button></div>

                    </div>
                </div>





                <div className="shop-inventory-container-two">

                 <div className="shop-inventory-wrapper-four">
                 { all_inventory.map((data, index) => {
                            if(props.category === data.category) {
                                return <ShoeData key={index} id={data.id} name={data.name} image={data.image} new_price={data.new_price} old_price={data.old_price}  />
                            } else {
                                return null
                            }
                    })} 
                 </div>




                </div>




            </>
        )
}



export default ShopInventory