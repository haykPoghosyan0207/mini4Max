import React, { useEffect, useState } from "react";
import {getAboutPages} from "../../Services/HttpServices/AboutHttpServices.js";
import "./About.css";
import HomeTestImonials from "../Home/HomeTestImonials/HomeTestImonials.jsx"; // Եթե ունես առանձին style

export default function About() {
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
        <div className="about-page">
            <div className="about-container">
                {aboutData.image_url && (
                    <img
                        src={aboutData.image_url}
                        alt={aboutData.title || "About"}
                        className="about-image"
                    />
                )}
                <div className="about-content">
                    <h2 className="about-title">{aboutData.title}</h2>
                    <p className="about-description">{aboutData.description}</p>
                </div>
            </div>
            <HomeTestImonials />
        </div>
    );
}
