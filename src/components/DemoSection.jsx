import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './DemoSection.css';
import { FaArrowRight } from 'react-icons/fa';

export default function DemoSection() {
    const slides = [
        "/images/demoImages/img_5.jpg",
        "/images/demoImages/img_1.jpg",
        "/images/demoImages/img_2.png",
        "/images/demoImages/img_3.jpg",
        "/images/demoImages/img_6.jpg",
    ];

    return (
        <section className="demo-section">
            <div className="demo-content">
                <div className="demo-slider-block">
                    <Swiper spaceBetween={20} slidesPerView={1} loop={true}>
                        {slides.map((img, index) => (
                            <SwiperSlide key={`first-${index}`}>
                                <img src={img} alt={`Slide 1 - ${index + 1}`} className="demo-image" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <button
                        className="demo-button"
                        onClick={() =>
                            window.open('/demo-1/index.html', '_blank', 'noopener,noreferrer')
                        }
                    >
                        Դիտել Դեմոն 1 <FaArrowRight className="arrow-icon" />
                    </button>
                </div>

                <div className="demo-slider-block">
                    <Swiper spaceBetween={20} slidesPerView={1} loop={true}>
                        {slides.map((img, index) => (
                            <SwiperSlide key={`second-${index}`}>
                                <img src={img} alt={`Slide 2 - ${index + 1}`} className="demo-image" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <button
                        className="demo-button"
                        onClick={() =>
                            window.open('/demo-2/index.html', '_blank', 'noopener,noreferrer')
                        }
                    >
                        Դիտել Դեմոն 2 <FaArrowRight className="arrow-icon" />
                    </button>
                </div>
            </div>
        </section>
    );
}
