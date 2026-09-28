import React from 'react'
import products from '../data/products'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const ProductDetail = () => {
    const {category, id} = useParams()
    const product = products[category].find(
  (item) => item.id === Number(id)
)
  return (
    <div>
        <Navbar />
        <div>
    <h1>{product.name}</h1>
    <p>{product.price}</p>
    <img src={product.image} alt={product.name} />
  </div>
  <Footer />
    </div>
  )
}

export default ProductDetail
