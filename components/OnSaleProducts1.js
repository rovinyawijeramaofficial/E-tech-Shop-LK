import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import FeaturedProductCard from "./FeaturedProductCard";
import { useRouter } from "next/router";

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

  const router = useRouter(); // <-- Call the useRouter hook here
  
  return (
    <div className="hidden md:block p-4 sm:p-6 md:p-8 bg-[rgb(244, 241, 241)] rounded-lg">
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
      </div>

     {/* View More Button */}
     <div className="flex justify-center -mt-2">
            <button
              onClick={() => router.push("/shopping")}
              className="mt-4 bg-white border border-gray-400 py-2 px-5 rounded-[35.19px] w-[152.26px] h-[35.07px] text-[12.67px] font-poppins font-light text-black hover:bg-gray-200 transition"
            >
              View More
            </button>
          </div>
          <br/>
    </div>
  );
}

