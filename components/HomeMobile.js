// HomeMobile.js  (You'll need to create this file)
import React from "react";
import OnSaleProducts1 from "@/components/OnSaleProducts1"; // Adjust imports if needed
import OnSaleProducts2 from "@/components/OnSaleProducts2";
import CustomerReviewsCard from "@/components/CustomerReviewsCard";
import FeaturedProduct from "@/components/FeaturedProduct";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import DisplayBanner from "@/components/DisplayBanner";
import DiscountBanner from "@/components/DiscountBanner";
import SmartDevices from "@/components/SmartDevices";
import CustomerReviewsBG from "@/components/CustomerReviewsBG";


const HomeMobile = () => {
  return (
    <>
      <Header />
      <DisplayBanner />
      <SmartDevices />
      <FeaturedProduct />
      <DiscountBanner />
      <br/><br/><br/><br/><br/><br/><br/><br/>
      <FeaturedProduct />
      <CustomerReviewsBG>
        <CustomerReviewsCard />
        <Footer isHomePage={true} />
      </CustomerReviewsBG>
    </>
  );
};

export default HomeMobile;