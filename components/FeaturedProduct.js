import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import FeaturedProductCard from "./FeaturedProductCard";
import { useState, useEffect } from "react";

export default function FeaturedProduct() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const products = [
    {
      id: 1,
      logo: "/images/Rectangle 30.png",
      title: "iPhone 14 Pro Max - 256GB",
      price: "Rs.249,999",
      originalPrice: "Rs.399,999",
      rating: 5,
    },
    {
      id: 2,
      logo: "/images/Rectangle 30.png",
      title: "iPhone 14 Pro Max - 256GB",
      price: "Rs.249,999",
      originalPrice: "Rs.399,999",
      rating: 5,
    },
    {
      id: 3,
      logo: "/images/Rectangle 30.png",
      title: "iPhone 14 Pro Max - 256GB",
      price: "Rs.249,999",
      originalPrice: "Rs.399,999",
      rating: 5,
    },
  ];

  return (
    <div className="p-4 sm:p-6 md:p-10 bg-gray-100">
      <div className="flex justify-between items-center mb-6 mt-9">
        <h2 className="font-poppins font-semibold text-[29.12px] sm:text-[28px] text-black leading-[1.2]">
          Featured Product
        </h2>
      </div>

      {isMobile ? (
        <div className="flex flex-col gap-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-md p-4 flex items-center gap-4">
              <img
                src={product.logo}
                alt={product.title}
                className="w-[473px] h-[190px] object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{product.title}</h3>
                <div className="flex items-center mt-1">
                  {[...Array(product.rating)].map((_, index) => (
                    <img key={index} src="/images/Star Filled.png" alt="Star" className="w-4 h-4" />
                  ))}
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-black font-bold text-xl">{product.price}</span>
                  <span className="text-gray-500 line-through">{product.originalPrice}</span>
                </div>
                
                <button className="mt-2 border border-gray-400 rounded-[31.79px] py-1 px-3 flex items-center gap-2 w-[170.33px] h-[31.85px]">
                  <img src="/images/Shopping Cart.png" alt="Cart" className="w-4 h-4" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
          <div className="flex justify-center mt-4">
            <button className="bg-white border border-gray-400 py-2 px-6 rounded-[35.19px] font-semibold text-black hover:bg-black hover:text-white transition ">
              View More
            </button>
          </div>
        </div>
      ) : (
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{ prevEl: ".custom-prev", nextEl: ".custom-next" }}
            pagination={{ el: ".custom-pagination", clickable: true }}
            spaceBetween={10}
            slidesPerView={1}
            breakpoints={{
              430: { slidesPerView: 1.5, spaceBetween: 12 },
              640: { slidesPerView: 2, spaceBetween: 16 },
              1024: { slidesPerView: 4, spaceBetween: 24 },
            }}
          >
            {[...products, ...products].map((product, index) => (
              <SwiperSlide key={index}>
                <FeaturedProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="custom-prev absolute top-1/2 -left-4 sm:-left-6 transform -translate-y-1/2 bg-white shadow-md rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-gray-200 transition">
            <img src="/images/ExcludeBig.png" alt="Left Arrow" width={16} height={16} />
          </button>
          <button className="custom-next absolute top-1/2 -right-4 sm:-right-6 transform -translate-y-1/2 bg-white shadow-md rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-gray-200 transition">
            <img src="/images/IncludeBig.png" alt="Right Arrow" width={16} height={16} />
          </button>
          <div className="custom-pagination mt-4 flex justify-center"></div>
        </div>
      )}
    </div>
  );
}
