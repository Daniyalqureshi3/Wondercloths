import products from '../data/products'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Shirts = () => {
  return (
    <div>
      <Navbar />
      {/* product map */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-3 ">
        {products.shirts.map((card) => (
          <div
            key={card.id}
            className=" m-1 border border-gray-200 p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
          >
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
          </div>
        ))}
      </div>


      {/* footer */}
      <Footer />
      
    </div>
  )
}

export default Shirts
