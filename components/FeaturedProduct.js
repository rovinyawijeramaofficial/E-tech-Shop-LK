import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import FeaturedProductCard from "./FeaturedProductCard";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";

export default function FeaturedProduct() {
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();
  const swiperRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const allProducts = Array(12)
    .fill({
      logo: "/images/Rectangle 30.png",
      title: "Iphone 14 Pro Max - 256GB",
      price: "Rs.249,999",
      originalPrice: "Rs.399,999",
      rating: 5,
    })
    .map((product, index) => ({ ...product, id: index + 1 }));

  const products = isMobile ? allProducts.slice(0, 3) : allProducts;

  return (
    <div className="p-4 sm:p-6 md:p-10 bg-gray-100">
      <div className="flex justify-between items-center mb-6 mt-9">
        <h2 className="font-poppins font-semibold text-[29.12px] sm:text-[28px] text-black leading-[1.2]">
          Featured Product
        </h2>
      </div>

      {isMobile ? (
        <div className="flex flex-col gap-3 items-center px-3 w-full">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-md p-3 flex items-center gap-2 w-[473px] h-[190px] max-w-[107%]">
              <img src={product.logo} alt={product.title} className="w-[42%] max-w-[280px] h-auto object-cover rounded-lg" />
              <div className="flex-1">
                <h3 className="font-poppins text-[#000000] text-[2.8vw] sm:text-[14px] leading-[1.2] w-full whitespace-nowrap overflow-hidden text-ellipsis">
                  Apple Iphone 14 Pro Max - <br /> 256GB
                </h3>
                <div className="flex items-center mt-1">
                  {[...Array(product.rating)].map((_, index) => (
                    <img key={index} src="/images/Star Filled.png" alt="Star" className="w-[2.5vw] sm:w-[12px] h-auto" />
                  ))}
                </div>
                <div className="flex items-center gap-1 mt-4">
                  <span className="text-black-500 font-semibold text-[3vw] sm:text-[13px] font-poppins">
                    {product.price}
                  </span>
                  <span className="text-black-500 text-[2.5vw] sm:text-[11px] font-poppins line-through">
                    {product.originalPrice}
                  </span>
                </div>
                <button 
                 onClick={() => router.push("/cart")}
                className="mt-3 border border-gray-300 rounded-[25px] w-[140px] h-[30px] flex items-center justify-center gap-1">
  <img src="/images/Shopping Cart.png" alt="Cart" className="w-[14px] h-[14px]" />
  <span className="text-[9px] leading-[14px] font-poppins font-normal text-black">Add to Cart</span>
</button>
              </div>
            </div>  
          ))}
          <div className="flex justify-center mt-6">
            <button
              onClick={() => router.push("/shopping")}
              className="-mt-3 bg-white border border-gray-300 py-2 px-5 rounded-[25px] w-[152.26px] h-[35.07px] text-[12.67px] font-poppins font-light text-black hover:bg-gray-200 transition"
            >
              View More
            </button>
          </div>
        </div>
      ) : (
        <div className="relative">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={4}
            slidesPerGroup={4} // Move 3 slides at a time
            loop={true}
            speed={600} // Adjusted speed for smooth navigation
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 16 },
              1024: { slidesPerView: 4, spaceBetween: 24 },
            }}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <FeaturedProductCard product={product} />
              </SwiperSlide>
            ))}

                  
          </Swiper>

          {/* Swiper Navigation Buttons */}
          <button
  className="-mt-10 custom-prev absolute top-1/2 -left-6 sm:-left-8 transform -translate-y-1/2 bg-white-500/100 hover:bg-gray-500 transition-shadow shadow-md rounded-full w-12 h-12 flex items-center justify-center z-50"
  onClick={() => swiperRef.current.swiper.slidePrev()}
>
  <img src="/images/ExcludeBig.png" alt="Left Arrow" width={62} height={62} />
</button>
<button
  className="-mt-10 custom-next absolute top-1/2 -right-6 sm:-right-8 transform -translate-y-1/2 bg-white-500/100 hover:bg-gray-500 transition-shadow shadow-md rounded-full w-12 h-12 flex items-center justify-center z-50"
  onClick={() => swiperRef.current.swiper.slideNext()}
>
  <img src="/images/IncludeBig.png" alt="Right Arrow" width={62} height={62} />
</button>



          <div className="custom-pagination mt-3 flex justify-center"></div>

          <div className="flex justify-center mt-6">
            <button
              onClick={() => router.push("/shopping")}
              className="bg-white border border-gray-400 py-2 px-5 rounded-[25px] w-[160px] h-[40px] text-[12px] font-poppins font-light text-black hover:bg-gray-200 transition"
            >
              View More
            </button>
          </div>
        </div>
      )}
    </div>
  );
}



