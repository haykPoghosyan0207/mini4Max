import "./AboutHome.css"
import { Link } from "react-router-dom"
import React, { useEffect, useState } from "react";
import { getAboutPages } from "../../../Services/HttpServices/AboutHttpServices.js";

function getFirstSentence(text) {
    if (!text) return "";
    const index = text.indexOf("։");
    if (index === -1) return text; // Եթե վերջակետ չկա, վերադարձնում ենք ամբողջ տեքստը
    return text.slice(0, index + 1); // մինչև առաջին վերջակետը ներառյալ
}

export default function AboutHome() {
    const [aboutData, setAboutData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAbout = async () => {
            try {
                const response = await getAboutPages();
                const data = response?.data?.data;
                setAboutData(data);
            } catch (error) {
                console.error("Error loading about page:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchAbout();
    }, []);

    if (loading) return <div className="about-page">Բեռնվում է...</div>;

    if (!aboutData) return <div className="about-page">Տվյալներ չկան</div>;

    return (
        <div className="aboutHome">
            <div className="aboutHomeImg">
                {aboutData.image_url && (
                    <img
                        src={aboutData.image_url}
                        alt={aboutData.title || "About"}
                        className="homeAboutImage"
                    />
                )}
            </div>
            <div className="aboutHomeDesc">
                <h1>{aboutData.title}</h1>
                <p>{getFirstSentence(aboutData.description)}</p>
                <button>
                    <Link
                        to="/about"
                        style={{
                            color: "white",
                            textDecoration: "none",
                        }}
                    >
                        LEARN ABOUT US
                    </Link>
                </button>
            </div>
        </div>
    );
}
