import Image from "next/image";

export default function SmartDevicesCard({ device }) {
  return (
    <div
      className="shadow-md overflow-hidden relative"
      style={{
        width: "416px",
        height: "198px",
        borderRadius: "14px",
        marginLeft: "9px" // Adjusted to move Laptop left
      }}
    >
      {/* Product Image */}
      <div className="w-full h-full relative">
        <Image
          src={device.logo}
          alt={`${device.title} image`}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
        {/* Title Overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          
        >
          <h3
            className="text-white font-bold"
            style={{
              fontSize: "29.12px",
              fontFamily: "Poppins",
              fontWeight: 600,
              lineHeight: "33.99px",
              textAlign: "center",
              textShadow: "0 4px 24px rgba(0, 0, 0, 1)"
            }}
          >
            {device.title}
          </h3>
        </div>
      </div>
    </div>
  );
}