import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function FeaturedProductCard({ product = {} }) {
  const { id, logo, title, price, originalPrice, rating = 0 } = product;
  const [userRating, setUserRating] = useState(0);

  const handleRatingClick = (ratingValue) => {
    setUserRating(ratingValue);
  };

  return (
    <div
      className="bg-white rounded-[15px] shadow-lg flex-shrink-0 w-full max-w-[320px] p-4 relative"
      style={{ boxShadow: "5px 5px 20px rgba(0, 0, 0, 0.1)" }}
    >
      {/* Product Image */}
      {logo ? (
        <div className="flex justify-center">
          <Image
            src={logo}
            alt={`${title} image`}
            width={320}
            height={320}
            className="rounded-t-[15px] object-cover"
            style={{ borderRadius: "15px 15px 0 0", opacity: 1 }}
          />
        </div>
      ) : (
        <div className="w-full h-[200px] bg-gray-200 rounded-t-[15px] flex items-center justify-center">
          <span>No Image</span>
        </div>
      )}

      {/* Left Side Content: Title, Rating, Price, and Button */}
      <div className="flex flex-col justify-start space-y-2 mt-2">
        {/* Product Title */}
        <h3 className="text-black font-semibold text-base text-center">
          {title || "No Title"}
        </h3>

        {/* Product Rating */}
        <div className="flex justify-center mt-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <Image
              key={index}
              src="/images/star Filled.png"
              alt="Star"
              width={16}
              height={16}
              className={`cursor-pointer ${index < (userRating || rating) ? "opacity-100" : "opacity-50"}`}
              onClick={() => handleRatingClick(index + 1)}
            />
          ))}
        </div>

        {/* Product Price */}
        <div className="flex flex-col items-center space-y-1">
          <p className="text-black font-bold text-lg">{price || "No Price"}</p>
          <p className="text-gray-400 line-through text-sm">
            {originalPrice || "No Original Price"}
          </p>
        </div>

        {/* Button Handling */}
        {id === 2 ? (
          <Link href={`/singleproduct/${id}`} passHref>
            <button className="py-2 px-4 rounded-lg w-full bg-white border border-black text-black mt-2">
              <span>View Details</span>
            </button>
          </Link>
        ) : (
          <Link href="/cart" passHref>
            <button className="py-2 px-4 rounded-lg w-full bg-black text-white flex items-center justify-center space-x-2 mt-2">
              <Image
                src="/images/Shopping CartWhite.png" 
                alt="Cart"
                width={16}
                height={16}
              />
              <span>Add to Cart</span>
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export function RelatedProduct() {
  const products = [
    {
      id: 1,
      logo: "/images/Rectangle-30.png",
      title: "iPhone 14 Pro Max - 256GB",
      price: "Rs.249,999",
      originalPrice: "Rs.399,999",
      rating: 5,
    },
    {
      id: 2,
      logo: "/images/Rectangle-30.png",
      title: "iPhone 14 Pro Max - 256GB",
      price: "Rs.249,999",
      originalPrice: "Rs.399,999",
      rating: 5,
    },
    {
      id: 3,
      logo: "/images/Rectangle-30.png",
      title: "iPhone 14 Pro Max - 256GB",
      price: "Rs.249,999",
      originalPrice: "Rs.399,999",
      rating: 5,
    },
    {
      id: 4,
      logo: "/images/Rectangle-30.png",
      title: "iPhone 14 Pro Max - 256GB",
      price: "Rs.249,999",
      originalPrice: "Rs.399,999",
      rating: 5,
    },
  ];

  return (
    <div className="p-4 sm:p-6 mt-10">
      {/* Header Section */}
      <div className="flex justify-center items-center mb-6">
        <h2 className="font-poppins font-semibold text-[24px] text-center text-black">
          Related Products
        </h2>
      </div>

      {/* Product Grid Section */}
      <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
        {products.map((product) => (
          <div key={product.id} className="flex justify-center">
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
