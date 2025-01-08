import Image from "next/image";
import Header from "./Header"; // Import the Header component

export default function DisplayBanner() {
  return (
    <div className="w-full h-[700px] -mt-30"> {/* Increased height */}
      {/* Image section with overlay */}
      <div className="relative w-full h-full">
        <Image
          src="/images/dell-unsplash 1.png"
          alt="Dell XPS 13"
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-60 w-full h-full"

        />

       {/* Header content overlay */}
<div className="absolute inset-0 flex flex-col items-start justify-center text-left text-white bg-black bg-opacity-10 pl-10"> 
    <h1 className="text-3xl sm:text-3xl lg:text-5xl font-semibold mb-4">
        All New
    </h1>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4">
         Dell XPS 13
    </h2>
    <p className="text-lg sm:text-xl mb-8">
        Lorem ipsum dolor sit amet, consectetur <br/>
        adipiscing elit, sed do eiusmod tempor.
    </p>
</div>
      </div>
    </div>
  );
}