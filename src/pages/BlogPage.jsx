import React from 'react'
import bannerImg from '../assets/image/aboutHeroimag.jpg'; // Update path as needed
import Blogcompo from '../components/Blog'; // Update path as needed
import FaqSection from '../components/FAQSection'; // Update path as needed
import ContactUs from '../components/Contact';


function Blog() {
    return (
        
        <div>
            
        <div
            className="relative h-[300px] md:h-[430px] flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${bannerImg})` }}
        >
            <div className="absolute inset-0 bg-[#34B34C]/40 backdrop-blur-sm"></div>
            <div className="relative z-10 text-center text-white px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Blogs</h1>
                <p className="text-sm md:text-lg max-w-xl mx-auto text-gray-200">
                    Thoughts, Trends, and Topics That Matter.
                </p>
            </div>

        </div>
        <Blogcompo/>
        <FaqSection />
        <ContactUs />
       
        </div>
    )
}

export default Blog
