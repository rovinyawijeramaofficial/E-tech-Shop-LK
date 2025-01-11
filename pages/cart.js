import React, { useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Apple iPhone 14 Pro Max 256GB/6GB (2022)",
      price: 199999,
      quantity: 9,
      image: "/images/Rectangle 56.png", // Replace with the actual image path
    },
    {
      id: 2,
      name: "Apple iPhone 14 Pro Max 256GB/6GB (2022)",
      price: 199999,
      quantity: 9,
      image: "/images/Rectangle 56.png",
    },
    {
      id: 3,
      name: "Apple iPhone 14 Pro Max 256GB/6GB (2022)",
      price: 199999,
      quantity: 9,
      image: "/images/Rectangle 56.png",
    },
  ]);

  const [coupon, setCoupon] = useState("");
  const discount = 20000; // Static discount for simplicity
  const router = useRouter();

  const updateQuantity = (id, amount) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleCheckout = () => {
    router.push("/checkout");
  };

  return (
    <>
      <Header />
      <div className="container mx-auto py-8 px-4 mt-60">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-2xl font-bold mb-8">Shopping Cart</h1>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-black text-white">
                  <th className="p-4 text-left">Description</th>
                  <th className="p-4 text-left">Unit Price</th>
                  <th className="p-4 text-left">Quantity</th>
                  <th className="p-4 text-left">Total</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="border-b border-gray-300">
                    <td className="p-4 flex items-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 mr-4 object-cover"
                      />
                      <span>{item.name}</span>
                    </td>
                    <td className="p-4">Rs.{item.price.toLocaleString()}</td>
                    <td className="p-4">
                      <div className="flex items-center">
                        <button
                          className="px-2 py-1 border border-gray-400"
                          onClick={() => updateQuantity(item.id, -1)}
                        >
                          -
                        </button>
                        <span className="px-4">{item.quantity}</span>
                        <button
                          className="px-2 py-1 border border-gray-400"
                          onClick={() => updateQuantity(item.id, 1)}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="p-4">
                      Rs.{(item.price * item.quantity).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mt-8">
            <div className="flex flex-col w-full lg:w-1/2 space-y-4">
              <h2 className="text-lg font-bold">Apply a Coupon</h2>
              <div className="flex items-center space-x-4">
                <input
                  type="text"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  placeholder="Enter a Coupon Code"
                  className="flex-1 p-2 border border-gray-300 rounded"
                />
                <button className="bg-black text-white px-4 py-2 rounded">Apply</button>
              </div>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
              <Link href="/shopping" className="text-sm text-black font-semibold underline">
                &lt;&lt; Return to Shopping
              </Link>
            </div>

            <div className="w-full lg:w-1/3 bg-gray-100 p-6 rounded-lg mt-8 lg:mt-0">
              <h2 className="text-lg font-bold mb-4">Order Overview</h2>
              <div className="flex justify-between mb-2">
                <span>Total</span>
                <span>Rs.{calculateTotal().toLocaleString()}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Discount</span>
                <span>Rs.{discount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>Rs.{(calculateTotal() - discount).toLocaleString()}</span>
              </div>
              <button
                className="w-full bg-black text-white py-2 mt-4 rounded"
                onClick={handleCheckout}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
