



import React from 'react'
import '../RelatedProducts/RelatedProducts.css'
import men_related_product from '../Inventory/menrelated';
import ShoeData from '../ShoeData/ShoeData';




const RelatedProducts = () => {

  return (
  <>

        <div className='related-products-container'>


            <div className='related-products-wrapper'>

                <div><div><h3>Related Products</h3></div></div>

                    <div className='hr'> <hr /></div>
            </div>
           


            <div className='related-products-wrapper-two'>
                {men_related_product.map((data, index) => {
                    return <ShoeData key={index} id={data.id} name={data.name} image={data.image} new_price={data.new_price} old_price={data.old_price} />
                })}
            </div>



        </div>




  </>
  )
}





export default RelatedProducts
