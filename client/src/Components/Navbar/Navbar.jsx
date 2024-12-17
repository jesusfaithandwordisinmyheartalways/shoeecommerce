


import React from 'react'
import '../Navbar/Navbar.css'
import { ShoeShopContext } from '../../Context/ShopContext'
import Logo from '../images/logo.png'
import Cart_Icon from '../images/cart_icon.png'
import ShoeIcon from '../images/shoehome.jpg'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useContext } from 'react'
import NavDropDown from '../images/nav_dropdown.png'


const Navbar = () => {
  const {TotalCartAmountItems} = useContext(ShoeShopContext);
  const [home, setHome] = useState('')
  const navMenu = useRef()


    const Toggle_Dropdown = (e) => {
        navMenu.current.classList.toggle('nav-menu-visible')
        e.target.classList.toggle('open')
    }
  

  


  return (
   <>


<div className='nav-container'>
        <div className='nav-wrapper'>

          <div><Link to="/home"  className='nav-logo'><img src={ShoeIcon} alt=''></img></Link></div>   
          <div><Link to="/home" className='nav-logo'><h3>SHOE STORE</h3></Link></div>  

          <div onClick={Toggle_Dropdown} className='nav-dropdown'><img src={NavDropDown} alt=''></img></div>

         <div>
         <ul className='nav-menu' ref={navMenu}>
            <li onClick={() => setHome('mens') }><Link className='nav-menu-link' to="/mens">Mens</Link>{home === 'mens'? <hr></hr> : <></>} </li>
            <li onClick={() => setHome('women')}><Link className='nav-menu-link' to="/women">Women</Link>{home === 'women'? <hr></hr> : <></>} </li>
            <li onClick={() => setHome('kids')}><Link className='nav-menu-link' to="/kid">Kids</Link>{home === 'kids' ? <hr></hr> : <></>} </li>

          </ul>
         </div>


          <div className='nav-login-cart-section'>
            <Link to="/login"><button>Login</button></Link>
            <Link to="/cart"><img src={Cart_Icon} alt=''></img></Link>
            <div className='nav-cart-count'> {TotalCartAmountItems()} </div>
          </div>








        </div>


      </div>




   </>
  )
}







export default Navbar
