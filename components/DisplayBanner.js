import Image from "next/image";
import { useState } from "react";

const DisplayBanner = () => {
  const [activeDot, setActiveDot] = useState(0); // Track the active dot

  const handleDotClick = (index) => {
    setActiveDot(index); // Set the clicked dot as active
    console.log(`Dot ${index + 1} clicked!`); // Handle additional click logic
  };

  return (
    <div className="w-full h-[850px] relative bg-black overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/dell-unsplash 1.png"
        alt="Dell XPS 13"
        fill 
        style={{ objectFit: 'cover' }}
        priority
      />

      {/* Large "XPS" text */}
      <div
        className="absolute z-10 text-transparent"
        style={{
          top: "26%", // Adjusted relative positioning
          left: "12%", // Adjusted relative positioning
          fontFamily: "Poppins",
          fontWeight: 900,
          fontSize: "21vw", // Scales with the viewport width
          lineHeight: "1.2", // Maintain proportional line height
          WebkitTextStroke: "2px #FFFFFF26",
        }}
      >
        XPS
      </div>

      {/* Large "13" text */}
      <div
        className="absolute z-10 text-transparent"
        style={{
          top: "26%", // Matches "XPS" top
          right: "3%", // Adjusted relative positioning for alignment
          fontFamily: "Poppins",
          fontWeight: 900,
          fontSize: "21vw", // Scales with the viewport width
          lineHeight: "1.2", // Maintain proportional line height
          WebkitTextStroke: "2px #FFFFFF26",
        }}
      >
        13
      </div>

      {/* Text and Vector Overlays */}
      <div
        className="absolute z-20 flex justify-between items-start w-full px-8"
        style={{ top: "390px" }}
      >
        {/* Left Vector and Text */}
        <div className="flex items-start">
          {/* Left Vector Image */}
          <div
            className="mr-4 cursor-pointer"
            onClick={() => console.log("Left vector clicked!")}
          >
            <Image
              src="/images/Vector 5.png"
              alt="Vector Design Left"
              width={30}
              height={176}
            />
          </div>

          {/* Text Container */}
          <div>
            {/* Main Heading */}
            <div
              className="text-white"
              style={{
                maxWidth: "398px",
                position: "relative",
                top: "-20px",
              }}
            >
              <h1
                style={{
                  fontFamily: "Poppins",
                  fontWeight: 500,
                  fontSize: "75.07px",
                  lineHeight: "87.63px",
                  margin: 0,
                }}
              >
                All New <span style={{ fontWeight: 700 }}>Dell XPS 13</span>
              </h1>
            </div>

            {/* Subheading */}
            <div className="text-white mt-4" style={{ maxWidth: "690px" }}>
              <p
                style={{
                  fontFamily: "Poppins",
                  fontWeight: 400,
                  fontSize: "29.14px",
                  lineHeight: "33.99px",
                  margin: 0,
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
          </div>
        </div>

        {/* Right Vector Image */}
        <div
          className="cursor-pointer"
          onClick={() => console.log("Right vector clicked!")}
        >
          <Image
            src="/images/Vector 4.png"
            alt="Vector Design Right"
            width={30}
            height={176}
          />
        </div>
      </div>

      {/* Pagination Dots */}
      <div
        className="absolute z-30 w-full flex justify-center"
        style={{
          bottom: "9%", // Position from the bottom of the banner
        }}
      >
        <div className="flex gap-2"> {/* Reduced gap */}
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              onClick={() => handleDotClick(index)}
              className={`cursor-pointer rounded-full`}
              style={{
                width: "15.77px", // Matches the ellipse dimensions
                height: "15.77px",
                backgroundColor:
                  index === activeDot
                    ? "#FFFFFF"
                    : "#D9D9D9",
                    opacity: index === activeDot ? 1 : 0.45, // Active and other dots opacity
                    transition: "opacity 0.3s, background-color 0.3s", // Smooth transition for state change
                  }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DisplayBanner;
