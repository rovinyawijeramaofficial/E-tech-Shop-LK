import React from "react";

const BlogSingleRelatedPosts = () => {
  // Latest Posts Data
  const latestPosts = [
    {
      image: "/images/blog 1.png",
      link: "#",
    },
  ];

  return (
    <div className="mb-12">
      {/* Title Section */}
      <h2
        className="text-3xl font-bold mb-6"
        style={{
          height: "77px",
          width: "324px",
          fontFamily: "Poppins, sans-serif",
          fontWeight: 600,
          fontSize: "47.12px",
          lineHeight: "76.18px",
          marginLeft:"82px",
        }}
      >
        Related Posts
      </h2>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2">
        {/* First Post */}
        <a
          href={latestPosts[0].link}
          key={0}
          className="block"
          style={{
          Height: "576px",
          width: "1398px",
          marginLeft:"78px",

          }}
        >
          <img
            src={latestPosts[0].image}
            alt={latestPosts[0].title}
            className="w-full h-auto rounded-lg shadow-md"
            style={{ maxHeight: "300px" }}
          />
          <h3 className="mt-4 text-xl font-semibold text-center">
            {latestPosts[0].title}
          </h3>
          <p className="mt-2 text-sm text-gray-600 text-center">
            {latestPosts[0].description}
          </p>
        </a>
      </div>
    </div>
  );
};

export default BlogSingleRelatedPosts;
