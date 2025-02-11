import Image from "next/image";

export default function DiscountBanner() {
  return (
    <>
      {/* Desktop View */}
      <div className="relative hidden md:flex w-full h-[414px] bg-orange-600 items-center">
        {/* Background Container */}
        <div className="absolute left-[81px] w-[750px] h-[299px] rounded-[20px] bg-white bg-opacity-30 backdrop-blur-[44px] p-6 flex flex-col justify-center z-10">
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
      <div className=" mt-[210px] relative md:hidden h-[414px] bg-[#DF5128] items-center"></div>
      <div className="-mt-[610px] relative flex md:hidden w-full h-[414px]">
        {/* Background Image */}
        <Image
          src="/images/image 1.png"
          alt="Promotional Phone"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 w-full h-full"
        />

        {/* Text Section */}
        <div className="absolute top-[325px] left-[13px] right-[13px] w-auto h-[245px] bg-white/30 backdrop-blur-[44px] p-8 rounded-[20px] text-center flex flex-col justify-center">
        <div className="text-left">
  <h2 className="text-white font-poppins text-[36.46px] leading-[42.59px] font-normal">
    Get Up to <span className="font-semibold"><br/>50% Off</span>
  </h2>
  <p className="text-white font-poppins text-[36.46px] leading-[42.59px] font-normal">
    on Selected Items
  </p>
</div>
        </div>
      </div>
    </>
  );
}
