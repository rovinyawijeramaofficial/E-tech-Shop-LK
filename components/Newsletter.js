import React from "react";

const Newsletter = () => {
  return (
    <div className="bg-black text-white rounded-lg flex items-center justify-between p-9 w-full max-w-9xl mx-auto mt-2">
      {/* Left Section: Heading */}
      <div className="flex flex-col">
        <h2 className="text-xl font-bold">Subscribe to Our Newsletter</h2>
      </div>

      {/* Center Section: Input Field and Button */}
      <div className="flex items-center space-x-2">
        <input
          type="email"
          placeholder="Enter Your Email Address"
          className="bg-gray-500 text-white px-4 py-2 rounded-lg focus:outline-none"
        />
        <button className="bg-white text-black px-6 py-2 rounded-lg font-semibold">
          Send
        </button>
      </div>

      {/* Right Section: Image */}
      <div className="flex-shrink-0">
        <img
          src="/images/image 6.png" // Replace this with the correct path to the image
          alt="Newsletter Character"
          className="h-20"
        />
      </div>
    </div>
  );
};

export default Newsletter;
