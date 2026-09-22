import { useEffect, useState } from "react";

import'./navbar.css'
const Carousle = () => {
    const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=1600&q=85",
      title: "Elevate Your Style",
      text: "Modern outfits made for your everyday look.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1600&q=85",
      title: "New Season Collection",
      text: "Discover the latest styles for men.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1610652492500-ded49ceeb378?auto=format&fit=crop&w=1600&q=85",
      title: "Classic. Clean. Confident.",
      text: "Upgrade your wardrobe with timeless pieces.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1600&q=85",
      title: "Made For Your Look",
      text: "Shirts, trousers and essentials in one place.",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
          <section className="relative mx-auto w-full max-w-7xl overflow-hidden ">
      <div className="relative h-100 sm:h-125 md:h-150">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              current === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40"></div>

            <div className="absolute inset-0 flex items-center">
              <div className="px-6 sm:px-10 md:px-16">
                <p className="mb-3 text-sm font-medium uppercase tracking-[4px] text-white/80">
                  Men's Collection
                </p>

                <h1 className="max-w-xl text-4xl font-bold text-white sm:text-5xl md:text-6xl">
                  {slide.title}
                </h1>

                <p className="mt-4 max-w-md text-base text-white/80 sm:text-lg">
                  {slide.text}
                </p>

                <button className="mt-7 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-gray-200">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition hover:bg-white/40 sm:left-6"
        >
          ←
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition hover:bg-white/40 sm:right-6"
        >
          →
        </button>

        <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2 rounded-full transition-all ${
                current === index ? "w-8 bg-white" : "w-2 bg-white/50"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>

    </div>
  )
}

export default Carousle
