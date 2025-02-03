import Image from "next/image";

export default function FeaturedProductCard() {
  return (
    <>
      {/* Desktop View */}
      <div className="relative hidden md:flex w-full h-48 bg-orange-500 items-center">
        <div className="absolute left-8 top-1/2 transform -translate-y-1/2">
          <h2 className="text-white text-3xl font-bold mb-2">Get Up to</h2>
          <h2 className="text-white text-5xl font-bold">50% Off</h2>
          <p className="text-white text-2xl">on Selected Items</p>
        </div>
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 border-4 border-orange-500 rounded-lg overflow-hidden w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48">
          <Image
            src="/images/image 1.png"
            alt="Promotional Phone"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      {/* Mobile View - Larger Image & Overlay */}
      <div className="relative flex md:hidden w-full h-96">
        {/* Background Image */}
        <Image
          src="/images/image 1.png"
          alt="Promotional Phone"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 w-full h-full"
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80"></div>

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
