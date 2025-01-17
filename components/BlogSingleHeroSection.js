import React from "react";

const HeroSection = () => {
  return (
    <div className="relative mb-6 w-full">
      {/* Background Image */}
      <div className="relative">
        <img
          src="/images/Rectangle 45.png" // Replace this with the correct path to your image
          alt="Hero Section"
          className="w-full h-auto rounded-[25px] object-cover"
        />
        {/* Overlay Content */}
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-[25px] flex flex-col justify-between p-8">
          <div>
            {/* Tag */}
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm uppercase tracking-wide">
              News
            </span>
          </div>
          <div>
            {/* Title */}
            <h1 className="text-white text-4xl font-bold mb-4 leading-snug">
              Lorem ipsum dolor sit amet, consectetur.
            </h1>
            {/* Author and Date */}
            <h3 className="text-gray-300 text-lg mb-2">
              by Mahinda Rajapakshe <br />
              22 Oct 2022
            </h3>
          </div>
          <div className="text-gray-300 text-sm absolute bottom-6 right-8">
            2 Minutes Read
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
