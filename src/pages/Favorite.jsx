import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { cartuse } from '../context/cartcontext'
import { MdFavorite } from "react-icons/md";
import { Link } from 'react-router-dom';

const Favorite = () => {
  const {state, dispatch} = cartuse()

  return (
    <div>
      <Navbar />
{/* fav products */}
{state.favorite.length > 0 && (
  <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">

    <div className="mb-8">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">
        VEYRON / YOUR WISHLIST
      </p>

      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
        Your Favorites
      </h1>
    </div>

    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {state.favorite.map((item) => (
        <div
          key={item.id}
          className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:border-gray-300 hover:shadow-lg"
        >
          <div className="h-64 overflow-hidden bg-gray-100">
            <img
              src={item.image}
              alt={item.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="p-5">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
              VEYRON / {item.category}
            </p>

            <h2 className="mt-2 text-lg font-semibold text-gray-900">
              {item.name}
            </h2>

            <p className="mt-3 text-xl font-bold text-gray-900">
              Rs. {item.price.toLocaleString()}
            </p>

            <button
              type="button"
              onClick={() =>
                dispatch({
                  type: "REMOVE_FAVORITE",
                  payload: item.id
                })
              }
              className="mt-5 w-full rounded-full border border-gray-200 px-5 py-2.5 text-sm font-semibold text-gray-600 transition-all duration-300 hover:border-red-500 hover:bg-red-600 hover:text-white"
            >
              Remove from Favorites
            </button>
          </div>
        </div>
      ))}
    </div>

  </div>
)}



{/*  */}
{state.favorite.length === 0 && (
  <div className="flex min-h-[65vh] flex-col items-center justify-center px-4 py-16 text-center">
    
    <div className="mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-gray-100">
      <MdFavorite className="text-5xl text-gray-700" />
    </div>

    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">
      VEYRON / YOUR WISHLIST
    </p>

    <h1 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
      Your Favorites are Empty
    </h1>

    <p className="mt-4 max-w-md text-sm leading-6 text-gray-500 sm:text-base">
      You haven't added any products to your favorites yet.
      Explore our collection and save the pieces you love.
    </p>

    <Link
      to="/All"
      className="mt-8 inline-flex items-center justify-center rounded-full bg-gray-900 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-white transition duration-300 hover:bg-gray-700"
    >
      Explore Collection
    </Link>

  </div>
)}

      <Footer />
      
    </div>
  )
}

export default Favorite
