import Image from "next/image";
import Link from "next/link";

export default function FeaturedProductCard() {
  const jobs = [
    {
      id: 1,
      logo: "/images/Rectangle 30.png",
      date: "08 Jan 2024",
      title: "iPhone 14 Pro Max - 256GB",
      company: "Apple",
      location: "Available Now",
      description:
        "256GB storage capacity, powered by the A16 Bionic chip, and an advanced camera system.",
      price: "Rs.249,999",
      originalPrice: "Rs.399,999",
      rating: 5,
    },
  ];

  return (
    <div className="p-3 flex space-x-4 overflow-x-auto scrollbar-hide">
      {jobs.map((job) => (
        <div
          key={job.id}
          className="bg-white p-8 rounded-lg shadow-md flex-shrink-0 w-80 relative"
        >
          {job.logo && (
            <div className="flex justify-center">
              <Image
                src={job.logo}
                alt={`${job.company} logo`}
                width={200}
                height={200}
                className="rounded-lg"
                style={{ objectFit: "cover" }}
              />
            </div>
          )}

          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-2 text-center">
            {job.title}
          </h3>
          <div className="flex justify-center mb-4 text-yellow-500">
            {Array.from({ length: job.rating }).map((_, index) => (
              <span key={index}>&#9733;</span>
            ))}
          </div>

          <div className="text-center mb-4">
            <p className="text-red-500 text-2xl font-bold">{job.price}</p>
            <p className="text-gray-400 line-through">{job.originalPrice}</p>
          </div>

          <p className="text-gray-800 text-center mb-6 font-sans">
            {job.description}
          </p>

          <div className="flex justify-center">
            <Link href={`http://localhost:3001/singleproduct/${job.id}`} passHref>
              <button className="bg-[#001571] text-white py-2 px-6 rounded-md font-semibold w-full font-sans text-center">
                View Details
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}