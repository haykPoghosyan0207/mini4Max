import "./HomeTestImonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function HomeTestImonials() {
    const testimonials = [
        {
            name: "Անի Սարգսյան",
            text: "Շատ գոհ եմ ծառայությունից, ամեն ինչ որակով և արագ։"
        },
        {
            name: "Գոռ Մկրտչյան",
            text: "Առաջարկում եմ բոլորին։ Մատչելի գներ և հիանալի սպասարկում։"
        },
        {
            name: "Լուսինե Հակոբյան",
            text: "Իմ ամենասիրելի թիմը։ Շնորհակալ եմ ամեն ինչի համար։"
        }
    ];

    return (
        <div
            className="HomeTestImonials"
            style={{
                backgroundImage: `url(./images/homeImages/suitsModeling.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                padding: "60px 0",
                color: "white",
            }}
        >
            <div className="testimonials-container">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    loop={true}
                    spaceBetween={50}
                    slidesPerView={1}
                    style={{
                       width: "80%",
                    }}
                >
                    {testimonials.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="testimonial-slide">
                                <p className="testimonial-text">"{item.text}"</p>
                                <p className="testimonial-name">- {item.name}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
