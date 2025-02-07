import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import BlogHomePagination from "@/components/BlogHomePagination";

const BlogArchiveSearch = () => {
  return (
    <>
      <Header />
      <div className="bg-white min-h-screen">
        <div className="container mx-auto py-8 px-4 mt-60">
          {/* Breadcrumb and Title */}
          <div className="mb-6 text-black px-8 py-16 rounded-tl-2xl">
            <h2 className="text-[18px] font-[Poppins] font-light leading-[29.12px] text-[#000000]">
              Search Result
            </h2>
            <h1 className="text-[47.12px] font-[Poppins] font-light leading-[76.18px] text-[#000000]">
              Search results for
              <span className="font-bold"> “iphone 14 pro” </span>
            </h1>
          </div>

          <div className="container mx-auto p-6">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Sidebar */}
              <div className="lg:w-1/4">
                <h2 className="text-xl font-semibold mb-4">Filter Results</h2>
                {/* Category Filter */}
                <div className="border rounded-lg p-4 mb-6">
                  <h3 className="text-lg font-medium mb-2">Category</h3>
                  <ul>
                    <li className="mb-2">
                      <label className="inline-flex items-center">
                        <input type="checkbox" className="form-checkbox h-5 w-5" />
                        <span className="ml-2">Smartphone</span>
                      </label>
                    </li>
                    <li className="mb-2">
                      <label className="inline-flex items-center">
                        <input type="checkbox" className="form-checkbox h-5 w-5" />
                        <span className="ml-2">TV</span>
                      </label>
                    </li>
                    <li className="mb-2">
                      <label className="inline-flex items-center">
                        <input type="checkbox" className="form-checkbox h-5 w-5" />
                        <span className="ml-2">Tablet</span>
                      </label>
                    </li>
                  </ul>
                </div>

                {/* Calendar Filter */}
                <div className="border rounded-lg p-4 mb-6">
                  <h3 className="text-lg font-medium mb-2">Calendar</h3>
                  <div className="flex flex-col gap-4">
                    <input type="date" className="border p-2 rounded" />
                    <input type="date" className="border p-2 rounded" />
                  </div>
                </div>
              </div>

              {/* Blog Posts */}
              <div className="lg:w-3/4">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">Sort By:</h2>
                  <div>
                    <button className="border rounded px-4 py-2 mr-2">Newest</button>
                    <button className="border rounded px-4 py-2">Most Popular</button>
                  </div>
                </div>

                {/* Blog Post Cards (Vertical Layout) */}
                <div className="flex flex-col gap-6">
                  {Array(2)
                    .fill(0)
                    .map((_, idx) => (
                      <div
                        key={idx}
                        className="border rounded overflow-hidden flex flex-col lg:flex-row"
                      >
                        <img
                          src="\images\image 4.png"  
                          alt="Blog Post"

                        />
                      </div>
                    ))}
                </div>

                {/* Pagination */}
                <BlogHomePagination />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogArchiveSearch;
