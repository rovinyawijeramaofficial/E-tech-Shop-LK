import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import FeaturedProductCard from "./FeaturedProductCard";

export default function FeaturedProduct() {
  // Base product array
  const baseProducts = [
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
  ];

  // Duplicate the baseProducts array to create multiple arrays
  const featuredProducts = Array.from({ length: 2 }, () => baseProducts);

  return (
    <div className="p-4 sm:p-6 md:p-10 -mt-6 -ml-4 sm:-ml-6 md:-ml-10">
      {/* Swiper Sections for Each Product Array */}
      {featuredProducts.map((products, arrayIndex) => (
        <div className="relative mb-10" key={arrayIndex}>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: `.custom-prev-${arrayIndex}`,
              nextEl: `.custom-next-${arrayIndex}`,
            }}
            pagination={{ el: `.custom-pagination-${arrayIndex}`, clickable: true }}
            spaceBetween={1}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 16 },
              1024: { slidesPerView: 4, spaceBetween: 24 },
            }}
          >
            {products.map((product, index) => (
              <SwiperSlide key={index}>
                <FeaturedProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ))}
    </div>
  );
}
