import React from 'react';
 import blog1 from '../assets/image/Screenshot 2025-07-06 023421.png';
 import blog2 from '../assets/image/recyclebottle.jpg';
 import blog3 from '../assets/image/isocerificate.png';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      image: blog1, // Replace with actual image URLs
      date: '01 july 2025',
      title: 'Inside Our Recycling Plant: A Step-by-Step Tour',
      comments: '3 Comments',

      description: 'Get a behind-the-scenes look at how we recycle tons of Plastic waste each month.',

    },
    {
      id: 2,
      image: blog2,
      date: '09 jun 2025',
      title: 'Why Recycling Matters More Than Ever',
      comments: '6 Comments',
      description: 'Learn the impact of plastic pollution and how sustainable practices can change our future.,',
    },
    {
      id: 3,
      image: blog3,
      date: '20 june 2025',
      title: 'Understanding ISO 14001: What Our Certification Means',
      comments: '2 Comments',
      description: 'A quick guide to why our environmental standards matter to clients and the planet.',
    },
    
  ];

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        {/* Header */}
        <div className="mb-8">
          <div className="flex justify-center mb-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-800" style={{fontFamily:"Roboto"}}>
          Blogs
        </h2>
          </div>
          <h1 className="text-4xl font-bold text-[#34B34C]">
            Insights & Updates from the World of Recycling
          </h1>
          <p className="text-gray-500 mt-4">
Stay informed with stories, innovations, expert tips, and industry insights on plastic waste management, environmental compliance, and sustainable recycling practices.          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex justify-between text-sm text-gray-500 mb-4">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm0 14a1 1 0 100-2 1 1 0 000 2zm-5-5a1 1 0 100-2 1 1 0 000 2zm10 0a1 1 0 100-2 1 1 0 000 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {post.date}
                  </span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M18 10c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8zm-2 0a6 6 0 11-12 0 6 6 0 0112 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {post.comments}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{post.title}</h3>
                <p className="text-gray-600 mb-6">{post.description}</p>
                <a href="/BlogPage"><button className="bg-[#34BC43] text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300">
                  Read More
                </button></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;