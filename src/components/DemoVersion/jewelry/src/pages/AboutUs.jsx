import React, { useEffect, useState } from "react";
import { getAboutPages } from "../Services/HttpServices/AboutUsHttpService"; 

export default function About({ appId }) {
    const [aboutData, setAboutData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAbout = async () => {
            try {
                const res = await getAboutPages(appId);
                setAboutData(res?.data?.data || null);
            } catch (error) {
                console.error("Error loading about page:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchAbout();
    }, [appId]);

    if (loading) return <div className="text-center py-20">Բեռնում...</div>;
    if (!aboutData)
        return <div className="text-center py-20 text-red-600">Տվյալներ չեն գտնվել</div>;

    console.log(aboutData)

    const { image_url, title, description } = aboutData;

    return (
        <section className="max-w-7xl mx-auto px-4 py-16">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
                <div className="md:w-1/2 flex justify-center md:justify-start">
                    <img
                        src={image_url || "/default-about.jpg"}
                        alt={title || "About Image"}
                        className="rounded-lg shadow-lg max-h-[400px] object-cover"
                    />
                </div>

                <div className="md:w-1/2">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900">{title}</h2>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">{description}</p>
                </div>
            </div>
        </section>
    );
}
