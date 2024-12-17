


import React from 'react'
import '../Popular/popular.css'
import ShoeData from '../ShoeData/ShoeData'
import men_shoes from '../Inventory/menproduct.js'
import women_product from '../Inventory/womenproduct.js'
import kid_product from '../Inventory/kidproduct.js'


const Popular = () => {


  return (
   <>
   
     
       
       <div className='popular-wrapper'><h3>POPULAR IN SHOES</h3></div>
          <div className='hr-tag'><hr /></div>

          <div className='shoe-section'>
          {men_shoes.map((data, index) => {
            return  <ShoeData key={index} id={data.id} image={data.image} name={data.name} old_price={data.old_price} new_price={data.new_price} />  
          })}
          </div>
      

          
          <div className='women-section'>
            {women_product.map((data, index) => {
                return <ShoeData key={index} id={data.id} image={data.image} name={data.name} old_price={data.old_price} new_price={data.new_price} />
            })}
            
          </div>
       

       <div className='kid-section'>
        {kid_product.map((data, index) => {
          return <ShoeData key={index} id={data.id} image={data.image} name={data.name} old_price={data.old_price} new_price={data.new_price} />
        })}

       </div>





      




   </>
  )
}





export default Popular
