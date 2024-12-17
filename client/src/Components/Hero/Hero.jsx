


import React from 'react'
import Hand_Icon from '../images/handicon.png';
import Hero_Image from '../images/heroimage.png';
import Arrow_Image from '../images/arrowimage.png'
import '../Hero/hero.css'

const Hero = () => {

  return (
   <>

    <div className='hero-container'>
        <div className='hero-wrapper'>
        

        <div><h3>NEW ARRIVALS ONLY</h3></div>

        <div className='home-section'>
            <div><p>Mens Shoes</p></div>
            <div><p>Women Shoes</p></div>
            <div><p>Kids Shoes</p></div>

        </div>

        <div className='home-hero'><img src={Hero_Image} alt=''></img></div>



        </div>
    </div>



   </>







  )
}

export default Hero
