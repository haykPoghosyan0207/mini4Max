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
            setCurrentIndex(0); // Էկրանի չափի փոփոխության դեպքում վերադարձրեք սկզբից
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const next = () => {
        if (currentIndex + visibleCount < trends.length) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const visibleTrends = trends.slice(currentIndex, currentIndex + visibleCount);

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
                    disabled={currentIndex === 0}
                    style={{
                        border: "none",
                        background: "#EC8305",
                        color: "white",
                        fontSize: "24px",
                        borderRadius: "50%",
                        width: "45px",
                        height: "45px",
                        cursor: currentIndex === 0 ? "not-allowed" : "pointer",
                        opacity: currentIndex === 0 ? 0.5 : 1,
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
                    overflow: "hidden",
                    maxWidth: visibleCount === 1 ? "90vw" : "80%",
                    justifyContent: "center",
                    flexWrap: "nowrap",
                }}>
                    {visibleTrends.map((trend, index) => (
                        <div
                            key={index}
                            className="trendItem"
                            style={{
                                flex: "0 0 auto",
                                width: "250px",
                                maxWidth: visibleCount === 1 ? "90vw" : "none",
                                backgroundColor: "#EC8305",
                                borderRadius: "12px",
                                overflow: "hidden",
                                boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                                display: "flex",
                                flexDirection: "column",
                                minHeight: "430px",
                                transition: "transform 0.3s ease",
                                cursor: "pointer",
                            }}
                            onClick={() => navigate("/blog")}
                        >
                            <div
                                className="trendCard"
                                style={{
                                    backgroundImage: `url(${trend.image})`,
                                }}
                            />
                            <div className="trendCardContent" style={{
                                textAlign: "center",
                                backgroundColor: "#EC8305",
                                padding: "12px",
                                flexGrow: 1,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                            }}>
                                <h3 className="trendTitle"
                                    style={{color: "white", marginBottom: "10px", fontSize: "25px"}}>
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
                    disabled={currentIndex + visibleCount >= trends.length}
                    style={{
                        border: "none",
                        background: "#EC8305",
                        color: "white",
                        fontSize: "24px",
                        borderRadius: "50%",
                        width: "45px",
                        height: "45px",
                        cursor: currentIndex + visibleCount >= trends.length ? "not-allowed" : "pointer",
                        opacity: currentIndex + visibleCount >= trends.length ? 0.5 : 1,
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
