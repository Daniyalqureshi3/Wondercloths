import { useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const closeSidebar = () => {
    setIsOpen(false)
  }

  return (
    <header className="w-full border-b border-gray-200 bg-white  ">
      <nav className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        <div className="w-24">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-700 transition hover:bg-gray-100"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <Link
          to="/"
          className="absolute left-1/2 -translate-x-1/2 text-xl font-bold tracking-[0.25em] text-gray-900 sm:text-2xl"
        >
          VEYRON
        </Link>

        <div className="flex w-24 justify-end gap-2">
          <Link
            to="/favorite"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-700 transition hover:bg-gray-100"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"
              />
            </svg>
          </Link>

          <Link
            to="/cart"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-700 transition hover:bg-gray-100"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
              />
            </svg>
          </Link>
        </div>
      </nav>

      {/* sidebar */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40"
          onClick={closeSidebar}
        />
      )}

      <aside
        className={`fixed left-0 top-0 z-50 h-screen w-72 bg-white shadow-xl transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
         }`}
       >
        <div className="flex h-16 items-center justify-between border-b border-gray-200 px-5">
          <h2 className="text-xl font-bold tracking-[0.15em] text-gray-900">
            VEYRON
          </h2>

          <button
            type="button"
            onClick={closeSidebar}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition hover:bg-gray-100"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 6l12 12M18 6L6 18"
              />
            </svg>
          </button>
        </div>

        <div className="px-4 py-6">
          <p className="mb-4 px-3 text-xs font-semibold uppercase tracking-widest text-gray-400">
            Categories
          </p>

          <div className="space-y-1">
            <Link
              to="/All"
              onClick={closeSidebar}
              className="block rounded-lg px-3 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-gray-900"
            >
              All Products
            </Link>

            <Link
              to="/tshirt"
              onClick={closeSidebar}
              className="block rounded-lg px-3 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-gray-900"
            >
              T-Shirts
            </Link>

            <Link
              to="/waffle"
              onClick={closeSidebar}
              className="block rounded-lg px-3 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-gray-900"
            >
              Waffle Shirts
            </Link>

            <Link
              to="/trouser"
              onClick={closeSidebar}
              className="block rounded-lg px-3 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-gray-900"
            >
              Trousers
            </Link>

            <Link
              to="/Pants"
              onClick={closeSidebar}
              className="block rounded-lg px-3 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-gray-900"
            >
              Pants
            </Link>

            <Link
              to="/watches"
              onClick={closeSidebar}
              className="block rounded-lg px-3 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-gray-900"
            >
              Watches
            </Link>
          </div>
        </div>
      </aside>
    </header>
  )
}

export default Navbar