import React from "react";
import products from "../data/products";
import {Link} from'react-router-dom'

const All = () => {
  return (
    <div>
      <div className=" max-w-full mt-3 items-center flex justify-center gap-2 sm:gap-4">
        <div className=" bg-white/95  flex flex-col  ">
          <div className="rounded-full  h-17 w-17 sm:h-28 sm:w-28 md:h-38 md:w-38 overflow-hidden ">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX7r8DW1ORa-XoVaN6TgIZRTmnNK5d2CWUY1r4L3_Xuw&s=10"
              alt="t-shirt"
              className="h-full w-full object-cover"
            />
          </div>
          <h1 className="text-center font-medium text-black/90">T-shirt</h1>
        </div>
        <div className=" bg-white/95  flex flex-col">
          <div className="rounded-full h-17 w-17 sm:h-28 sm:w-28 md:h-38 md:w-38 overflow-hidden ">
            <img
              src="https://focusclothing.pk/cdn/shop/files/104_b91ddd4f-7cf8-45bc-93f7-992c873294b9.jpg?v=1779518339&width=2000"
              alt="t-shirt"
              className="h-full w-full object-cover"
            />
          </div>
          <h1 className="text-center font-medium text-black/90">Pants</h1>
        </div>
        <div className=" bg-white/95  flex flex-col">
          <div className="rounded-full  h-17 w-17 sm:h-28 sm:w-28 md:h-38 md:w-38 overflow-hidden ">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq2LLqU1Togf0eX9NMkCDRyphelLwaby_ElLmmAC14TQ&s"
              alt="t-shirt"
              className="h-full w-full object-cover"
            />
          </div>
          <h1 className="text-center font-medium text-black/90">shirt</h1>
        </div>
        <div className=" bg-white/95  flex flex-col">
          <div className="rounded-full h-17 w-17 sm:h-28 sm:w-28 md:h-38 md:w-38 overflow-hidden ">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVDgyFy1rF7ckWFw23XB-Nol7ppeOQIdbiTnIKg5AFYg&s=10"
              alt="t-shirt"
              className="h-full w-full object-cover"
            />
          </div>
          <h1 className="text-center font-medium text-black/90">Watches</h1>
        </div>
      </div>
      <h1 className="text-center mt-3 font-medium text-4xl font-serif shadow-2xl text-gray-400 hover:text-black">
        Trending Now
      </h1>
      {/* show some items  */}
      {/*  */}
      {/*  */}
      {/* map the items */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-3 ">
        {products.shirts.slice(0, 4).map((card) => (
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
      <div className="flex items-center gap-4 my-10">
  <div className="flex-1 border-t border-gray-300"></div>

  <button  className="text-sm font-semibold uppercase tracking-wider hover:text-gray-500">
    <Link to="/shirts">See More</Link>
  </button>

  <div className="flex-1 border-t border-gray-300"></div>
</div>
      {/* show last hadinf */}
      <div className=""></div>
    </div>
  );
};

export default All;
