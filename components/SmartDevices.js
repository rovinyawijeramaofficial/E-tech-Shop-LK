import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import SmartDevicesCard from "./SmartDevicesCard";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";

const devicesData = [
  { id: 1, title: "Laptop", logo: "/images/laptop.png" },
  { id: 2, title: "Smartphones", logo: "/images/Smartphones.png" },
  { id: 3, title: "Tablet", logo: "/images/tablet.png" },
  { id: 4, title: "Accessories", logo: "/images/accessories.png" },
  { id: 5, title: "Laptop", logo: "/images/laptop.png" },
  { id: 6, title: "Smartphones", logo: "/images/Smartphones.png" },
  { id: 7, title: "Tablet", logo: "/images/tablet.png" },
  { id: 8, title: "Accessories", logo: "/images/accessories.png" },
  { id: 5, title: "Laptop", logo: "/images/laptop.png" },
  { id: 6, title: "Smartphones", logo: "/images/Smartphones.png" },
  { id: 7, title: "Tablet", logo: "/images/tablet.png" },
  { id: 8, title: "Accessories", logo: "/images/accessories.png" },
  { id: 5, title: "Laptop", logo: "/images/laptop.png" },
  { id: 6, title: "Smartphones", logo: "/images/Smartphones.png" },
  { id: 7, title: "Tablet", logo: "/images/tablet.png" },
  { id: 8, title: "Accessories", logo: "/images/accessories.png" },
  { id: 5, title: "Laptop", logo: "/images/laptop.png" },
  { id: 6, title: "Smartphones", logo: "/images/Smartphones.png" },
  { id: 7, title: "Tablet", logo: "/images/tablet.png" },
];

export default function SmartDevices() {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const swiperRef = useRef(null); // Reference to Swiper instance

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavigation = (device) => {
    router.push(`/shopping?category=${device.title}`);
  };

  const slidePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev(3); // Move 3 slides left
  };

  const slideNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext(3); // Move 3 slides right
  };

  return (
    <div className="p-4 bg-[rgb(244, 241, 241)] rounded-lg" style={{ marginTop: "-70px" }}>
      {/* DESKTOP VIEW */}
      {!isMobile && (
        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
            className="smart-prev shadow-none flex items-center justify-center transition mt-5"
            onClick={slidePrev}
          >
            <Image src="/images/Exclude.png" alt="Left Arrow" width={24} height={24} />
          </button>

          <Swiper
            modules={[Navigation]}
            navigation={false}
            spaceBetween={10}
            slidesPerView={4}
            slidesPerGroup={1} // Move 3 slides at a time
            loop={true}
            speed={500}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            breakpoints={{
              1024: { slidesPerView: 4, slidesPerGroup: 3, spaceBetween: 24 },
            }}
            className="mx-8 w-full"
          >
            {devicesData.map((device) => (
              <SwiperSlide key={device.id}>
                <div
                  className="flex justify-center cursor-pointer"
                  onClick={() => handleNavigation(device)}
                >
                  <SmartDevicesCard device={device} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Right Arrow */}
          <button
            className="smart-next shadow-none flex items-center justify-center transition mt-5"
            onClick={slideNext}
          >
            <Image src="/images/Include.png" alt="Right Arrow" width={24} height={24} />
          </button>
        </div>
      )}

      {/* MOBILE VIEW */}
      {isMobile && (
        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
            className="smart-prev absolute left-[-11px] z-10 flex items-center justify-center transition mt-5 "
            onClick={slidePrev}
          >
            <Image src="/images/Exclude.png" alt="Left Arrow" width={14} height={14} />
          </button>

          <Swiper
            modules={[Navigation]}
            navigation={false}
            spaceBetween={10}
            slidesPerView={2}
            slidesPerGroup={1} // Move 1 slide at a time in mobile
            loop={true}
            speed={500}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className="w-full px-8"
          >
            {devicesData.map((device) => (
              <SwiperSlide key={device.id}>
                <div
                  className="flex justify-center cursor-pointer"
                  onClick={() => handleNavigation(device)}
                >
                  {/* MOBILE VIEW CARD - Updated Dimensions */}
                  <div className="block md:hidden shadow-md overflow-hidden relative rounded-[7.71px] w-[228.97px] h-[108.98px] mr-[1px] ml-[1px] mt-5">
                    {/* Product Image */}
                    <Image
                      src={device.logo}
                      alt={`${device.title} image`}
                      width={228.97}
                      height={108.98}
                      className="rounded-[7.71px] object-cover w-full h-full"
                    />

                    {/* Title Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-white font-bold text-center text-[16px]">
                        {device.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Right Arrow */}
          <button
            className="smart-next absolute right-[-11px] z-10 flex items-center justify-center transition mt-5"
            onClick={slideNext}
          >
            <Image src="/images/Include.png" alt="Right Arrow" width={14} height={14} />
          </button>
        </div>
      )}

      <style jsx>{`
        .smart-prev,
        .smart-next {
          width: 40px;
          height: 40px;
          z-index: 10;
        }
      `}</style>
    </div>
  );
}
