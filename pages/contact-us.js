import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/CustomerReviews/CustomerReviewsBG/Footer";
import Newsletter from "@/components/Newsletter";

const ContactUs = () => {
  return (
    <>
    <Header/>
    <div className="container mx-auto mt-60 py-8 px-4">
    <div className="contact-us-page">

 {/* Hero Section */}
        <div
            className="mb-6 bg-black text-white px-8 py-16 rounded-[25px] text-left w-full"
          >
            <h2 className="text-lg text-gray-300">Home / Privacy Policy</h2>
            <h1 className="text-4xl font-bold">Contact Us</h1>
          </div>
     
      <div className="content-container">
        {/* Contact Form */}
        <div className="contact-form">
          <h2>Send a Message</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Message" rows="5" required></textarea>
            <button type="submit">Send</button>
          </form>
        </div>

{/* Contact Channels */}
<div className="contact-details">
  <h3 style={{ color: "#000000" }}>Contact Channels</h3>
  <ul>
    <li style={{ color: "#000000" }}>
      <img
        src="/images/Envelope.png"
        alt="Email Icon"
        style={{ width: "20px", height: "20px", marginRight: "8px" }}
      />
      info@shop.lk
    </li>
    <li style={{ color: "#000000" }}>
      <img
        src="/images/Phone.png"
        alt="Phone Icon"
        style={{ width: "20px", height: "20px", marginRight: "8px" }}
      />
      0112 69 69 420
    </li>
    <li style={{ color: "#000000" }}>
      <img
        src="/images/Location.png"
        alt="Location Icon"
        style={{ width: "20px", height: "20px", marginRight: "8px" }}
      />
      Dedigama, Kegalle
    </li>
  </ul>

  {/* Social Media */}
  <h3 style={{ color: "#000000" }}>Social Media</h3>
  <ul className="social-media">
    <li style={{ color: "#000000" }}>
      <img
        src="/images/FacebookBig.png"
        alt="Facebook Icon"
        style={{ width: "20px", height: "20px", marginRight: "8px" }}
      />
      Facebook
    </li>
    <li style={{ color: "#000000" }}>
      <img
        src="/images/TwitterBig.png"
        alt="Twitter Icon"
        style={{ width: "20px", height: "20px", marginRight: "8px" }}
      />
      Twitter
    </li>
    <li style={{ color: "#000000" }}>
      <img
        src="/images/InstagramBig.png"
        alt="Instagram Icon"
        style={{ width: "20px", height: "20px", marginRight: "8px" }}
      />
      Instagram
    </li>
    <li style={{ color: "#000000" }}>
      <img
        src="/images/LinkedinBig.png"
        alt="LinkedIn Icon"
        style={{ width: "20px", height: "20px", marginRight: "8px" }}
      />
      LinkedIn
    </li>
  </ul>
</div>

      </div>

      {/* Location */}
      <div className="location-section">
        <h2>Location</h2>
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

      <Newsletter/>

    </div>
    </div>
    <Footer />
    </>
  );
};

export default ContactUs;
