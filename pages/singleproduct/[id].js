import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Header from "@/components/Header";
import Footer from "@/components/CustomerReviews/CustomerReviewsBG/Footer";
import Link from 'next/link';

const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedStorage, setSelectedStorage] = useState("256GB");
  const [selectedColor, setSelectedColor] = useState("Space Black");
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { id } = router.query;

  const productId = id || "1"; // Default to product with id "1" if id is missing

  useEffect(() => {
    if (productId) {
      setLoading(false);
    }
  }, [productId]);

  const relatedProducts = [
    {
      id: 1,
      name: "Apple iPhone 14 Pro",
      price: "Rs. 199,999",
      image: "/images/Rectangle 30.png",
    },
    {
      id: 2,
      name: "Samsung Galaxy S21",
      price: "Rs. 129,999",
      image: "/images/Rectangle 30.png",
    },
    {
      id: 3,
      name: "Google Pixel 6",
      price: "Rs. 109,999",
      image: "/images/Rectangle 30.png",
    },
    {
      id: 4,
      name: "OnePlus 9 Pro",
      price: "Rs. 119,999",
      image: "/images/Rectangle 30.png",
    },
  ];

  if (loading) {
    return <div className="text-center mt-20">Loading...</div>;
  }

  return (
    <>
      <Header />
      <div className="container mx-auto mt-80 py-8 px-4">
        {/* Product Section */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Product Images */}
          <div className="lg:w-1/2">
            <Image
              src="/images/image 2.png"
              alt="iPhone 14 Pro Max"
              width={400}
              height={400}
              className="mb-4"
            />
            <div className="flex space-x-4">
              {[1, 2, 3, 4].map((_, index) => (
                <Image
                  key={index}
                  src="/images/image 2.png"
                  alt="Thumbnail"
                  width={80}
                  height={80}
                  className="border rounded-lg"
                />
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="lg:w-1/2">
            <h1 className="text-3xl font-bold mb-4">
              Apple iPhone 14 Pro Max - 256 GB
            </h1>
            <p className="text-gray-500 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
            <p className="mb-4 text-gray-700">
              <span className="font-bold">Category:</span> Electronics
            </p>
            <div className="mb-4">
              <h4 className="font-semibold">Choose your color:</h4>
              <div className="flex space-x-4 mt-2">
                {["Space Black", "Silver", "Gold", "Deep Purple"].map(
                  (color) => (
                    <button
                      key={color}
                      className={`border px-4 py-2 rounded-lg ${
                        selectedColor === color
                          ? "bg-black text-white"
                          : "bg-white"
                      }`}
                      onClick={() => setSelectedColor(color)}
                    >
                      {color}
                    </button>
                  )
                )}
              </div>
            </div>
            <div className="mb-4">
              <h4 className="font-semibold">Choose your storage:</h4>
              <div className="flex space-x-4 mt-2">
                {["128GB", "256GB", "512GB"].map((storage) => (
                  <button
                    key={storage}
                    className={`border px-4 py-2 rounded-lg ${
                      selectedStorage === storage
                        ? "bg-black text-white"
                        : "bg-white"
                    }`}
                    onClick={() => setSelectedStorage(storage)}
                  >
                    {storage}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <h4 className="text-3xl font-bold">Rs. 259,999</h4>
            </div>
            <div className="flex items-center space-x-4 mb-4">
              <button
                className="px-4 py-2 border rounded-lg"
                onClick={() => handleQuantityChange("decrement")}
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                className="px-4 py-2 border rounded-lg"
                onClick={() => handleQuantityChange("increment")}
              >
                +
              </button>
            </div>
            <div className="flex space-x-4">
              <button className="bg-black text-white px-6 py-2 rounded-lg">
                Buy Now
              </button>
              <button className="bg-black text-white px-6 py-2 rounded-lg">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-4">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <div
                key={product.id}
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
                <p className="text-xl font-bold">{product.price}</p>
                <button className="bg-black text-white px-4 py-2 rounded-lg mt-2">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SingleProduct;
