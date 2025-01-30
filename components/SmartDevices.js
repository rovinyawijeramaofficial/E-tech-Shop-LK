import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import SmartDevicesCard from "./SmartDevicesCard";
import Image from "next/image";
import { useEffect, useState } from "react";
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
];

export default function SmartDevices() {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Detect mobile view
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const swiperInstance = document.querySelector(".swiper")?.swiper;

    if (swiperInstance) {
      document.querySelector(".smart-prev")?.addEventListener("click", () => {
        swiperInstance.slidePrev(2); // Move 2 slides at a time
      });

      document.querySelector(".smart-next")?.addEventListener("click", () => {
        swiperInstance.slideNext(2); // Move 2 slides at a time
      });
    }
  }, []);

  const handleNavigation = (device) => {
    router.push(`/shopping?category=${device.title}`);
  };

  return (
    <div className="p-4 bg-gray-100" style={{ marginTop: "-70px" }}>
      {/* DESKTOP VIEW */}
      {!isMobile && (
        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button className="smart-prev shadow-none flex items-center justify-center transition">
            <Image src="/images/Exclude.png" alt="Left Arrow" width={24} height={24} />
          </button>

          <Swiper
            modules={[Navigation]}
            navigation={false}
            spaceBetween={10}
            slidesPerView={4}
            slidesPerGroup={2} // Swiping 2 slides at a time
            breakpoints={{
              1024: { slidesPerView: 4, slidesPerGroup: 2, spaceBetween: 24 },
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
          <button className="smart-next shadow-none flex items-center justify-center transition">
            <Image src="/images/Include.png" alt="Right Arrow" width={24} height={24} />
          </button>
        </div>
      )}


{/* MOBILE VIEW */}
{isMobile && (
  <div className="relative flex items-center justify-center">
    {/* Left Arrow - Positioned farther to the left */}
    <button className="smart-prev absolute left-[-11px] z-10 flex items-center justify-center transition mt-5">
      <Image src="/images/Exclude.png" alt="Left Arrow" width={14} height={14} />
    </button>

    <Swiper
      modules={[Navigation]}
      navigation={false}
      spaceBetween={10}
      slidesPerView={2}
      slidesPerGroup={1} // Move 1 slide at a time in mobile
      className="w-full px-8"
    >
      {devicesData.map((device) => (
        <SwiperSlide key={device.id}>
          <div
            className="flex justify-center cursor-pointer"
            onClick={() => handleNavigation(device)}
          >
            {/* MOBILE VIEW CARD - Updated Dimensions */}
            <div className="block md:hidden shadow-md overflow-hidden relative rounded-[7.71px] w-[228.97px] h-[108.98px] mr-[3px] ml-[3px] mt-5">
              {/* Product Image - Fully Covers the Card */}
              <Image
                src={device.logo}
                alt={`${device.title} image`}
                width={228.97}
                height={108.98}
                className="rounded-[7.71px] object-cover w-full h-full"
              />

              {/* Title Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h3
                  className="text-white font-bold text-center text-[16px]"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 600,
                    lineHeight: "1.5",
                    
                  }}
                >
                  {device.title}
                </h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

    {/* Right Arrow - Positioned farther to the right */}
    <button className="smart-next absolute right-[-11px] z-10 flex items-center justify-center transition mt-5">
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
