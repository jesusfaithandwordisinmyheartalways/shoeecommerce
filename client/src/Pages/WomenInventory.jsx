

import React, { useContext } from 'react'
import all_inventory from "../Components/Inventory/inventory";
import ShoeData from "../Components/ShoeData/ShoeData";
import { ShoeShopContext } from "../Context/ShopContext";
import Nav_Dropdown from '../Components/images/nav_dropdown.png'
import '../Components/WomenInventory/womeninventory.css'
import Navbar from "../Components/Navbar/Navbar";


const WomenInventory = (props) => {
        const { all_inventory } = useContext(ShoeShopContext)


  return (

   <>

        <Navbar />

        
        <div className='women-inventory-container'>
            <div className='women-inventory-wrapper'>
             
             <div><img src={props.banner} alt=''></img></div>

            </div>

        </div>


        <div className='women-inventory-container-two'>
            <div className='women-inventory-wrapper-two'>
                <div><p>Showing 1-3 <span>out of 3 products</span></p></div>
                <div><button>Sort By <img src={Nav_Dropdown} alt=''></img></button></div>
            </div>

        </div>


        
        <div className='women-inventory-container-three'>
            <div className='women-inventory-wrapper-three'>
                {all_inventory.map((data, index) => {
                    if(props.category === data.category) {
                        return <ShoeData key={index} id={data.id} name={data.name} image={data.image} new_price={data.new_price} old_price={data.old_price} />
                    } else {
                        return null
                    }
                })}
            </div>
        </div>




   </>
  )
}

export default WomenInventory
