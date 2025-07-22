import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./HomeStory.css";

export default function HomeStory() {
    const stories = [
        "Մեր ճանապարհը սկսվեց 2020-ին, երբ ունեցանք ընդամենը մեկ աշխատող։",
        "Այսօր մենք ունենք հարյուրավոր հաճախորդներ ու հզոր թիմ։",
        "Ապագան տեսնում ենք նորարարության և վստահության հիմքով։",
    ];

    return (
        <div className="HomeStory" style={{ display: "flex", flexWrap: "wrap" }}>
            <div className="storyTitle">
                <h1>OUR STORY</h1>
            </div>
            <div className="home-story-left">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 4000 }}
                    loop={true}
                    spaceBetween={30}
                    slidesPerView={1}
                >
                    {stories.map((text, index) => (
                        <SwiperSlide key={index}>
                            <div className="story-slide">
                                <p>{text}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Նկարի հատված */}
            <div
                className="home-story-right"
                style={{
                    flex: 1,
                    backgroundImage: `url(src/components/DemoVersion/clothersShop/public/images/homeImages/HomeStory.jpg)`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            ></div>
        </div>
    );
}
