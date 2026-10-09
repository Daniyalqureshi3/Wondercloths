import React from 'react'
import './navbar.css'

const Footer = () => {
  return (
    <div>
      <footer className=" border-t border-gray-200 bg-[#d4b381]   text-white">
  <div className="mx-auto max-w-7xl px-5 py-8">
    <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">

      <div>
        <h1 className="text-2xl font-bold text-black">VEYRON</h1>
        <p className="mt-2 text-sm text-gray-700">
          Modern style for every man.
        </p>
      </div>

      <div className="flex gap-6 text-sm text-gray-700">
        <a href="#" className="hover:text-white">Home</a>
        <a href="#" className="hover:text-white">Shop</a>
        <a href='' className="hover:text-white">Favorites</a>
        <a href="#" className="hover:text-white">Cart</a>
      </div>

    </div>

    <div className="mt-8 border-t border-gray-800 pt-5 text-center">
      <p className="text-sm text-gray-700">
        © 2026 VEYRON. All rights reserved.
      </p>
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer
