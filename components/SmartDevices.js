import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import SmartDevicesCard from "./SmartDevicesCard";
import Image from "next/image";
import Link from "next/link"; // For navigation
import { useEffect } from "react";

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
  useEffect(() => {
    const swiperInstance = document.querySelector(".swiper").swiper;

    document.querySelector(".smart-prev")?.addEventListener("click", () => {
      swiperInstance.slidePrev();
    });

    document.querySelector(".smart-next")?.addEventListener("click", () => {
      swiperInstance.slideNext();
    });
  }, []);

  return (
    <div className="p-6 bg-gray-100" style={{ marginTop: "-70px" }}>
      <div className="relative">
        <Swiper
          modules={[Navigation]}
          navigation={false}
          spaceBetween={10}
          slidesPerView={4}
          slidesPerGroup={1}
          breakpoints={{
            640: { slidesPerView: 3, spaceBetween: 10 },
            1024: { slidesPerView: 4, spaceBetween: 24 },
          }}
        >
          {devicesData.map((device) => (
            <SwiperSlide key={device.id}>
              <div className="flex justify-center">
                {/* Update the Link component to navigate to the correct dynamic route */}
                <Link href={`/shopping`}>
                  <SmartDevicesCard device={device} />
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Arrows */}
        <button
          className="smart-prev absolute shadow-md rounded-full flex items-center justify-center transition"
        >
          <Image src="/images/Exclude.png" alt="Left Arrow" width={24} height={24} />
        </button>
        <button
          className="smart-next absolute shadow-md rounded-full flex items-center justify-center transition"
        >
          <Image src="/images/Include.png" alt="Right Arrow" width={24} height={24} />
        </button>

        <style jsx>{`
          .smart-prev,
          .smart-next {
            width: 50px;
            height: 50px;
            background-color: white;
            top: 50%;
            transform: translateY(-50%);
            z-index: 10;
          }

          .smart-prev {
            left: -30px;
          }

          .smart-next {
            right: -30px;
          }

          .smart-prev img,
          .smart-next img {
            display: block;
          }

          @media (max-width: 1024px) {
            .smart-prev {
              left: -40px;
            }

            .smart-next {
              right: -40px;
            }
          }
        `}</style>
      </div>
    </div>
  );
}
