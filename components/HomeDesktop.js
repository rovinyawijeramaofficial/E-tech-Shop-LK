// HomeDesktop.js
import React from "react";
import OnSaleProducts1 from "@/components/OnSaleProducts1";
import OnSaleProducts2 from "@/components/OnSaleProducts2";
import CustomerReviewsCard from "@/components/CustomerReviewsCard";
import FeaturedProduct from "@/components/FeaturedProduct";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import DisplayBanner from "@/components/DisplayBanner";
import DiscountBanner from "@/components/DiscountBanner";
import SmartDevices from "@/components/SmartDevices";
import CustomerReviewsBG from "@/components/CustomerReviewsBG";

const HomeDesktop = () => {
  return (
    <>
      <Header />
      <DisplayBanner />
      <SmartDevices />
      <FeaturedProduct />
      <OnSaleProducts1 />
      <DiscountBanner />
      <OnSaleProducts2 />
      <CustomerReviewsBG>
        <CustomerReviewsCard />
        <Footer isHomePage={true} />
      </CustomerReviewsBG>
    </>
  );
};

export default HomeDesktop;