import Image from "next/image";

export default function SmartDevicesCard({ device }) {
  return (
    <div
      className="shadow-md overflow-hidden relative mx-auto"
      style={{
        width: "100%", // Make it flexible for smaller screens
        maxWidth: "416px", // Ensure it doesn't exceed design width
        height: "198px",
        borderRadius: "14px",
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
          style={{
            backgroundColor: "rgba(24, 16, 8, 0.22)", // Simplified RGBA for opacity
          }}
        >
          <h3
            className="text-white font-bold text-center"
            style={{
              fontSize: "20px", // Responsive font size
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
    </div>
  );
}
