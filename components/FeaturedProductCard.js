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
      className="bg-white rounded-[15px] shadow-lg flex-shrink-0 w-[416px] h-[617px] p-6 relative"
      style={{ boxShadow: "5px 5px 20px rgba(0, 0, 0, 0.1)" }}
    >
      {/* Product Image */}
      {logo ? (
        <div className="flex justify-center">
          <Image
            src={logo}
            alt={`${title} image`}
            width={416}
            height={416}
            className="rounded-t-[15px] object-cover"
            style={{ borderRadius: "15px 15px 0 0", opacity: 1 }}
          />
        </div>
      ) : (
        <div className="w-full h-[416px] bg-gray-200 rounded-t-[15px] flex items-center justify-center">
          <span>No Image</span>
        </div>
      )}

      {/* Left Side Content: Title, Rating, Price, and Button */}
      <div className="flex flex-col justify-start space-y-1 mt-2">
        {/* Product Title */}
        <h3 className="text-black font-semibold text-lg mt-0">{title || "No Title"}</h3>

        {/* Product Rating */}
        <div className="flex mt-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <Image
              key={index}
              src="/images/star filled.png"
              alt="Star"
              width={20}
              height={20}
              className={`cursor-pointer ${index < (userRating || rating) ? "opacity-100" : "opacity-50"}`}
              onClick={() => handleRatingClick(index + 1)}
            />
          ))}
        </div>

        {/* Product Price */}
        <div className="flex items-center space-x-2 mt-0">
          <p className="text-black font-bold text-xl mt-3">{price || "No Price"}</p>
          <p className="text-gray-400 line-through text-lg mt-3">{originalPrice || "No Original Price"}</p>
        </div>

        {/* Button Handling */}
        {id === 2 ? (
          <Link href={`/singleproduct/${id}`} passHref>
            <button className="py-3 px-6 rounded-lg h-[45.9px] w-[372.35px] mt-0 flex items-center justify-center space-x-2 bg-white border border-black text-black">
              <span>View Details</span>
            </button>
          </Link>
        ) : (
          <Link href="/cart" passHref>
            <button className="py-3 px-6 rounded-lg h-[45.9px] w-[372.35px] mt-0 flex items-center justify-center space-x-2 bg-black text-white">
              <Image
                src="/images/Shopping CartWhite.png"
                alt="Cart"
                width={27}
                height={27}
              />
              <span>Add to Cart</span>
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}
