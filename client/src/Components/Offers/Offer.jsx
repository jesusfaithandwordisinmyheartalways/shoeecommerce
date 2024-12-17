




import React from 'react'
import '../Offers/offer.css'
import ShoeBanner from '../images/shoebanner.png'

const Offer = () => {

  return (
    <>

        <div className='offer-container'>
            <div className='offer-wrapper'>

            <div>
                <div><h3>EXCLUSIVE </h3></div>
                <div><h3>OFFERS FOR YOU </h3></div>
                <p>ONLY BEST SELLERS WORLDWIDE</p>

            </div>

            <div>
                <div><img src={ShoeBanner} alt=''></img></div>
            </div>



            </div>
        </div>



    </>


  )
}





export default Offer
