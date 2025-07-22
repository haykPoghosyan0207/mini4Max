import React, { useEffect, useState } from 'react';
import {getBlogs} from "../../Services/HttpServices/BlogsHttpServices.js";
import './NewsPage.css';

export default function NewsPage() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getBlogs();
            if (response?.data?.data) {
                console.log(response.data.data);
                setBlogs(response.data.data);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="news-wrapper">
            <h1 className="news-title">Նորություններ</h1>
            <div className="news-grid">
                {blogs.map((blog, index) => (
                    <div className={`news-card ${index % 2 === 0 ? 'left' : 'right'}`} key={blog.id}>
                        <img src={blog.image_url} alt={blog.title} className="news-image" />
                        <div className="news-content">
                            <h2>{blog.title}</h2>
                            <p>{blog.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
