import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { cartuse } from '../context/cartcontext';


const Cart = () => {
  const {state, dispatch} =cartuse()
const totalitem = state.cart.reduce(
  (total, item) => total + item.quantity,
  0
)
const totalprice = state.cart.reduce(
  (total, item) => total + item.quantity * item.price,
  0
)

  return (
    <div >
      <Navbar />
      <br /><br /><br /> <br />
      {state.cart.length > 0 &&(
     state.cart.map((item) => (
  <div
    key={item.id}
    className="group relative flex flex-col gap-5 rounded-2xl border border-gray-200 bg-white p-4 transition-all duration-300 hover:border-gray-300 hover:shadow-lg sm:flex-row sm:items-center sm:p-6 mt-2"
  >
    <div className="h-36 w-full shrink-0 overflow-hidden rounded-xl bg-gray-100 sm:h-40 sm:w-32">
      <img
        src={item.image}
        alt={item.name}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>

    <div className="flex flex-1 flex-col justify-center gap-3">
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
          VEYRON / {item.category}
        </p>

        <h2 className="mt-2 text-lg font-semibold text-gray-900 sm:text-xl">
          {item.name}
        </h2>
      </div>

      {item.color && (
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span>Color:</span>
          <span
            className="h-5 w-5 rounded-full border border-gray-300"
            style={{ backgroundColor: item.color }}
          />
        </div>
      )}

      {item.size && (
        <p className="text-sm text-gray-500">
          Size: <span className="font-medium text-gray-800">{item.size}</span>
        </p>
      )}

      <p className="text-xl font-semibold text-gray-900">
         Quantity: {item.quantity}
      </p>
      <p className="text-xl font-bold text-gray-900">
        Rs. {(item.price * item.quantity).toLocaleString()}
      </p>
    </div>

    <button
      type="button"
      onClick={() => dispatch({ type: "remove_cart", payload: item.id })}
      className="self-start rounded-full border border-gray-200 px-5 py-2.5 text-sm font-semibold text-gray-600 transition-all duration-300 hover:border-red-500 hover:bg-red-600 hover:text-white hover:shadow-[0_0_18px_rgba(239,68,68,0.55)] sm:self-center"
    >
      Remove
    </button>

  </div>
  
))
      )}
      <div className="">
      {state.cart.length === 0 && (
        

<div className="flex min-h-[65vh] flex-col items-center justify-center px-4 py-16 text-center">
  <div className="mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-gray-100">
    <FaCartShopping className="text-5xl text-gray-700" />
  </div>

  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">
    VEYRON / YOUR BAG
  </p>

  <h1 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
    Your Cart is Empty
  </h1>

  <p className="mt-4 max-w-md text-sm leading-6 text-gray-500 sm:text-base">
    Looks like you haven't added anything to your cart yet.
    Explore our collection and find something you'll love.
  </p>

  <Link
    to="/All"
    className="mt-8 inline-flex items-center justify-center rounded-full bg-slate-600 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-[#d2c7a1] transition duration-300 hover:bg-gray-700"
  >
    Explore Collection
  </Link>
</div>

      )}

<div className="mt-5 flex w-full flex-col gap-5 rounded-2xl bg-[#171717] p-5  shadow-lg sm:p-7">
  <h1 className="font-sans text-2xl font-bold tracking-wide text-[#C8A45D]">
    ORDER SUMMARY
  </h1>

  <hr className="border-gray-700" />

  <div className="flex items-center justify-between gap-4">
    <h2 className="font-medium text-gray-300">Total Quantity</h2>
    <h2 className="font-semibold text-white">{totalitem} items</h2>
  </div>

  <div className="flex items-center justify-between gap-4">
    <h2 className="font-medium text-gray-300">Total Price</h2>
    <h2 className="font-bold text-[#C8A45D]">
      Rs. {totalprice.toLocaleString()}
    </h2>
  </div>


  <button
    className="w-full rounded-xl bg-[#C8A45D] px-8 py-4  font-semibold tracking-wide text-black transition duration-300 hover:bg-[#b8934d] sm:w-auto sm:self-end"
    >
    Proceed to Checkout →
  </button>
    
</div>

</div>
      <Footer />
    </div>
  )
}

export default Cart
