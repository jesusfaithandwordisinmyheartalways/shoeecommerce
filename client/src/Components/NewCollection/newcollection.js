



import React from 'react'
import new_collection from '../Inventory/newcollect'
import '../NewCollection/newcollect.css'
import ShoeData from '../ShoeData/ShoeData'
import new_collection_two from '../Inventory/newcollectwo';

const NewCollection = () => {


  return (
   <>

      <div className='new-collection-container'>
      <div className='new-collection-wrapper'>
            <div><h3>NEW COLLECTIONS</h3></div>
            <div><hr /></div>
        </div>
      </div>



            <div className='new-collection-section'>
                {new_collection.map((data, index) => {
                    return <ShoeData key={index} id={data.id} image={data.image} name={data.name} old_price={data.old_price} new_price={data.new_price} />
                })}
            </div>


            <div className='new-collection-section-two'>
             {new_collection_two.map((data, index) => {
                    return <ShoeData key={index} id={data.id} image={data.image} name={data.name} old_price={data.old_price} new_price={data.new_price} />
             })}
            </div>



   </>
  )
}






export default NewCollection
