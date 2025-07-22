import {useEffect, useState} from "react";
import {getBlogs} from "../../../Services/HttpServices/BlogsHttpServices.js";
import {Link} from "react-router-dom"
import "./HomeBlog.css"
export default function HomeBlog() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getBlogs();
            console.log(response);
            if (response?.data) {
                setBlogs(response.data.data);
            }
        };
        fetchData();
    }, []);
    return (
        <div className="HomeBlog">
            <h1>NEWS</h1>
                {blogs.slice(0,1).map((blog, index) => (
                    <div key={index} className="blogCard">

                        <div className="homeBlogDesc">
                            <h2>{blog.title}</h2>
                            <p>
                                {blog.description}
                            </p>
                            <button ><Link to="/news" style={{
                                textDecoration: 'none',
                                color: 'white',
                            }}   >Learn to more</Link></button>
                        </div>
                        <div className="homeBlogImg">
                            <img src={blog.image_url} alt={`Blog ${index}`} />
                        </div>
                    </div>
                ))}

        </div>
    )
}