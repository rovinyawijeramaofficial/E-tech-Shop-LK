import Image from "next/image";
import { useState } from "react";

const DisplayBanner = () => {
  const [activeDot, setActiveDot] = useState(0);

  const handleDotClick = (index) => {
    setActiveDot(index);
    console.log(`Dot ${index + 1} clicked!`);
  };

  return (
    <div className="w-full relative overflow-hidden -mt-11">
      {/* Desktop View */}
      <div className="hidden md:block w-full h-[850px] relative bg-black overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/dell-unsplash 1.png"
          alt="Dell XPS 13"
          fill
          style={{ objectFit: "cover" }}
          priority
        />

        {/* Large "XPS" text */}
        <div
          className="absolute z-10 text-transparent"
          style={{
            top: "26%",
            left: "12%",
            fontFamily: "Poppins",
            fontWeight: 900,
            fontSize: "21vw",
            lineHeight: "1.2",
            WebkitTextStroke: "2px #FFFFFF26",
          }}
        >
          XPS
        </div>

        {/* Large "13" text */}
        <div
          className="absolute z-10 text-transparent"
          style={{
            top: "26%",
            right: "3%",
            fontFamily: "Poppins",
            fontWeight: 900,
            fontSize: "21vw",
            lineHeight: "1.2",
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
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
            bottom: "9%",
          }}
        >
          <div className="flex gap-2">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                onClick={() => handleDotClick(index)}
                className={`cursor-pointer rounded-full`}
                style={{
                  width: "15.77px",
                  height: "15.77px",
                  backgroundColor: index === activeDot ? "#FFFFFF" : "#D9D9D9",
                  opacity: index === activeDot ? 1 : 0.45,
                  transition: "opacity 0.3s, background-color 0.3s",
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden w-full h-[524px] sm:h-[863px] relative overflow-hidden">
        {/* Background Container */}
        <div
          className="w-[496px] h-[524px]"
          style={{
            backgroundImage: "url('/images/dell-unsplash 1.png')",
            backgroundSize: "210%",
            backgroundPosition: "right -210px top",
            left:"496px",
            zIndex: "-1",
          }}
        ></div>

        {/* Text and Vector Overlays */}
<div
  className="absolute z-20 flex flex-col justify-center items-start w-full px-4 sm:px-8"
  style={{ bottom: "30%" }} // Positioned closer to the bottom
>
  {/* Text Container */}
  <div className="text-white">
    
 {/* Main Heading */}
<h1
  className="absolute"
  style={{
    fontFamily: "Poppins",
    fontWeight: 500,
    fontSize: "58.35px",
    lineHeight: "68.11px",
    width: "321px",
    height: "137px",
    bottom: "30px", // Adjusted from 205px to move it down
    left: "10px",
    margin: 0,
  }}
>
  All New <br />
  <span style={{ fontWeight: 700 }}>Dell XPS 13</span>
</h1>


    {/* Subheading */}
    <p
  className="absolute"
  style={{
    fontFamily: "Poppins",
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "33.99px",
    width: "384px",
    height: "68px",
    top: "0px",
    left: "10px",
    margin: 0,
  }}
>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
</p>
  </div>
</div>


      </div>
    </div>
  );
};

export default DisplayBanner;
