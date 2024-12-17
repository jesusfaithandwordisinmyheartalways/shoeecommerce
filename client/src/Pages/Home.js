

import '../Components/Home/home.css'
import  Navbar from '../Components/Navbar/Navbar.jsx'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offer from '../Components/Offers/Offer'
import NewCollection from '../Components/NewCollection/newcollection'
import Newsletter from '../Components/Newsletter/newsletter'


const Home = () => {


  return (
    <>

   
       <Navbar />
       <Hero />
       <Popular/>
       <Offer />
       <NewCollection />
       <Newsletter />
  


    </>
  )
}




export default Home
