import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import products from '../data/products'
import { Link } from 'react-router-dom'
import { cartuse } from '../context/cartcontext'
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";

const Tshirt = (card) => {
  const {dispatch, state} = cartuse()
const favorite = (card) => {
  dispatch({
    type: "ADD_FAVORITE",
payload: {
  productId: card.id,
  image: card.image,
  category: "shirts",
  price: card.price,
  name: card.name,
}
  })
}
  return (
    <div>
      <Navbar  />
      {/* products */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-3 ">
        {products.tshirts.map((card) => {
    const isFavorite = state.favorite.some(
      (item) =>
        item.productId === card.id &&
        item.category === "shirts"
    )
          return(
          <div
            key={card.id}
            className="relative m-1 border border-gray-200 p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
            >
                      <div className="absolute top-3 right-3 z-10">
                        <button
                          type="button"
                          onClick={() => favorite(card)}
                          className="text-2xl transition-transform duration-200 hover:scale-110"
                        >
                          {isFavorite ? (
                            <MdFavorite className="text-red-500" />
                          ) : (
                            <MdFavoriteBorder className="text-gray-400" />
                          )}
                        </button>
                      </div>
          <Link   key={card.id} to={`/detail/tshirts/${card.id}`}>
            <div className="overflow-hidden">
              <img
                src={card.image}
                alt={card.name}
                className="w-full aspect-3/4 object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            {/*  */}
            <h1 className="mt-3 font-medium text-base">{card.name}</h1>
            <p className="mt-1 text-lg font-bold">
              Rs. {card.price.toLocaleString()}
            </p>
            <div className="flex gap-2">
              {card.sizes.map((size, index) => (
                <span
                  key={index}
                  className="mt-3 flex flex-wrap gap-2 text-sm text-gray-600"
                >
                  {" "}
                  {size}
                </span>
              ))}
            </div>
            {/*  */}
            <div className="flex gap-2 mt-2 ">
              {card.colors.map((color, index) => (
                <span
                  key={index}
                  className="h-5 w-5 rounded-full border border-gray-300"
                  style={{ backgroundColor: color }}
                ></span>
              ))}
            </div>
        </Link>
          </div>
        )
})}
      </div>
      <Footer />
      
    </div>
  )
}

export default Tshirt
