import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Roadmap from "../components/Roadmap/Roadmap";
import OurTeam from "../components/OurTeam/Team";
import OurBranches from "../components/OurBranches/Branches";

const AboutUs = () => {
  return (
    <>
    <Header />
    <div className="hidden md:flex flex-col min-h-screen mx-auto mt-60 py-8 px-9">
    <div className="about-us-page">
      {/* Hero Section */}
          <div
            className="mb-6 bg-black text-white px-8 py-16 rounded-[25px] text-left w-full"
          >
            <h2 className="text-lg text-gray-300">Home / About Us</h2>
            <h1 className="text-4xl font-bold">About Us</h1>
          </div>

      {/* About Section */}
<div className="about-section flex"> {/* Added flex for layout */}
  <div className=" w-[764px] h-[414px]  ml-[36px] mt-8"> {/* Applied width, height, margin */}
    <p className="font-poppins font-300 text-[20px] leading-[37.62px]"> {/* Applied font styles */}
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis lectus nulla at volutpat diam ut venenatis tellus in. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Convallis a cras semper auctor neque. Vitae aliquet nec ullamcorper sit amet risus nullam. Augue interdum velit euismod in pellentesque massa. Sit amet consectetur adipiscing elit ut aliquam purus sit. Integer enim neque volutpat ac tincidunt vitae. Facilisi etiam dignissim diam quis enim lobortis scelerisque. Libero enim sed faucibus turpis in eu mi bibendum neque. Consequat ac felis donec et odio pellentesque. Sed vulputate odio ut enim blandit. Et malesuada fames ac turpis egestas sed. Vulputate dignissim suspendisse in est ante. Ullamcorper a lacus vestibulum sed arcu non odio.
    </p>
  </div>
  <div className=" -mt-[93px] mr-[31px]">
  <Image
    src="/images/Rectangle 65.png"
    alt="iStore"
    width={669}
    height={716}
    className="rounded-[20px]" // Added rounded corners
  />
</div>
</div>

     {/* Highlights Section */}
     <div className="highlights-section flex gap-x-[20px] justify-center">
      <div className="highlight mt-[44px]"
      style={{
        width: "867px",
        height: "420px",
         backgroundColor: "#f0f0f0",
         borderRadius: "20px",

      }}
      >
  <h2 className=" text-[29.12px] leading-[47.08px] mt-[53px]"
  style={{
    fontFamily: "poppins",
    fontWeight: 500,
  }}
  >
  Sub Headline
</h2>

<div className="mt-5 flex justify-center"> {/* Added flex and justify-center */}
  <p className="text-[20px] leading-[29.12px] w-[572px] h-[204px]"
    style={{
      fontFamily: "poppins",
      fontWeight: 300,
    }}
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis lectus nulla at volutpat diam ut venenatis tellus in. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Convallis a cras semper auctor neque. Vitae aliquet nec ullamcorper sit amet risus nullam.
  </p>
</div>

</div>

<div className="highlight mt-[44px]"
style={{
  width: "867px",
  height: "420px",
  backgroundColor: "#f0f0f0",
  borderRadius: "20px",

}}
>
<h2 className="text-[29.12px] leading-[47.08px] mt-[53px]"
  style={{
    fontFamily: "poppins",
    fontWeight: 500,
  }}
  >
  Sub Headline
</h2>

<div className="mt-5 flex justify-center"> {/* Added flex and justify-center */}
  <p className="text-[20px] leading-[29.12px] w-[572px] h-[204px]"
    style={{
      fontFamily: "poppins",
      fontWeight: 300,
    }}
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis lectus nulla at volutpat diam ut venenatis tellus in. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Convallis a cras semper auctor neque. Vitae aliquet nec ullamcorper sit amet risus nullam.
  </p>
</div>

</div>
      </div>

   <Roadmap/>
   <OurTeam/>
   <OurBranches/>

<br/><br/><br/>
    </div>
          </div>

      {/* Mobile View - Hidden on Desktop */}
      <div className="flex flex-col md:hidden min-h-screen mx-auto mt-16 py-6 px-5">
        <div className="about-us-page">
          {/* Hero Section */}
          <div className=" mt-10 mb-6 bg-black text-white px-6 py-10 rounded-[20px] text-left w-full">
            <h2 className="text-sm text-gray-300">Home / About Us</h2>
            <h1 className="text-2xl font-bold">About Us</h1>
          </div>

          {/* About Section */}
          <div className="about-section flex flex-col items-center">
            <div className="w-full mt-4">
              <p className="font-poppins font-300 text-[16px] leading-[30px] text-center px-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis lectus nulla at volutpat diam ut venenatis tellus in. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Convallis a cras semper auctor neque. Vitae aliquet nec ullamcorper sit amet risus nullam. Augue interdum velit euismod in pellentesque massa. Sit amet consectetur adipiscing elit ut aliquam purus sit. Integer enim neque volutpat ac tincidunt vitae. Facilisi etiam dignissim diam quis enim lobortis scelerisque. Libero enim sed faucibus turpis in eu mi bibendum neque. Consequat ac felis donec et odio pellentesque. Sed vulputate odio ut enim blandit. Et malesuada fames ac turpis egestas sed. Vulputate dignissim suspendisse in est ante. Ullamcorper a lacus vestibulum sed arcu non odio.
              </p>
            </div>
            <div className="mt-6">
              <Image
                src="/images/Rectangle 65.png"
                alt="iStore"
                width={300}
                height={320}
                className="rounded-[15px]"
              />
            </div>
          </div>

           {/* Highlights Section */}
           <div className="highlights-section flex flex-col gap-y-5 mt-6">
            {[1, 2].map((_, index) => (
              <div
                key={index}
                className="highlight bg-gray-500 rounded-[15px] text-center"
                style={{
                  width: "340px",
                  height:"320px",
                
                }}
              >
                <h2 className="text-[22px] font-semibold">Sub Headline</h2>
                <p className="text-[16px] leading-[26px] mt-3"
                style={{
                  width: "300px",
                  height:"320px",
                
                }}
                >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis lectus nulla at volutpat diam ut venenatis tellus in. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Convallis a cras semper auctor neque. Vitae aliquet nec ullamcorper sit amet risus nullam.
                </p>
              </div>
            ))}
          </div>

          <Roadmap />
          <OurTeam />
          <OurBranches />
        </div>
      </div>

      <div className="pb-10">
        <Footer className="text-sm" />
      </div>
    </>
  );
};

export default AboutUs;
