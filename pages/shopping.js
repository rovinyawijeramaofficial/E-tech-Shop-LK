import Footer from "@/components/CustomerReviews/CustomerReviewsBG/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Shopping() {
  const [currentPage, setCurrentPage] = useState(1);
  const [minPrice, setMinPrice] = useState(19999);
  const [maxPrice, setMaxPrice] = useState(159999);
  const totalPages = 3;
  const router = useRouter();

  const products = Array(8).fill({
    name: "iPhone 14 Pro Max - 256GB",
    price: "Rs. 249,999",
    originalPrice: "Rs. 350,000",
    image: "/images/Rectangle 30.png",
    rating: 5,
  });

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const navigateToSearchShopping = () => {
    router.push("/searchshopping");
  };

  const handleMinPriceChange = (e) => {
    const value = Math.min(Number(e.target.value), maxPrice - 1000);
    setMinPrice(value);
  };

  const handleMaxPriceChange = (e) => {
    const value = Math.max(Number(e.target.value), minPrice + 1000);
    setMaxPrice(value);
  };

  return (
    <>
      <Header />
      <div className="bg-white min-h-screen">
        <div className="container mx-auto py-8 px-4 mt-60">
          {/* Breadcrumb and Title */}
          <button
            className="mb-6 bg-black text-white px-8 py-16 rounded-[25px] text-left w-full"
          >
            <h2 className="text-lg text-gray-300">Home / All Products</h2>
            <h1 className="text-4xl font-bold">All Products</h1>
          </button>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <aside className="lg:w-1/4">
              <h3 className="text-xl font-bold mb-4">Filter Products</h3>
              <div className="space-y-6">
                {/* Availability */}
                <div
                  className="border rounded-lg p-4"
                  style={{
                    width: "275px",
                    height: "168px",
                    borderRadius: "23px",
                    padding: "35px 100px 35px 45px",
                  }}
                >
                  <h4 className="font-semibold mb-4">Availability</h4>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" />
                      <span>In Stock</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" />
                      <span>Out of Stock</span>
                    </label>
                  </div>
                </div>

                {/* Brands */}
                <div
                  className="border rounded-lg p-4"
                  style={{
                    width: "275px",
                    height: "168px",
                    borderRadius: "23px",
                    padding: "35px 100px 35px 45px",
                  }}
                >
                  <h4 className="font-semibold mb-4">Brands</h4>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" />
                      <span>Apple</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" />
                      <span>Samsung</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" />
                      <span>Huawei</span>
                    </label>
                  </div>
                </div>

                {/* Price Range */}
                <div
                  className="border rounded-lg p-4"
                  style={{
                    width: "275px",
                    height: "168px",
                    borderRadius: "23px",
                    padding: "35px 20px",
                  }}
                >
                  <h4 className="font-semibold mb-4 left-[355px]">Price Range</h4>
                  <div className="relative space-y-2">
                    <div className="flex items-center justify-between">
                      <input
                        type="number"
                        value={minPrice}
                        onChange={handleMinPriceChange}
                        min="19999"
                        max="159999"
                        step="1000"
                        className="w-1/2 border px-2 py-1 rounded-lg"
                      />
                      <span className="mx-2">-</span>
                      <input
                        type="number"
                        value={maxPrice}
                        onChange={handleMaxPriceChange}
                        min="19999"
                        max="159999"
                        step="1000"
                        className="w-1/2 border px-2 py-1 rounded-lg"
                      />
                    </div>
                    <div className="relative">
                      <input
                        type="range"
                        min="19999"
                        max="159999"
                        value={minPrice}
                        onChange={handleMinPriceChange}
                        className="absolute left-0 right-0 z-10 w-full appearance-none bg-transparent"
                      />
                      <input
                        type="range"
                        min="19999"
                        max="159999"
                        value={maxPrice}
                        onChange={handleMaxPriceChange}
                        className="absolute left-0 right-0 z-10 w-full appearance-none bg-transparent"
                      />
                      <div
                        className="absolute top-0 left-0 h-2 bg-black rounded-full"
                        style={{
                          width: `${((maxPrice - minPrice) / 140000) * 100}%`,
                          left: `${((minPrice - 19999) / 140000) * 100}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Product List */}
            <main className="lg:w-3/4">
              <div className="flex justify-between items-center mb-6">
                <span className="text-gray-500">Sort By:</span>
                <div className="flex space-x-4">
                  <button className="px-4 py-2 border rounded-lg bg-black text-[#FFFFFF]">
                    Best Selling
                  </button>
                  <button className="px-4 py-2 border rounded-lg">
                    Price: Low to High
                  </button>
                  <button className="px-4 py-2 border rounded-lg">
                    Price: High to Low
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product, index) => (
                  <div
                    key={index}
                    className="border rounded-lg p-4 flex flex-col items-center text-center"
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={150}
                      height={150}
                      className="mb-4"
                    />
                    <h3 className="font-semibold mb-2">{product.name}</h3>
                    <div className="flex items-center mb-2">
                      {Array(product.rating)
                        .fill()
                        .map((_, i) => (
                          <span key={i} className="text-yellow-500">
                            ★
                          </span>
                        ))}
                    </div>
                    <p className="text-gray-500 line-through mb-1">
                      {product.originalPrice}
                    </p>
                    <p className="text-xl font-bold mb-2">{product.price}</p>
                    <button className="bg-black text-white px-4 py-2 rounded-lg">
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-8">
                <div className="flex space-x-2">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-3 py-1 ${
                      currentPage === 1
                        ? "text-gray-400 cursor-not-allowed"
                        : "text-blue-500"
                    }`}
                  >
                    {"<"}
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => (
                    <button
                      key={i + 1}
                      onClick={() => handlePageChange(i + 1)}
                      className={`px-3 py-1 ${
                        currentPage === i + 1
                          ? "bg-blue-500 text-white"
                          : "text-gray-500"
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-3 py-1 ${
                      currentPage === totalPages
                        ? "text-gray-400 cursor-not-allowed"
                        : "text-blue-500"
                    }`}
                  >
                    {">"}
                  </button>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
