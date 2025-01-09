import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SingleProduct = () => {
  const router = useRouter();
  const { id } = router.query; // Get the product ID from the URL

  // State for the product data
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      // Simulating product data fetch
      const fetchProduct = () => {
        const productData = {
          id: 1,
          name: "Apple iPhone 14 Pro Max - 256GB",
          description:
            "The latest iPhone with a 256GB storage capacity, powered by the A16 Bionic chip.",
          price: "Rs. 259,999",
          category: "Electronics",
          colors: ["Space Black", "Silver", "Gold", "Deep Purple"],
          storageOptions: ["128GB", "256GB", "512GB"],
          image: "/images/Rectangle 30.png",
          rating: 5,
        };
        // Simulating the product fetch by using the `id`
        if (parseInt(id) === productData.id) {
          setProduct(productData);
        }
      };
      fetchProduct();
    }
  }, [id]);

  // Avoid rendering hooks before product is available
  if (!product) {
    return <div>Loading...</div>; // Or an error message
  }

  // State for product interactions
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedStorage, setSelectedStorage] = useState(product.storageOptions[1]);

  const handleQuantityChange = (type) => {
    setQuantity(type === "increment" ? quantity + 1 : Math.max(quantity - 1, 1));
  };

  return (
    <>
      <Header />
      <div className="container mx-auto mt-60 py-8 px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2">
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={400}
              className="mb-4"
            />
          </div>

          <div className="lg:w-1/2">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-500 mb-4">{product.description}</p>
            <p className="mb-4 text-gray-700">
              <span className="font-bold">Category:</span> {product.category}
            </p>
            <h4 className="font-semibold mb-2">Choose your color:</h4>
            <div className="flex space-x-4 mb-4">
              {product.colors.map((color) => (
                <button
                  key={color}
                  className={`border px-4 py-2 rounded-lg ${
                    selectedColor === color ? "bg-black text-white" : "bg-white"
                  }`}
                  onClick={() => setSelectedColor(color)}
                >
                  {color}
                </button>
              ))}
            </div>

            <h4 className="font-semibold mb-2">Choose your storage:</h4>
            <div className="flex space-x-4 mb-4">
              {product.storageOptions.map((storage) => (
                <button
                  key={storage}
                  className={`border px-4 py-2 rounded-lg ${
                    selectedStorage === storage ? "bg-black text-white" : "bg-white"
                  }`}
                  onClick={() => setSelectedStorage(storage)}
                >
                  {storage}
                </button>
              ))}
            </div>

            <h4 className="text-3xl font-bold mb-4">{product.price}</h4>
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
      </div>
      <Footer />
    </>
  );
};

export default SingleProduct;
