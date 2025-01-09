// pages/home.js

import OnSaleProducts from "@/components/OnSaleProducts";
import CustomerReviews from "@/components/CustomerReviews";
import FeaturedProduct from "@/components/FeaturedProduct";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import DisplayBanner from "@/components/DisplayBanner";
import DiscountBanner from "@/components/DiscountBanner";
import SmartDevices from "@/components/SmartDevices";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <div className="relative">
        <Image
          alt="line"
          width={100}
          height={30}
          className="absolute top-0 right-0 w-fit h-[670px] object-cover z-0 opacity-5 items-end"
        />

        <Image
          alt="line"
          width={200}
          height={500}
          className="absolute top-0 right-40 w-fit h-[670px] object-cover z-0 opacity-5 items-end"
        />
      </div>

      <DisplayBanner />
      <SmartDevices />
      <FeaturedProduct />
      <OnSaleProducts />
      <DiscountBanner />
      <OnSaleProducts />
      <CustomerReviews />
      <Footer />
    </>
  );
}
