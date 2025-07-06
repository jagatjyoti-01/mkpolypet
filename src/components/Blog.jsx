import React from 'react';
// import blog1 from '../image/blog-1.jpg';
// import blog2 from '../image/blog-2.jpg';
// import blog3 from '../image/blog-3.jpg';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      //image: blog1, // Replace with actual image URLs
      date: '01 Jan 2025',
      title: 'Remove Back Pain While Working on o physio',
      comments: '3 Comments',

      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Laudantium hic consequatur beatae architecto,',

    },
    {
      id: 2,
     // image: blog2,
      date: '01 Jan 2025',
      title: 'Benefits of a weekly physiotherapy session',
      comments: '3 Comments',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Laudantium hic consequatur beatae architecto,',
    },
    {
      id: 3,
     // image: blog3,
      date: '01 Jan 2025',
      title: 'Regular exercise can slow aging process',
      comments: '3 Comments',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Laudantium hic consequatur beatae architecto,',
    },
  ];

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        {/* Header */}
        <div className="mb-8">
          <div className="flex justify-center mb-2">
            <span className="text-blue-500 text-sm font-semibold uppercase tracking-wider border-b-2 border-blue-500 pb-1">
              OUR BLOG
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-800">
            Excellent Facility and High Quality Therapy
          </h1>
          <p className="text-gray-500 mt-4">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quaeret deleniti amet at atque sequi quibusdam cumque
            itaque repudiandae temporibus, eius nam mollitia voluptas maxime veniam necessitatibus saepe in ab? Repellat!
          </p>
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
                <a href="/BlogPage"><button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300">
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