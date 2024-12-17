




import React from 'react'
import '../Footer/footer.css'
import FooterImage from '../images/image.webp'


const Footer = () => {

  return (
 <>

    <div className='footer-container'>

    <div className='footer-wrapper'>

        <div><img src={FooterImage} alt=''></img></div>
        <div><h3>SHOE STORE</h3></div>

    </div>



    </div>





    <div className='footer-container-two'>

    <div className='footer-wrapper-two'>
        <div>
            <div><h3> Get to Know Us</h3></div>
            <div><p> Careers</p></div>
            <div><p> Shoe Store Newsletter</p></div>
            <div><p> About Shoe Store</p></div>
            <div><p> Accessibility</p></div>
            <div><p> Sustainability</p></div>
            <div><p> Press Center</p></div>
            <div><p>Investor Relations</p></div>
            <div><p> Shoe Store science</p></div>

        </div>


        <div>
            <div><h3>Make Money with Us</h3></div>
            <div><p> Sell</p></div>
            <div><p> Sell Apps</p></div>
            <div><p> Become an Affiliate</p></div>
            <div><p> Become a Delivery Driver</p></div>
            <div><p> Start a Package Delivery Business</p></div>
            <div><p> Advertise Your Products</p></div>
            <div><p>Investor Relations</p></div>
            <div><p>Become an Hub Partner</p></div>

        </div>




    </div>


    </div>







    <div className='footer-container-three'>

        <div className='footer-wrapper-three'>
            <div><p>Copyright @ 2023 - All Right Reserved</p></div>
        </div>

    </div>


 </>
  )
}






export default Footer
