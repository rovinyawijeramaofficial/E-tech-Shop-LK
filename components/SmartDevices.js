import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SmartDevices from "./SmartDevices";

// Updated devicesData with the given laptop image
const devicesData = [
  { id: 1, title: "Laptop", logo: "/images/laptop-card.png" }, // Use the provided image for the laptop
  { id: 2, title: "Smartphones", logo: "/images/Smartphones.png" },
  { id: 3, title: "Tablet", logo: "/images/tablet.png" },
  { id: 4, title: "Accessories", logo: "/images/accessories.png" },
];

export default function SmartDevicesSlider() {
  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
        Featured Smart Devices
      </h2>

      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
          }}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 16 },
            1024: { slidesPerView: 4, spaceBetween: 24 },
          }}
        >
          {devicesData.map((device) => (
            <SwiperSlide key={device.id}>
              <SmartDevices device={device} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Arrows */}
        <button className="custom-prev absolute top-1/2 -left-6 transform -translate-y-1/2 bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center text-blue-900 hover:bg-blue-900 hover:text-white transition">
          ❮
        </button>
        <button className="custom-next absolute top-1/2 -right-6 transform -translate-y-1/2 bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center text-blue-900 hover:bg-blue-900 hover:text-white transition">
          ❯
        </button>

        {/* Custom Pagination */}
        <div className="custom-pagination mt-4 flex justify-center"></div>
      </div>
    </div>
  );
}
