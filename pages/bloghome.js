import React from 'react';
import Footer from "@/components/CustomerReviews/CustomerReviewsBG/Footer";
import Header from "@/components/Header";

const BlogHome = () => {
  const recommendedPosts = [
    {
      title: "Windows 11",
      description: "Lorem ipsum dolor sit amet, consectetur.",
      image: "/images/windows11.png",
      category: "LATEST",
    },
    {
      title: "Sample Post",
      description: "Lorem ipsum dolor sit amet, consectetur.",
      image: "/images/sample.png",
      category: "LATEST",
    },
  ];

  const latestPosts = [
    {
      title: "Post Title 1",
      description: "Lorem ipsum dolor sit amet consectetur.",
      image: "/images/post1.png",
      date: "January 1, 2025",
    },
    {
      title: "Post Title 2",
      description: "Lorem ipsum dolor sit amet consectetur.",
      image: "/images/post2.png",
      date: "January 2, 2025",
    },
    {
      title: "Post Title 3",
      description: "Lorem ipsum dolor sit amet consectetur.",
      image: "/images/post3.png",
      date: "January 3, 2025",
    },
    {
      title: "Post Title 4",
      description: "Lorem ipsum dolor sit amet consectetur.",
      image: "/images/post4.png",
      date: "January 4, 2025",
    },
  ];

  return (
    <>
      <Header />
      <div className="container mx-auto py-8 px-4 mt-60">
        <div className="container mx-auto px-6 py-12">
          {/* Blog Header */}
          <div className="text-center mb-6">
            <h1 className="text-4xl font-bold mb-2">Blog</h1>
            <p className="text-gray-500">Browse Through Our Blog</p>
          </div>

          {/* Featured Posts Slider */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
            {recommendedPosts.map((post, index) => (
              <div
                key={index}
                className="relative bg-black text-white rounded overflow-hidden"
              >
                <img
                  src="/images/Rectangle 46.png"
                  alt={post.title}
                  className="w-full h-64 object-cover opacity-50"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <span className="text-sm font-bold uppercase bg-yellow-500 px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-semibold mt-2">{post.title}</h3>
                  <p className="text-sm">{post.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Search Bar */}
          <div className="flex items-center gap-4 mb-8">
            <input
              type="text"
              placeholder="Search by keyword"
              className="flex-1 p-2 border border-gray-300 rounded"
            />
            <button className="bg-black text-white px-4 py-2 rounded">Search</button>
          </div>

          {/* Recommended Posts Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Recommended Posts</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {recommendedPosts.map((post, index) => (
                <div key={index} className="relative bg-black text-white rounded overflow-hidden">
                  <img
                    src="/images/Rectangle 57.png"
                    alt={post.title}
                    className="w-full h-64 object-cover opacity-50"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end p-4">
                    <span className="text-sm font-bold uppercase bg-yellow-500 px-2 py-1 rounded">
                      {post.category}
                    </span>
                    <h3 className="text-lg font-semibold mt-2">{post.title}</h3>
                    <p className="text-sm">{post.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Latest Posts Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Latest Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {latestPosts.map((post, index) => (
                <div
                  key={index}
                  className="border border-gray-300 rounded overflow-hidden"
                >
                  <img
                    src="/images/image 4.png"
                    alt={post.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                    <p className="text-sm text-gray-500 mb-2">{post.description}</p>
                    <span className="text-sm text-gray-400">{post.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination */}
          <div className="text-center">
            <button className="px-4 py-2 bg-gray-200 text-black rounded">&lt;&lt; Previous</button>
            <span className="mx-4 text-lg">Page 1</span>
            <button className="px-4 py-2 bg-gray-200 text-black rounded">Next &gt;&gt;</button>
          </div>

          {/* Newsletter Subscription */}
          <div className="mt-12 p-6 bg-gray-100 rounded">
            <div className="text-center mb-4">
              <h2 className="text-2xl font-bold">Subscribe to Our Newsletter</h2>
            </div>
            <div className="flex items-center justify-center gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 p-2 border border-gray-300 rounded"
              />
              <button className="bg-black text-white px-4 py-2 rounded">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogHome;
