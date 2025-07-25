import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function OurTrends() {
    const navigate = useNavigate();
    const trends = [
        {
            image: '/images/blogsIImages/lightbulb_character.png',
            title: 'Մտածողության ճկունություն',
        },
        {
            image: '/images/blogsIImages/robotic_hand_atom.png',
            title: 'Նորարարություն',
        },
        {
            image: '/images/telegram_mini_app_store.png',
            title: 'Telegram Mini App',
        },
        {
            image: '/images/blogsIImages/people_speech_bubbles.png',
            title: 'Անձնական շփում զանգվածային աշխարհում',
        },
        {
            image: 'public/images/blogsIImages/open_door_icon.png',
            title: 'Երբ մի կոդը կարող է բացել դուռ',
        },
        {
            image: '/images/blogsIImages/binary_background.png',
            title: 'Տեսնել ավելին, քան թիվը',
        },
    ];

    // Սկզբնական տեսանելի քարտերի քանակը՝ ըստ էկրանին
    const [visibleCount, setVisibleCount] = useState(window.innerWidth <= 768 ? 1 : 4);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setVisibleCount(window.innerWidth <= 768 ? 1 : 4);
            setCurrentIndex(0);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % trends.length);
    };

    const prev = () => {
        setCurrentIndex((prev) => (prev - 1 + trends.length) % trends.length);
    };
    const visibleTrends = Array.from({ length: visibleCount }).map((_, i) => {
        const trendIndex = (currentIndex + i) % trends.length;
        return trends[trendIndex];
    });
    return (
        <div className="ourTrends" style={{padding: "20px 0", textAlign: "center"}}>
            <h2 className="sectionTitle" style={{marginBottom: "30px"}}>Թրենդները</h2>

            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "16px",
                flexWrap: "nowrap"
            }}>
                <button
                    onClick={prev}
                    style={{
                        border: "none",
                        background: "#EC8305",
                        color: "white",
                        fontSize: "24px",
                        borderRadius: "50%",
                        width: "45px",
                        height: "45px",
                        cursor: "pointer",
                        opacity: 1,
                        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                        transition: "all 0.2s ease",
                    }}
                    aria-label="Previous trends"
                >
                    ❮
                </button>

                {/* Slides */}
                <div style={{
                    display: "flex",
                    gap: "16px",
                    justifyContent: "center",
                    flexWrap: "nowrap",
                }}>
                    {visibleTrends.map((trend, index) => (
                        <div
                            key={index}
                            className="trendItem"
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                transition: "transform 0.3s ease",
                                cursor: "pointer",
                            }}
                            onClick={() => navigate("/blog")}
                        >
                            <div
                                className="trendCard"
                                style={{
                                    backgroundImage: `url(${trend.image})`,
                                    height: "300px"
                                }}
                            ></div>
                            <div className="trendCardContent" style={{
                                textAlign: "center",
                                flexGrow: 1,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                            }}>
                                <h3 className="trendTitle">
                                    {trend.title}
                                </h3>
                                {trend.description && (
                                    <p className="trendDesc"
                                       style={{color: "#000", fontSize: "14px"}}>{trend.description}</p>
                                )}

                            </div>
                        </div>
                    ))}
                </div>

                {/* → Next */}
                <button
                    onClick={next}
                    style={{
                        border: "none",
                        background: "#EC8305",
                        color: "white",
                        fontSize: "24px",
                        borderRadius: "50%",
                        width: "45px",
                        height: "45px",
                        cursor: "pointer",
                        opacity: 1,
                        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                        transition: "all 0.2s ease",
                    }}
                    aria-label="Next trends"
                >
                    ❯
                </button>
            </div>
        </div>
    );
}
