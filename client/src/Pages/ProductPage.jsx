



import React, { useContext } from 'react'
import '../Components/ProductPage/productpage.css'
import BreadCrum from '../Components/Breadcrum/BreadCrum.jsx'
import { ShoeShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';
import Navbar from '../Components/Navbar/Navbar.jsx';


const ProductPage = () => {

  const { all_inventory } = useContext(ShoeShopContext)
  const { productId } = useParams()
  const inventory = all_inventory.find((data) => data.id === Number(productId))


  return (
  <>
    <Navbar />
    <BreadCrum product={inventory} />
    <ProductDisplay product={inventory}  />
    <DescriptionBox />
    <RelatedProducts />


  </>
  )
}

export default ProductPage
