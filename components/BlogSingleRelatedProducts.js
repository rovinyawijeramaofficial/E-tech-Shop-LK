import React from "react";
import FeaturedProductCard from "./FeaturedProductCard";

export default function RelatedProduct() {
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
  ];

  return (
    <div className="p-4 sm:p-6 md:p-10 mt-60">
      {/* Header Section */}
      <div className="pt-10 flex justify-between -mt-10 items-center mb-6">
        <h2
          className="font-poppins font-semibold text-[47.12px] leading-[76.18px] text-[#000000]"
          style={{ width: "408px", height: "77px", marginLeft: "82px" }}
        >
          Related Products
        </h2>
      </div>

      {/* Product Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="flex justify-center">
            {/* Pass the product data correctly to the FeaturedProductCard */}
            <FeaturedProductCard product={product} />
          </div>
        ))}
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
