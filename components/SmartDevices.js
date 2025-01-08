import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TabletsCard from "./SmartDevicesCard";
import Link from "next/link";

const jobsData = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  companyLogo: "/images/aerfin-logo.png",
 
}));

export default function FeaturedProduct() {
  return (
    <div className="p-4 sm:p-6 md:p-10 bg-gray-100 ">
      {/* Header Section */}
      <div className="pt-10 flex justify-between items-center mb-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-black-900">
     
        </h2>
        <Link
          href="/jobSearch"
          className="text-blue-900 font-bold text-sm sm:text-base flex items-center"
        >
          
        </Link>
      </div>

      {/* Swiper Section */}
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
          spaceBetween={1}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 16 },
            1024: { slidesPerView: 4, spaceBetween: 24 },
          }}
        >
          {jobsData.map((job, index) => (
            <SwiperSlide
              key={job.id}
              className={index === 0 ? "ml-4" : ""} // Add margin to the first card
            >
              <Link href={`/job/${job.id}`}>
                <div>
                  <TabletsCard job={job} />
                </div>
              </Link>
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
