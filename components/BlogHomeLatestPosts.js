import React from "react";

const BlogHomeLatestPosts = () => {
  const latestPosts = [
    {
      image: "/images/image 4.png", // Image 4
      link: "#",
      width: 1050,
      height: 460,
    },
    {
      image: "/images/image 3.png", // Image 3
      link: "#",
      width: 340,
      height: 460,
    },
  ];

  // Duplicate the rows as required (e.g., 2 times for this case)
  const repeatedPosts = Array(2).fill(latestPosts);

  return (
    <div
      className="mb-12 px-4 lg:px-10 xl:px-1"
      style={{
        margin: "0 auto",
        maxWidth: "1500px", // Limit the total width
      }}
    >
      <h2
        className=" text-3xl font-bold mb-6 text-center lg:text-left"
        style={{
          fontFamily: "Poppins",
          fontWeight: 600,
          fontSize: "47.12px",
          lineHeight: "76.18px",
        }}
      >
        Latest Posts
      </h2>

      {/* Loop through repeated rows */}
      {repeatedPosts.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="grid grid-cols-1 gap-6 lg:grid-cols-[1050px_auto] lg:gap-6 xl:gap-3 mb-8"
        >
          {/* Loop through the images in the row */}
          {row.map((post, index) => (
            <a
              href={post.link}
              key={`${rowIndex}-${index}`}
              className="block"
              style={{
                width: "100%", // Ensure flexibility for responsive designs
                height: "460px", // Consistent height
              }}
            >
              <img
                src={post.image}
                alt={`Latest Post ${index + 1}`}
                className="w-full h-full object-cover rounded-md"
              />
            </a>
          ))}
        </div>
      ))}
    </div>
  );
};

export default BlogHomeLatestPosts;
