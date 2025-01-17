// Import required libraries
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Footer from "@/components/CustomerReviews/CustomerReviewsBG/Footer";
import Header from "@/components/Header";

const Checkout = () => {
  const router = useRouter(); // For navigation
  const [selectedBranch, setSelectedBranch] = useState('');

  const branches = [
    {
      name: 'Gampaha Branch',
      address: '410/61C, Main Road, Gampaha',
      phone: '0714206969',
    },
    {
      name: 'Kegalle Branch',
      address: '410/61C, Main Road, Gampaha',
      phone: '0714206969',
    },
  ];

  const handleBranchSelection = (branchName) => {
    setSelectedBranch(branchName);
  };

  const handleCheckout = () => {
    // Navigate to confirmation.js
    router.push('/confirmation');
  };

  return (
    <>
      <Header />
      <div className="container mx-auto py-8 px-4 mt-60"></div>
      <div className="container mx-auto p-6">
        {/* Header */}
        <header className="mb-6">
          <h1 className="text-2xl font-bold">Card/Checkout</h1>
          <h2 className="text-3xl font-semibold">Checkout</h2>
        </header>

        {/* Billing Information */}
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1">
            <h3 className="text-lg font-bold mb-4">Billing Information</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Company Name"
                className="w-full border border-gray-300 rounded p-2"
              />
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="flex-1 border border-gray-300 rounded p-2"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="flex-1 border border-gray-300 rounded p-2"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded p-2"
              />
              <textarea
                placeholder="Street Address"
                className="w-full border border-gray-300 rounded p-2 h-24"
              ></textarea>
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="District"
                  className="flex-1 border border-gray-300 rounded p-2"
                />
                <input
                  type="text"
                  placeholder=""
                  className="flex-1 border border-gray-300 rounded p-2"
                />
              </div>
            </form>
          </div>

          {/* Order Overview */}
          <div className="w-full lg:w-1/3 bg-black text-white p-6 rounded">
            <h3 className="text-lg font-bold mb-4">Order Overview</h3>
            <p className="text-sm mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="text-sm space-y-2">
              <div className="flex justify-between">
                <span>Total</span>
                <span>Rs.1,999,999</span>
              </div>
              <div className="flex justify-between">
                <span>Discount</span>
                <span>Rs.2,000</span>
              </div>
              <div className="flex justify-between font-bold text-xl">
                <span>Total</span>
                <span>Rs.465,556,554</span>
              </div>
            </div>

            {/* Payment Gateway */}
            <div className="mt-6">
              <h4 className="text-lg font-bold mb-2">Payment Gateway</h4>
              <div className="space-y-2">
                <button className="w-full bg-gray-700 text-white p-2 rounded">
                  OnePay <span className="text-sm">Visa/Master, EzCash, mCash, FriMi</span>
                </button>
                <button className="w-full bg-gray-700 text-white p-2 rounded">
                  Cash On Delivery <span className="text-sm">Visa/Master, EzCash, mCash, FriMi</span>
                </button>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full bg-yellow-500 text-black p-2 mt-4 rounded font-bold"
            >
              Checkout
            </button>
          </div>
        </div>

        {/* Shipping Information */}
        <div className="mt-6">
          <h3 className="text-lg font-bold mb-4">Shipping Information</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {branches.map((branch) => (
              <div
                key={branch.name}
                className={`p-4 border rounded cursor-pointer ${
                  selectedBranch === branch.name ? 'border-blue-500' : 'border-gray-300'
                }`}
                onClick={() => handleBranchSelection(branch.name)}
              >
                <h4 className="font-bold">{branch.name}</h4>
                <p className="text-sm">Address: {branch.address}</p>
                <p className="text-sm">Phone: {branch.phone}</p>
              </div>
            ))}
            <button className="p-4 border border-gray-300 rounded text-center">
              Add a new address
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
