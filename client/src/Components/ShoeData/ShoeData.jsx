




import React from 'react'
import '../ShoeData/shoedata.css'
import { Link } from 'react-router-dom'




const ShoeData = (props) => {
    
  return (
   <>
        <div className='shoe-container'>
           
         <div>
          <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt=''></img></Link>
         
            <div className='shoe-price-text'><p>{props.name}</p></div>
       
           <div className='shoe-price-wrapper'>
             <div className='shoe-new-price'><p> $ {props.new_price}</p></div>
             <div className='shoe-old-price'><p> $ {props.old_price}</p></div>
           </div>
        

         </div>

            
         

            </div>

      

   </>
  )
}

export default ShoeData
