import React from 'react'
import products from '../data/products'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react'


const ProductDetail = () => {
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedColor, setSelectedColor] = useState('')
    const {category, id} = useParams()
    const product = products[category].find(
  (item) => item.id === Number(id)
)
  return (
    <div>
        <Navbar />

        {/* detail ptoduct view product detail */}
        
<div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-16">
  <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">

    <div className="overflow-hidden rounded-2xl bg-gray-100">
      <img
        src={product.image}
        alt={product.name}
        className="aspect-4/5 w-full object-cover transition-transform duration-700 hover:scale-105"
      />
    </div>

    <div className="flex flex-col gap-6 py-2 lg:py-6">

      <div>
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
          VEYRON / Collection
        </p>

        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
          {product.name}
        </h1>

        <p className="mt-4 text-2xl font-semibold text-gray-900">
          Rs. {product.price.toLocaleString()}
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex gap-1 text-amber-500">
          ★★★★★
        </div>

        <span className="text-sm text-gray-500">
          {product.rating} / 5
        </span>
      </div>

      <div className="border-t border-gray-200 pt-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-semibold text-gray-900">
            Color
          </h2>

          <span className="text-sm text-gray-500">
            {selectedColor || 'Select a color'}
          </span>
        </div>

        <div className="flex flex-wrap gap-3">
          {product.colors.map((color, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setSelectedColor(color)}
              aria-label={`Select color ${color}`}
              className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition ${
                selectedColor === color
                  ? 'border-gray-900'
                  : 'border-transparent'
              }`}
            >
              <span
                className="h-7 w-7 rounded-full border border-gray-200"
                style={{ backgroundColor: color }}
              />
            </button>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-200 pt-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-semibold text-gray-900">
            Select Size
          </h2>

          <span className="text-sm text-gray-500">
            {selectedSize || 'Choose your size'}
          </span>
        </div>

        <div className="flex flex-wrap gap-3">
          {product.sizes.map((size, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setSelectedSize(size)}
              className={`min-w-14 rounded-lg border px-5 py-3 text-sm font-medium transition ${
                selectedSize === size
                  ? 'border-gray-900 bg-gray-900 text-white'
                  : 'border-gray-300 text-gray-700 hover:border-gray-900'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between rounded-xl bg-gray-50 p-4">
        <span className="font-medium text-gray-700">
          Availability
        </span>

        <span className={`text-sm font-semibold ${ product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
          {product.stock > 0
            ? `${product.stock} in stock`
            : 'Out of stock'}
        </span>
      </div>

      <div>
        <h2 className="mb-3 text-lg font-semibold text-gray-900">
          Product Description
        </h2>

        <p className="text-sm leading-7 text-gray-500 sm:text-base">
          {product.description}
        </p>
      </div>

      <button
        type="button"
        disabled={
          !selectedSize ||
          !selectedColor ||
          product.stock <= 0
        }
        className="w-full rounded-xl bg-gray-900 px-6 py-4 text-sm font-semibold uppercase tracking-widest text-white transition hover:bg-gray-700 disabled:cursor-not-allowed disabled:bg-gray-300"
      >
        Add to Cart
      </button>

    </div>
  </div>
</div>

  <Footer />
    </div>
  )
}

export default ProductDetail
