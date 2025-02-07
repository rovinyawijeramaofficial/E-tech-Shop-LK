import Image from "next/image";

export default function DiscountBanner() {
  return (
    <>
      {/* Desktop View */}
      <div className="relative hidden md:flex w-full h-[414px] bg-orange-600 items-center">
        {/* Background Container */}
<div className="absolute left-[81px] w-[779px] h-[299px] rounded-[20px] bg-white bg-opacity-30 backdrop-blur-[44px] p-6 flex flex-col justify-center z-10">
  <h2 className="text-white text-[47.12px] font-normal leading-[55.04px] mb-2 font-[Poppins]">
    Get Up to
  </h2>
  <h2 className="text-white text-[47.12px] font-semibold leading-[55.04px] font-[Poppins]">
    50% Off
  </h2>
  <p className="text-white text-[47.12px] font-normal leading-[55.04px] font-[Poppins]">
    on Selected Items
  </p>
</div>

        {/* Image Container */}
        <div className="absolute right-0 w-[55%] h-[414px] overflow-hidden z-0">
          <Image
            src="/images/image 1.png"
            alt="Promotional Phone"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Mobile View */}
      <div className="relative flex md:hidden w-full h-96">
        {/* Background Image */}
        <Image
          src="/images/image 1.png"
          alt="Promotional Phone"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 w-full h-full"
        />

        {/* Text Section */}
        <div className="absolute bottom-4 left-4 right-4 bg-white/30 backdrop-blur-lg p-4 rounded-xl text-center">
          <h2 className="text-white text-xl sm:text-2xl font-bold">
            Get Up to <span className="font-extrabold">50% Off</span>
          </h2>
          <p className="text-white text-sm sm:text-lg">on Selected Items</p>
        </div>
      </div>
    </>
  );
}
