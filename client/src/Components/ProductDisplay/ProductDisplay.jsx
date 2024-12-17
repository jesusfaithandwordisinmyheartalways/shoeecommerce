




import React, { useContext } from 'react'
import '../ProductDisplay/ProductDisplay.css'
import { ShoeShopContext } from '../../Context/ShopContext'
import Star_Dull_Icon from '../images/star_dull_icon.png'
import Star_Icon from '../images/star_icon.png'
import all_inventory from '../Inventory/inventory'
import kid_product from '../Inventory/kidproduct'



const ProductDisplay = (props) => {
      const { product } = props;
      const { AddCartItems } = useContext(ShoeShopContext);
      

  return (
   <>

        <div className='product-display-container'>
            <div className='product-display-wrapper'>

            <div className='product-display-images'>
                <div><img src={product.image} alt=''></img></div>
                <div><img src={product.image} alt=''></img></div>
                <div><img src={product.image} alt=''></img></div>
                <div><img src={product.image} alt=''></img></div>

            </div>

            <div className='product-display-image-wrapper'>
              <div><img src={product.image} alt=''></img></div>
            </div>



            <div className='product-display-name-wrapper'>
                <h3>{product.name}</h3>
            </div>


            <div className='product-star-wrapper'>
                <div><img src={Star_Icon} alt=''></img></div>
                <div><img src={Star_Icon} alt=''></img></div>
                <div><img src={Star_Icon} alt=''></img></div>
                <div><img src={Star_Icon} alt=''></img></div>
                <div><img src={Star_Dull_Icon} alt=''></img></div>
                <div><div>(120)</div></div>

            </div>


            <div className='product-price-wrapper'>
              <div> ${product.old_price}</div>
              <div> ${product.new_price}</div>

            </div>




            <div className='product-description-wrapper'>
                <div>
                  <p>shoes to choose from</p>
                   
                </div>

            </div>



            <div className='product-size-wrapper'>
                <div><h3>SELECT SIZE</h3></div>
             </div>




             <div className='product-sizes-chart-wrapper'>
                    <div><div>S</div></div>
                    <div><div>M</div></div>
                    <div><div>L</div></div>
                    <div><div>XL</div></div>
             </div>



             <div className='product-add-to-cart-wrapper'>
                <div><button onClick={() => AddCartItems(product.id)}>ADD TO CART</button></div>
             </div>




             <div className='product-category-wrapper'>
               <div><p><span>Category</span> Men shoes of buyer's choice</p></div>

             </div>



             <div className='product-tag-wrapper'>
                 <div><p><span>Tags</span> Men shoes</p></div>

             </div>





            </div>




         




        </div>





   </>
  )
}




export default ProductDisplay
