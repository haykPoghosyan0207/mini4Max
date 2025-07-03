import "./oneBlog.css"

import { useLocation } from "react-router-dom";

export default function OneBlog() {
    const location = useLocation();
    const { title, desk, img } = location.state || {};

    const lines = desk ? desk.split("\n") : [];

    return (
        <div className="oneBlog">
            <div className="oneBlogCard">
                <div className='oneBlogCardImg'>
                    <h1>{title}</h1>
                    <img src={img} alt={title} />
                </div>

                <div className="oneBlogText">
                    {lines.map((line, index) => {
                        line = line.trim();
                        if (line.startsWith("-")) {
                            return <li key={index}>{line.substring(1).trim()}</li>;
                        } else if (line === "") {
                            return <br key={index} />;
                        } else {
                            return <p key={index}>{line}</p>;
                        }
                    })}
                </div>
            </div>
        </div>
    );
}
