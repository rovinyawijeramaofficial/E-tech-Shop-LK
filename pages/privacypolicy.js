import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const PrivacyPolicy = () => {
  return (
    <>
      <Header />

      {/* Desktop View (Hidden on Mobile) */}
      <div className="hidden md:flex flex-col min-h-screen mx-auto mt-60 py-8 px-9">
        <div className="PrivacyPolicy-page">
          {/* Hero Section */}
          <div className="mb-6 bg-black text-white px-10 py-16 rounded-[25px] text-left w-full">
            <h3 className="text-lg text-gray-300">Home / Privacy Policy</h3>
            <h1 className="text-4xl font-bold">Privacy Policy</h1>
          </div>
 {/* Privacy Policy Section */}
 <div className="Privacy Policy-section mt-28">
        <div className="Privacy Policy-content"
        style={{
            height: "525px",
            width:"1090px",
            margin: "0 auto",
            fontFamily:"poppins",
            fontWeight:300,
            fontSize:"20px",
            backgroundPosition: "center",
           
          }}
          >
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis lectus nulla at volutpat diam ut venenatis tellus in. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Convallis a cras semper auctor neque. Vitae aliquet nec ullamcorper sit amet risus nullam. Augue interdum velit euismod in pellentesque massa. Sit amet consectetur adipiscing elit ut aliquam purus sit. Integer enim neque volutpat ac tincidunt vitae. Facilisi etiam dignissim diam quis enim lobortis scelerisque. Libero enim sed faucibus turpis in eu mi bibendum neque. Consequat ac felis donec et odio pellentesque. Sed vulputate odio ut enim blandit. Et malesuada fames ac turpis egestas sed. Vulputate dignissim suspendisse in est ante. Ullamcorper a lacus vestibulum sed arcu non odio.
<br/><br/>
Eu non diam phasellus vestibulum. Lacus sed turpis tincidunt id aliquet risus. Morbi non arcu risus quis varius quam quisque. Quam nulla porttitor massa id neque. Lectus proin nibh nisl condimentum id venenatis a. Vel turpis nunc eget lorem dolor sed viverra ipsum nunc. Porta lorem mollis aliquam ut porttitor leo a. Tristique nulla aliquet enim tortor at auctor. Nam aliquam sem et tortor consequat id. Diam vel quam elementum pulvinar etiam non quam. Vulputate dignissim suspendisse in est ante in nibh mauris cursus. Mattis ullamcorper velit sed ullamcorper morbi tincidunt. Purus sit amet volutpat consequat mauris nunc congue nisi vitae. Aenean sed adipiscing diam donec adipiscing. Pellentesque habitant morbi tristique senectus et netus et. Mattis pellentesque id nibh tortor id aliquet lectus proin nibh. Posuere lorem ipsum dolor sit amet. Libero volutpat sed cras ornare arcu dui vivamus arcu. Penatibus et magnis dis parturient montes nascetur.
          </p>
          
        </div>

        <br/><br/><br/><br/>
        
      </div>
          
        </div>
      </div>

      {/* Mobile View (Hidden on Desktop) */}
      <div className="flex md:hidden flex-col items-center min-h-screen mx-auto mt-32 px-6 ">
        {/* Hero Section */}
        <div className="bg-black text-white px-6 py-10 rounded-lg text-center w-full">
          <h3 className="text-sm text-gray-300">Home / Privacy Policy</h3>
          <h1 className="text-2xl font-bold">Privacy Policy</h1>
        </div>

        {/* Privacy Policy Section */}
        <div className="bg-white p-4 rounded-lg text-[16px] leading-relaxed w-full max-w-[90%]">
         <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis lectus nulla at volutpat diam ut venenatis tellus in. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Convallis a cras semper auctor neque. Vitae aliquet nec ullamcorper sit amet risus nullam. Augue interdum velit euismod in pellentesque massa. Sit amet consectetur adipiscing elit ut aliquam purus sit. Integer enim neque volutpat ac tincidunt vitae. Facilisi etiam dignissim diam quis enim lobortis scelerisque. Libero enim sed faucibus turpis in eu mi bibendum neque. Consequat ac felis donec et odio pellentesque. Sed vulputate odio ut enim blandit. Et malesuada fames ac turpis egestas sed. Vulputate dignissim suspendisse in est ante. Ullamcorper a lacus vestibulum sed arcu non odio.
<br/><br/>
Eu non diam phasellus vestibulum. Lacus sed turpis tincidunt id aliquet risus. Morbi non arcu risus quis varius quam quisque. Quam nulla porttitor massa id neque. Lectus proin nibh nisl condimentum id venenatis a. Vel turpis nunc eget lorem dolor sed viverra ipsum nunc. Porta lorem mollis aliquam ut porttitor leo a. Tristique nulla aliquet enim tortor at auctor. Nam aliquam sem et tortor consequat id. Diam vel quam elementum pulvinar etiam non quam. Vulputate dignissim suspendisse in est ante in nibh mauris cursus. Mattis ullamcorper velit sed ullamcorper morbi tincidunt. Purus sit amet volutpat consequat mauris nunc congue nisi vitae. Aenean sed adipiscing diam donec adipiscing. Pellentesque habitant morbi tristique senectus et netus et. Mattis pellentesque id nibh tortor id aliquet lectus proin nibh. Posuere lorem ipsum dolor sit amet. Libero volutpat sed cras ornare arcu dui vivamus arcu. Penatibus et magnis dis parturient montes nascetur.
          </p>
        </div>
      </div>


      <div className="pb-10"
      > {/* Added padding and margin */}
    <Footer className="text-sm" /> {/* Smaller text size */}
  </div>
    </>
  );
};

export default PrivacyPolicy;
