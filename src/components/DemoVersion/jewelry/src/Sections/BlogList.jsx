import React, { useEffect, useState } from 'react';
import { getBlogs } from "../Services/HttpServices/BlogsHttpService";
import { useNavigate } from 'react-router-dom';

export default function BlogList() {
    const [blogs, setBlogs] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getBlogs().then((res) => {
            const data = res?.data?.data || [];
            setBlogs(data);
        });
    }, []);

    const handleReadMore = (blog) => {
        navigate('/blog-details', {
            state: {
                title: blog.title,
                image: blog.image_url,
                description: blog.description
            }
        });
    };

    return (
        <section className="bg-[#fefdf8] py-12 px-4 md:px-12">
            <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Our Blog</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {blogs.map((blog, index) => (
                    <div key={index}
                         className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col">
                        <img
                            src={blog.image_url || '/no-image.jpg'}
                            alt={blog.title}
                            className="w-full h-52 object-cover"
                        />
                        <div className="p-4 flex flex-col justify-between grow">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-1">{blog.title}</h3>
                                <p className="text-gray-600 text-sm mb-2 line-clamp-3">{blog.description.slice(0, 150)}...</p>
                            </div>
                            <button
                                onClick={() => handleReadMore(blog)}
                                className="text-yellow-600 font-medium hover:underline text-sm mt-auto text-left"
                            >
                                Կարդալ ավելին →
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
