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

        {/* detail ptoduct view product detail */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-15 mt-5'>

          <div className=" overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full aspect-3/4 object-cover transition-transform duration-500 hover:scale-105" />
          </div>
          {/* product detail */}

          <div className="flex flex-col gap-7">
            <h1 className='text-3xl font-bold text-gray-600'>{product.name}</h1>
            <p className=" text-3xl font-bold text-gray-600">
              Rs. {product.price.toLocaleString()}
            </p>

            {/*  */}
            <div className="flex gap-5  ">
              {product.colors.map((color, index) => (
                <span
                key={index}
                className="h-7 w-7 rounded-full border border-gray-300"
                style={{ backgroundColor: color }}
                ></span>
              ))}
            </div>
            {/*  */}
                        <div className="flex gap-10 ">
              {product.sizes.map((size, index) => (
                <span
                  key={index}
                  className=" flex flex-wrap gap-5 border p-1 text-2xl font-medium  text-gray-600"
                >
                  {" "}
                  {size}
                </span>
              ))}
            </div>
            {/*  */}
            <h2 className='text-2xl font-bold text-gray-600'>Quantity: {product.stock}</h2>
            <h3 className='text-2xl font-bold text-gray-600'>Ratting: {product.rating}</h3>
            {/* detail */}
            <div className="">
              <p>{product.description}</p>
            </div>
          </div>

     </div>

  <Footer />
    </div>
  )
}

export default ProductDetail
