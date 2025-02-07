import React from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Confirmation() {
  return (
    <>
      <Header />
      <div className="container mx-auto py-12 px-4 mt-60">
        <div className="text-center">
          <div className="mb-6">
            <span className="text-6xl text-green-600">&#10003;</span>
          </div>
          <h1 className="text-3xl font-bold mb-4">Your Payment Has Been Received!</h1>
          <p className="text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8 border border-gray-200 p-4 rounded-lg">
          <div>
            <h2 className="font-bold text-lg mb-2">Customer Details</h2>
            <p>Name: John Doe</p>
            <p>Email: johndoe@gmail.com</p>
            <p>Payment Method: Cash on Delivery</p>
          </div>
          <div>
            <h2 className="font-bold text-lg mb-2">Shipping Address</h2>
            <p>123 Main Street,</p>
            <p>Kegalle</p>
            <h2 className="font-bold text-lg mt-4">Billing Address</h2>
            <p>123 Main Street,</p>
            <p>Kegalle</p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Order Overview</h2>
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
                {[1, 2, 3].map((_, index) => (
                  <tr key={index} className="border-b border-gray-300">
                    <td className="p-4 flex items-center">
                      <img
                        src="/images/Rectangle 56.png"
                        alt="Apple iPhone 14 Pro Max 256GB/6GB (2022)"
                        className="w-16 h-16 mr-4 object-cover"
                      />
                      <span>Apple iPhone 14 Pro Max 256GB/6GB (2022)</span>
                    </td>
                    <td className="p-4">Rs.199,999</td>
                    <td className="p-4">9</td>
                    <td className="p-4">Rs.1,799,991</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 text-right">
            <div className="flex justify-end mb-2">
              <span className="mr-4">Total:</span>
              <span>Rs.1,999,999</span>
            </div>
            <div className="flex justify-end mb-2">
              <span className="mr-4">Discount:</span>
              <span>Rs.20,000</span>
            </div>
            <div className="flex justify-end font-bold text-lg">
              <span className="mr-4">Total:</span>
              <span>Rs.465,556,554</span>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <button className="bg-black text-white px-6 py-2 rounded">Download Invoice (PDF)</button>
          <Link href="/cart" className="hover:underline text-sm font-bold">
          <button className="bg-black text-white px-6 py-2 rounded">My Account</button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
