import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/CustomerReviews/CustomerReviewsBG/Footer";
import Roadmap from "../components/Roadmap/Roadmap";
import OurTeam from "../components/OurTeam/Team";

const AboutUs = () => {
  return (
    <>
    <Header />
    <div className="container mx-auto mt-60 py-8 px-4">
    <div className="about-us-page">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>About Us</h1>
        <p>Home / About Us</p>
      </div>

      {/* About Section */}
      <div className="about-section">
        <div className="about-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            nec odio ipsum. Suspendisse cursus malesuada facilisis. Nunc
            consectetur nisl ut gravida consequat. Cras eu erat vel libero
            sollicitudin venenatis. Nullam nec eros ac elit faucibus dictum in
            nec est. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aliquam a dui vel libero varius consectetur. Etiam sit amet nunc
            fringilla, faucibus lacus vel, facilisis lacus. Donec tincidunt
            lacus at magna consequat varius.
          </p>
        </div>
        <div className="about-image">
          <Image
            src="/images/Rectangle 65.png"
            alt="iStore"
            width={600}
            height={400}
          />
        </div>
      </div>

      {/* Highlights Section */}
      <div className="highlights-section">
        <div className="highlight">
          <h2>Sub Headline</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            aliquet ex eget aliquet varius.
          </p>
        </div>
        <div className="highlight">
          <h2>Sub Headline</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            aliquet ex eget aliquet varius.
          </p>
        </div>
      </div>

   <Roadmap/>
   <OurTeam/>
    

      {/* Branches Section */}
      <div className="branches-section">
       
        <div className="branches">
          <ul>
            <li>
 
            </li>
          </ul>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345097854!2d144.95373531531073!3d-37.816279979751504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f4f8e217%3A0xf4c9f0b6c167e9d7!2sEnvato!5e0!3m2!1sen!2sau!4v1610934048471!5m2!1sen!2sau"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
          </div>
          <Footer />
        </>
  );
};

export default AboutUs;
