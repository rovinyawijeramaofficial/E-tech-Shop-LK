import Image from "next/image";

export default function SmartDevicesCard({ device }) {
  return (
    <div className="mx-auto mt-5">

      {/* Desktop View */}
      <div className="hidden md:block shadow-md overflow-hidden relative rounded-[14px]">
        {/* Product Image - Fully Covers the Card */}
        <Image
          src={device.logo}
          alt={`${device.title} image`}
          width={416}
          height={198}
          className="rounded-[14px] object-cover w-full h-full"
        />

        {/* Title Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-[rgba(24,16,8,0.22)]">
          <h3
            className="text-white font-bold text-center text-[20px]"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 600,
              lineHeight: "1.5",
              textShadow: "0 4px 24px rgba(0, 0, 0, 1)",
            }}
          >
            {device.title}
          </h3>
        </div>
      </div>

      {/* Mobile View */}
<div className="block md:hidden shadow-md overflow-hidden relative rounded-[7.71px] w-[228.97px] h-[108.98px] mx-2">
  {/* Product Image - Fully Covers the Card */}
  <Image
    src={device.logo}
    alt={`${device.title} image`}
    width={228.97}
    height={108.98}
    className="rounded-[7.71px] object-cover w-full h-full"
  />

  {/* Title Overlay */}
  <div className="absolute inset-0 flex items-center justify-center ">
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
  );
}
