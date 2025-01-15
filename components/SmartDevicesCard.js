import Image from "next/image";

export default function SmartDevices({ device }) {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg max-w-[416px]">
      {/* Product Image */}
      <div className="relative w-full h-[198px] overflow-hidden rounded-lg">
        <Image
          src={device.logo}
          alt={`${device.title} image`}
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-gray-900 mt-4 text-center">
        {device.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-600 text-center mt-2">
        Explore the latest {device.title}.
      </p>
    </div>
  );
}
