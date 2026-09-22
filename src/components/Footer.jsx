import React from 'react'
import './navbar.css'

const Footer = () => {
  return (
    <div>
      <footer className="mt-10 border-t border-gray-200 bg-gray-700 text-white">
  <div className="mx-auto max-w-7xl px-5 py-8">
    <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">

      <div>
        <h1 className="text-2xl font-bold">MENZO</h1>
        <p className="mt-2 text-sm text-gray-400">
          Modern style for every man.
        </p>
      </div>

      <div className="flex gap-6 text-sm text-gray-300">
        <a href="#" className="hover:text-white">Home</a>
        <a href="#" className="hover:text-white">Shop</a>
        <a href='' className="hover:text-white">Favorites</a>
        <a href="#" className="hover:text-white">Cart</a>
      </div>

    </div>

    <div className="mt-8 border-t border-gray-800 pt-5 text-center">
      <p className="text-sm text-gray-500">
        © 2026 MENZO. All rights reserved.
      </p>
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer
