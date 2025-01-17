import React from "react";
import OnSaleProducts from "@/components/OnSaleProducts";
import CustomerReviewsCard from "@/components/CustomerReviews/CustomerReviewsCard/CustomerReviewsCard";
import FeaturedProduct from "@/components/FeaturedProduct";
import Footer from "@/components/CustomerReviews/CustomerReviewsBG/Footer";
import Header from "@/components/Header";
import CustomerReviewsBG from "@/components/CustomerReviews/CustomerReviewsBG/CustomerReviewsBG";
import DisplayBanner from "@/components/DisplayBanner";
import DiscountBanner from "@/components/DiscountBanner";
import SmartDevices from "@/components/SmartDevices";

export default function HomePage() {
  return (
    <CustomerReviewsBG>
      <Header />
      <DisplayBanner />
      <SmartDevices />
      <FeaturedProduct />
      <OnSaleProducts />
      <DiscountBanner />
      <OnSaleProducts />
      <CustomerReviewsCard />
      {/* Pass isHomePage as true for Footer */}
      <Footer isHomePage={true} />
    </CustomerReviewsBG>
  );
}
