import React from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import BlogHomePagination from "@/components/BlogHomePagination";
import BlogHomeLatestPosts from "@/components/BlogHomeLatestPosts";
import Newsletter from "@/components/Newsletter";
import { useRouter } from 'next/router';

const BlogHome = () => {
  const router = useRouter();
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

  return (
    <>
      <Header />
      <div className="left-[40px] w-[calc(100vw-97px)] mt-60 mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="mb-8 bg-black text-white px-6 py-20 rounded-[25px]">
          <h3 className="text-gray-400">Home / Blog</h3>
          <h1 className="text-4xl font-bold">Blog</h1>
        </div>

        {/* Posts Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 -mt-20">
          {posts.map((post, index) => (
            <a href="/blogsingle" key={index}>
              <div className="relative bg-white rounded-[15px] overflow-hidden shadow-lg border">
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
        

{/* Recommended Posts Section */}
<div className="mb-12">
<div className="mb-12">
  <h2
    className="text-3xl font-bold mb-6 text-center lg:text-left"
    style={{
      fontFamily: "Poppins",
      fontWeight: 600,
      fontSize: "47.12px",
      lineHeight: "76.18px",
  
    }}
  >
    Recommended Posts
  </h2>
  <style 
  jsx>{`
    @media (max-width: 430px) and (min-width: 430px) and (max-height: 932x) and (min-height: 932px) {
      h2 {
        margin-left: -20px;
      }
    }
  `} 
  </style>
</div>

  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
    <div
      className="lg:col-span-2 relative bg-black rounded-[25px] overflow-hidden shadow-lg cursor-pointer"
      onClick={() => router.push('/blogsingle')}
    >
      <img
        src="/images/Rectangle 46.png"
        alt="Recommended Post"
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
          className="relative bg-black rounded-[25px] overflow-hidden shadow-lg cursor-pointer"
          onClick={() => router.push('/blogsingle')}
        >
          <img
            src="/images/Rectangle 48.png"
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

        {/* BlogHomeLatestPosts Section */}
        <BlogHomeLatestPosts />

        <BlogHomePagination />
        <Newsletter />
      </div>
      <Footer />
    </>
  );
};

export default BlogHome;
