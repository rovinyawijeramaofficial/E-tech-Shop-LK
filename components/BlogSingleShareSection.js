import Image from "next/image";

export default function ShareSection() {
  return (
    <div className="bg-gray-100 p-6 rounded-lg">
      {/* Heading */}
      <p className="text-center text-black font-medium text-lg">
        Share this article on,
      </p>

      {/* Social Media Icons */}
      <div className="flex justify-center items-center space-x-4 mt-4">
        <a href="#" aria-label="Facebook">
          <Image
            src="/images/image 7.png" // Replace with the correct Facebook icon path
            alt="Facebook"
            width={91.38}
            height={37.68}
          />
        </a>
        <a href="#" aria-label="Messenger">
          <Image
            src="/images/image 8.png" // Replace with the correct Messenger icon path
            alt="Messenger"
            width={91.38}
            height={37.68}
          />
        </a>
      </div>
    </div>
  );
}
