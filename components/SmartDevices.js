import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import SmartDevicesCard from "./SmartDevicesCard";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/router";

const devicesData = [
  { id: 1, title: "Laptop", logo: "/images/laptop.png" },
  { id: 2, title: "Smartphones", logo: "/images/Smartphones.png" },
  { id: 3, title: "Tablet", logo: "/images/tablet.png" },
  { id: 4, title: "Accessories", logo: "/images/accessories.png" },
];

export default function SmartDevices() {
  const router = useRouter();

  useEffect(() => {
    const swiperInstance = document.querySelector(".swiper").swiper;

    document.querySelector(".smart-prev")?.addEventListener("click", () => {
      swiperInstance.slidePrev();
    });

    document.querySelector(".smart-next")?.addEventListener("click", () => {
      swiperInstance.slideNext();
    });
  }, []);

  const handleNavigation = (device) => {
    router.push(`/shopping?category=${device.title}`);
  };

  return (
    <div className="p-4 bg-gray-100" style={{ marginTop: "-70px" }}>
      <div className="relative">
        <Swiper
          modules={[Navigation]}
          navigation={false}
          spaceBetween={10}
          slidesPerView={2}
          slidesPerGroup={1}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 16 },
            1024: { slidesPerView: 4, spaceBetween: 24 },
          }}
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

        {/* Custom Navigation Arrows */}
        <button className="smart-prev absolute shadow-md rounded-full flex items-center justify-center transition">
          <Image src="/images/Exclude.png" alt="Left Arrow" width={24} height={24} />
        </button>
        <button className="smart-next absolute shadow-md rounded-full flex items-center justify-center transition">
          <Image src="/images/Include.png" alt="Right Arrow" width={24} height={24} />
        </button>

        <style jsx>{`
          .smart-prev,
          .smart-next {
            width: 40px;
            height: 40px;
            background-color: white;
            top: 50%;
            transform: translateY(-50%);
            z-index: 10;
          }

          .smart-prev {
            left: -20px;
          }

          .smart-next {
            right: -20px;
          }

          @media (max-width: 640px) {
            .smart-prev {
              left: -15px;
            }

            .smart-next {
              right: -15px;
            }
          }
        `}</style>
      </div>
    </div>
  );
}
