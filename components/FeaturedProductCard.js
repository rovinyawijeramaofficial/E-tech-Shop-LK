import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function FeaturedProductCard() {
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  const jobs = [
    {
      id: 1,
      logo: "/images/Rectangle 30.png",
      date: "08 Jan 2024",
      title: "Iphone 14 Pro Max - 256GB",
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
    <>
      <div className="p-3  flex space-x-4 overflow-x-auto scrollbar-hide">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-white p-8 rounded-lg shadow-md flex-shrink-0 w-80 relative"
          >
            {/* Logo (Image of the Product) */}
            <div className="flex justify-center">
              <Image
                src={job.logo}
                alt={`${job.company} logo`}
                width={200}
                height={200}
                className="rounded-lg"
              />
            </div>

            {/* Title and Rating */}
            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-2 text-center">
              {job.title}
            </h3>
            <div className="flex justify-center mb-4 text-yellow-500">
              {Array.from({ length: job.rating }).map((_, index) => (
                <span key={index}>&#9733;</span>
              ))}
            </div>

            {/* Price */}
            <div className="text-center mb-4">
              <p className="text-red-500 text-2xl font-bold">{job.price}</p>
              <p className="text-gray-400 line-through">{job.originalPrice}</p>
            </div>

            {/* Details */}
            <p className="text-gray-800 text-center mb-6 font-sans">
              {job.description}
            </p>

            {/* Button */}
            <div className="flex justify-center">
              <button className="bg-[#001571] text-white py-2 px-6 rounded-md font-semibold w-full font-sans">
                View Details
              </button>
            </div>
          </div>
        ))}

        {/* Job Application Form Popup */}
        {showApplicationForm && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="relative bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
              <button
                onClick={() => setShowApplicationForm(false)}
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              >
                Close
              </button>
              <JobApplicationForm
                onClose={() => setShowApplicationForm(false)}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
