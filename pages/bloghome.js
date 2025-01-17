import React from 'react';
import Footer from '@/components/CustomerReviews/CustomerReviewsBG/Footer';
import Header from '@/components/Header';
import BlogHomePagination from "@/components/BlogHomePagination";
import Newsletter from "@/components/Newsletter";

const BlogHome = () => {
  const posts = [
    {
      title: 'Windows 11',
      description: 'Lorem ipsum dolor sit amet, consectetur.',
      image: '/images/Rectangle 46.png',
      category: 'News',
      link: '#',
    },
    {
      title: 'Cycling Updates',
      description: 'Lorem ipsum dolor sit amet, consectetur.',
      image: '/images/Rectangle 47.png',
      category: 'Announcement',
      link: '#',
    },
    {
      title: 'VR Tech',
      description: 'Lorem ipsum dolor sit amet, consectetur.',
      image: '/images/Rectangle 48.png',
      category: 'News',
      link: '#',
    },
  ];

  const recommendedPosts = [
    {
      title: 'Windows 11',
      description: 'Lorem ipsum dolor sit amet, consectetur.',
      image: '/images/Rectangle 46.png',
      category: 'News',
      link: '#',
    },
    {
      title: 'VR Tech',
      description: 'Lorem ipsum dolor sit amet, consectetur.',
      image: '/images/Rectangle 48.png',
      category: 'News',
      link: '#',
    },
    {
      title: 'VR Tech',
      description: 'Lorem ipsum dolor sit amet, consectetur.',
      image: '/images/Rectangle 48.png',
      category: 'News',
      link: '#',
    },
  ];

  const latestPosts = [
    {
      title: "Creating is a privilege but it’s also a gift",
      description:
        "Nullam vel lectus vel velit pellentesque dignissim nec id magna. Cras molestie ornare quam at semper.",
      image: "/images/image 4.png",
      categories: ["Lifestyle", "People", "Review"],
      link: '#',
    },
    {
      title: "Being unique is better than being perfect",
      description:
        "Nam in pretium dui. Phasellus dapibus, mi at molestie cursus, neque eros aliquet nisi, non efficitur nisi est nec mi.",
      image: "/images/image 3.png",
      categories: ["Design", "Product", "Idea"],
      link: '#',
    },
  ];

  return (
    <>
      <Header />
      <div className="container mt-60 mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="mb-8 bg-black text-white px-6 py-20 rounded-[25px]">
          <h3 className="text-gray-400">Home / Blog</h3>
          <h1 className="text-4xl font-bold">Blog</h1>
        </div>

        {/* Posts Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 -mt-20">
          {posts.map((post, index) => (
            <a href="/blogsingle">
            <div
              key={index}
              className="relative bg-white rounded-[15px] overflow-hidden shadow-lg border"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded uppercase">
                  {post.category}
                </span>
                <h3 className="text-black text-lg font-semibold mt-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mt-1">{post.description}</p>
              </div>
            </div>
            </a>
          ))}
        </div>

        {/* Search Bar */}
        <div className="mb-8 flex justify-center">
          <div className="flex border rounded-lg overflow-hidden w-full max-w-8xl">
            <input
              type="text"
              placeholder="Try searching 'Smart TV'"
              className="p-6 w-full focus:outline-none"
            />
            <button className="bg-black text-white p-8 flex items-center">
              <span className="mr-2">
              <img
              src={"/images/SearchWhite.png"}
              alt="Search Icon"
              style={{
                width: "29px",
                height: "29px",
                marginRight: "8px",
              }}
            />
              </span>
              Search
            </button>
          </div>
        </div>

        {/* Recommended Posts Section */}
        <div className="mb-12">
          <h2
            className="text-2xl font-bold mb-4"
            style={{
              height: "77px",
              width: "510px",
              fontFamily: "poppins",
              fontWeight: 600,
              fontSize: "47.12px",
              lineHeight: "76.18px",
            }}
          >
            Recommended Posts
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         
            <div className="lg:col-span-2 relative bg-black rounded-[25px] overflow-hidden shadow-lg">
              <img
                src={recommendedPosts[0].image}
                alt={recommendedPosts[0].title}
                className="w-full h-56 lg:h-72 object-cover opacity-75"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-4">
                <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded uppercase">
                  {recommendedPosts[0].category}
                </span>
                <h3 className="text-white text-xl font-semibold mt-2">
                  {recommendedPosts[0].title}
                </h3>
                <p className="text-white text-sm mt-1">{recommendedPosts[0].description}</p>
              </div>
            </div>

            <div className="space-y-6">
              {recommendedPosts.slice(1).map((post, index) => (
                <div
                  key={index}
                  className="relative bg-black rounded-[25px] overflow-hidden shadow-lg"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-56 object-cover opacity-75"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end p-4">
                    <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded uppercase">
                      {post.category}
                    </span>
                    <h3 className="text-white text-xl font-semibold mt-2">
                      {post.title}
                    </h3>
                    <p className="text-white text-sm mt-1">{post.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Latest Posts Section */}
<div className="mb-12">
  <h2
    className="text-3xl font-bold mb-6"
    style={{
      height: "77px",
      width: "285px",
      fontFamily: "poppins",
      fontWeight: 600,
      fontSize: "47.12px",
      lineHeight: "76.18px",
    }}
  >
    Latest Posts
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Image 4.png */}
    <a
      href="/blogsingle"
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

    {/* Image 3.png */}
    <a
      href="/blogsingle"
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
  <br />
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Image 4.png */}
    <a
      href="/blogsingle"
      key={2}
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

    {/* Image 3.png */}
    <a
      href="/blogsingle"
      key={3}
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

<BlogHomePagination/>
<Newsletter/>

      </div>
      <Footer />
    </>
  );
};

export default BlogHome; 