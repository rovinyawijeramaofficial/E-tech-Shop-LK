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
    <div className="p-4 sm:p-6 md:p-8 bg-gray-100">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-poppins font-semibold text-[24px] sm:text-[28px] text-black leading-[1.2]">
          On Sale Products
        </h2>
      </div>

      {/* Swiper Section */}
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{ prevEl: ".custom-prev", nextEl: ".custom-next" }}
          pagination={{ el: ".custom-pagination", clickable: true }}
          spaceBetween={8}
          slidesPerView={1}
          breakpoints={{
            430: { slidesPerView: 1.5, spaceBetween: 12 },
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

        {/* Custom Navigation Arrows */}
        <button className="custom-prev absolute top-1/2 -left-4 sm:-left-6 transform -translate-y-1/2 bg-white shadow-md rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-gray-200 transition">
          <img
            src="/images/ExcludeBig.png"
            alt="Left Arrow"
            width={16}
            height={16}
          />
        </button>
        <button className="custom-next absolute top-1/2 -right-4 sm:-right-6 transform -translate-y-1/2 bg-white shadow-md rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-gray-200 transition">
          <img
            src="/images/IncludeBig.png"
            alt="Right Arrow"
            width={16}
            height={16}
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
