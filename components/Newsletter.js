import React from "react";

const Newsletter = () => {
  return (
    <div className="bg-black text-white rounded-lg flex flex-col md:flex-row items-center justify-between p-6 w-full max-w-7xl mx-auto mt-4 space-y-4 md:space-y-0">
      {/* Left Section: Heading */}
      <div className="text-center md:text-left">
        <h2 className="text-lg md:text-xl font-bold">
          Subscribe to Our Newsletter
        </h2>
      </div>

      {/* Center Section: Input Field and Button */}
      <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-3 w-full md:w-auto">
        <input
          type="email"
          placeholder="Enter Your Email Address"
          className="bg-gray-500 text-white px-4 py-2 rounded-lg focus:outline-none w-full sm:w-auto"
        />
        <button className="bg-white text-black px-6 py-2 rounded-lg font-semibold w-full sm:w-auto">
          Send
        </button>
      </div>

      {/* Right Section: Image */}
      <div className="flex-shrink-0">
        <img
          src="/images/image 6.png" // Replace this with the correct path to the image
          alt="Newsletter Character"
          className="h-16 md:h-20 mx-auto md:mx-0"
        />
      </div>
    </div>
  );
};

export default Newsletter;
