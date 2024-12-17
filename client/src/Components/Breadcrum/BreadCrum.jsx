




import React from 'react'
import Arrow_Icon from '../images/arrow_icon.png'
import '../Breadcrum/BreadCrum.css'



const BreadCrum = (props) => {
        const { product } = props

  return (
   <>

       

         <div className='BreadCrum-Container'>

         <div className='BreadCrum-Wrapper'>
             
             <div>
               HOME<img src={Arrow_Icon} alt=''></img>SHOP<img src={Arrow_Icon} alt=''></img>{product.category}<img src={Arrow_Icon} alt=''></img>{product.name}
             </div>

             
           </div>




         </div>
            
      






   </>
  )
}

export default BreadCrum
