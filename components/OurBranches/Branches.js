import React from "react";
import Image from "next/image";
import styles from "./Branches.module.css";

const Branches = () => {
  const branches = [
    {
      name: "Kegalle",
      address: "869/420, Main Road, Kegalle",
    },
    {
      name: "Gampaha",
      address: "869/420, Main Road, Gampaha",
    },
    {
      name: "Colombo",
      address: "869/420, Main Road, Colombo",
    },
  ];

  return (
    <div>
      {/* Desktop View - Hidden on Mobile */}
      <div className="hidden md:block">
        <div className="mt-20 flex justify-center">
          <h2 className={styles.branchesTitle}>Our Branches</h2>
        </div>
        <div className="relative w-full flex">
          <div
            className={`${styles.branchesContainer} absolute left-5 top-5 z-10 bg-white p-5 rounded-lg shadow-lg w-[350px]`}
          >
            <div className="mt-10">
              <div className={styles.branchesList}>
                {branches.map((branch, index) => (
                  <div key={index} className={styles.branchItem}>
                    <div className={styles.branchIcon}>
                      <Image
                        src="/images/Place Marker.png"
                        alt="Location Icon"
                        width={24}
                        height={24}
                      />
                    </div>
                    <div className={styles.branchDetails}>
                      <h3 className={styles.branchName}>{branch.name}</h3>
                      <p className={styles.branchAddress}>{branch.address}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.mapButton}>
              <div className="mt-3 flex justify-center">
                <a href="#" className={`${styles.googleMapsLink} mt-52`}>
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345097854!2d144.95373531531073!3d-37.816279979751504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f4f8e217%3A0xf4c9f0b6c167e9d7!2sEnvato!5e0!3m2!1sen!2sau!4v1610934048471!5m2!1sen!2sau"
            width="100%"
            height="770px"
            style={{ borderRadius: "20px" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Mobile View - Hidden on Desktop */}
      <div className="block md:hidden px-4 py-6">
      <div className="mt-5 flex justify-center">
        <h2 className={styles.branchesTitle}>Our Branches</h2>
      </div>
      <br/>
        <div className="flex flex-col gap-5">
          {branches.map((branch, index) => (
            <div
              key={index}
              className="flex items-center bg-gray-100 p-4 rounded-lg shadow-md"
            >
              <div className="w-12 h-12 flex-shrink-0">
                <Image
                  src="/images/Place Marker.png"
                  alt="Location Icon"
                  width={48}
                  height={48}
                />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold">{branch.name}</h3>
                <p className="text-sm text-gray-600">{branch.address}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <a
            href="#"
            className="text-blue-600 underline text-lg font-semibold"
          >
            Open in Google Maps
          </a>
        </div>
      </div>
    </div>
  );
};

export default Branches;
