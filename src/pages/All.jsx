import React from "react";
import products from "../data/products";

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
          <div key={card.id} className=" m-1 border border-gray-300 p-4 hover:shadow-xl">
            <div className="overflow-hidden  ">
              <img src={card.image} alt="" />
            </div>
            {/*  */}
            <h1 className="text-2xl">{card.name}</h1>
            <div className="flex gap-2">
              {card.sizes.map((size, index) => (
                <span key={index}
                className="font-bold text-"> {size}</span>
              ))}
            </div>
            {/*  */}
            <div className="flex gap-2 ">
              {card.colors.map((color, index) => (
                <span
                  key={index}
                  className="h-5 w-5 rounded-full border mb-2"
                  style={{ backgroundColor: color }}
                ></span>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* show last hadinf */}
      <div className=""></div>
    </div>
  );
};

export default All;
