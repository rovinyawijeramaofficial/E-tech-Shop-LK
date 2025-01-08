import Image from "next/image";

export default function FeaturedProductCard() {
  return (
    <div className="relative w-full h-48 bg-orange-500 flex items-center">
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
  );
}
