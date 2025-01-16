import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import FeaturedProductCard from "./FeaturedProductCard";

export default function FeaturedProduct() {
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
    {
      id: 4,
      logo: "/images/Rectangle 30.png",
      title: "iPhone 14 Pro Max - 256GB",
      price: "Rs.249,999",
      originalPrice: "Rs.399,999",
      rating: 5,
    },
    {
      id: 5,
      logo: "/images/Rectangle 30.png",
      title: "iPhone 14 Pro Max - 256GB",
      price: "Rs.249,999",
      originalPrice: "Rs.399,999",
      rating: 5,
    },
  ];

  return (
    <div className="p-4 sm:p-6 md:p-10 bg-gray-100">
      {/* Header Section */}
      <div className="pt-10 flex justify-between -mt-10 items-center mb-6">
        <h2
          className="font-poppins font-semibold text-[47.12px] leading-[76.18px] text-[#000000]"
          style={{ width: "415px", height: "77px" }}
        >
          Featured Product
        </h2>
      </div>

      {/* Swiper Section */}
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{ prevEl: ".custom-prev", nextEl: ".custom-next" }}
          pagination={{ el: ".custom-pagination", clickable: true }}
          spaceBetween={1}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 16 },
            1024: { slidesPerView: 4, spaceBetween: 24 },
          }}
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              {/* Pass the product data correctly to the FeaturedProductCard */}
              <FeaturedProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Arrows */}
        <button className="custom-prev absolute top-1/2 -left-6 transform -translate-y-1/2 bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-200 transition">
          <img
            src="/images/ExcludeBig.png"
            alt="Left Arrow"
            width={20}
            height={20}
          />
        </button>
        <button className="custom-next absolute top-1/2 -right-6 transform -translate-y-1/2 bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-200 transition">
          <img
            src="/images/IncludeBig.png"
            alt="Right Arrow"
            width={20}
            height={20}
          />
        </button>

        {/* Custom Pagination */}
        <div className="custom-pagination mt-4 flex justify-center"></div>
      </div>

      {/* View More Button */}
      <div className="mt-6 flex justify-center">
        <a href="/shopping" passHref>
          <button className="bg-white border border-black py-2 px-6 rounded-md font-semibold text-black hover:bg-black hover:text-white transition">
            View More
          </button>
        </a>
      </div>
    </div>
  );
}
