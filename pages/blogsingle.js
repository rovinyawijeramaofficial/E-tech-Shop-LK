import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/CustomerReviews/CustomerReviewsBG/Footer";
import { Poppins } from "next/font/google";
import BlogSingleHeroSection from "@/components/BlogSingleHeroSection";
import BlogSingleAddComment from "@/components/BlogSingleAddComment";
import BlogSingleRelatedProducts from "@/components/BlogSingleRelatedProducts";
import BlogSingleRelatedPosts from "@/components/BlogSingleRelatedPosts";

const BlogSingle = () => {
  return (
    <>
    <Header />
    <div className="container mx-auto mt-60 py-8 px-4">
    <div className="blogsingle-page">

 <BlogSingleHeroSection/>

      {/* BlogSingle Section */}
      <div className="blogsingle-section mt-28">
        <div className="blogsingle-content"
        style={{
            height: "641px",
            width:"898px",
            margin: "0 auto",
            fontFamily:"poppins",
            fontWeight:300,
            fontSize:"20px",
            backgroundPosition: "center",
            lineHeight:"29.12px",
           
          }}
          >
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis lectus nulla at volutpat diam ut venenatis tellus in. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Convallis a cras semper auctor neque. Vitae aliquet nec ullamcorper sit amet risus nullam. Augue interdum velit euismod in pellentesque massa. Sit amet consectetur adipiscing elit ut aliquam purus sit. Integer enim neque volutpat ac tincidunt vitae. Facilisi etiam dignissim diam quis enim lobortis scelerisque. Libero enim sed faucibus turpis in eu mi bibendum neque. Consequat ac felis donec et odio pellentesque. Sed vulputate odio ut enim blandit. Et malesuada fames ac turpis egestas sed. Vulputate dignissim suspendisse in est ante. Ullamcorper a lacus vestibulum sed arcu non odio.
          <br/><br/>
Eu non diam phasellus vestibulum. Lacus sed turpis tincidunt id aliquet risus. Morbi non arcu risus quis varius quam quisque. Quam nulla porttitor massa id neque. Lectus proin nibh nisl condimentum id venenatis a. Vel turpis nunc eget lorem dolor sed viverra ipsum nunc. Porta lorem mollis aliquam ut porttitor leo a. Tristique nulla aliquet enim tortor at auctor. Nam aliquam sem et tortor consequat id. Diam vel quam elementum pulvinar etiam non quam. Vulputate dignissim suspendisse in est ante in nibh mauris cursus. Mattis ullamcorper velit sed ullamcorper morbi tincidunt. Purus sit amet volutpat consequat mauris nunc congue nisi vitae. Aenean sed adipiscing diam donec adipiscing. Pellentesque habitant morbi tristique senectus et netus et. Mattis pellentesque id nibh tortor id aliquet lectus proin nibh. Posuere lorem ipsum dolor sit amet. Libero volutpat sed cras ornare arcu dui vivamus arcu. Penatibus et magnis dis parturient montes nascetur.
          </p>

           
        </div>
        
      </div>
      <BlogSingleAddComment/> 
          <BlogSingleRelatedProducts/> 
          <BlogSingleRelatedPosts/> 
          <Footer />
    </div>
          </div>  
                         
        </>
  );
};

export default BlogSingle;
