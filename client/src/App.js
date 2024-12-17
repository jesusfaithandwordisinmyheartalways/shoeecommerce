


import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './Pages/SignUp.js'
import Login from './Pages/Login.js'
import Home from "./Pages/Home.js";
import ShopContextProvider from "./Context/ShopContext.jsx";
import Footer from "./Components/Footer/footer.js";
import ShopInventory from "./Pages/ShopInventory.jsx";
import men_banner from './Components/images/banner_mens.png'
import women_banner from './Components/images/banner_women.png'
import WomenInventory from "./Pages/WomenInventory.jsx";
import kid_banner from './Components/images/banner_kids.png'
import KidInventory from "./Pages/KidInventory.jsx";
import ProductPage from "./Pages/ProductPage.jsx";
import Cart from "./Pages/Cart.jsx";
import Checkout from "./Components/Checkout/Checkout.jsx";

function App() {

  return (
    <>
     <ShopContextProvider>
        <BrowserRouter >
           <Routes>
             <Route path="/" element={<SignUp />}/>
             <Route path="/login" element={<Login />}/>
             <Route path="/home" element={<Home />}/>
             <Route path="/mens" element={<ShopInventory banner={men_banner} category='men' />} />
             <Route path="/women" element={<WomenInventory banner={women_banner} category='women' />}/>
             <Route path="/kid" element={<KidInventory banner={kid_banner} category='kid' />}/>
               <Route path="/product/:productId" element={<ProductPage />}/>
               <Route path="/cart" element={<Cart />} />
               <Route path="/checkout" element={<Checkout />}/>
        </Routes>
        <Footer />
   </BrowserRouter>

      </ShopContextProvider>
   


    </>



  );
}


export default App;
