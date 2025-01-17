import React from "react";

const BlogSingleRelatedPosts = () => {
  // Latest Posts Data
  const latestPosts = [
    {
      title: "Creating is a privilege but it’s also a gift",
      description:
        "Nullam vel lectus vel velit pellentesque dignissim nec id magna. Cras molestie ornare quam at semper.",
      image: "/images/image 4.png",
      categories: ["Lifestyle", "People", "Review"],
      link: "#",
    },
    {
      title: "Being unique is better than being perfect",
      description:
        "Nam in pretium dui. Phasellus dapibus, mi at molestie cursus, neque eros aliquet nisi, non efficitur nisi est nec mi.",
      image: "/images/image 3.png",
      categories: ["Design", "Product", "Idea"],
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
 
          fontFamily: "Poppins, sans-serif",
          fontWeight: 600,
          fontSize: "47.12px",
          lineHeight: "76.18px",
        }}
      >
        Related Posts
      </h2>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* First Post */}
        <a
          href="/blogarchivesearch"
          key={0}
          style={{
            width: "1118px",
            height: "576px",
            top: "2201px",
            left: "83px",
          }}
        >
          <img
            src={latestPosts[0].image}
            alt={latestPosts[0].title}
            style={{
              width: "1118px",
              height: "576px",
              top: "2201px",
              left: "83px",
            }}
          />
        </a>

        {/* Second Post */}
        <a
          href={latestPosts[1].link}
          key={1}
          style={{
            width: "383px",
            height: "576px",
            position: "absolute",
            right: "130px", // Adjusted to align with the right corner
          }}
        >
          <img
            src={latestPosts[1].image}
            alt={latestPosts[1].title}
            style={{
              width: "383px",
              height: "576px",
              position: "absolute",
              right: "125px", // Adjusted to align with the right corner
            }}
          />
        </a>
      </div>
    </div>
  );
};

export default BlogSingleRelatedPosts;
