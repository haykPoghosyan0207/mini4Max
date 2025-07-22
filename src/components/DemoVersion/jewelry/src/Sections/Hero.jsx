import React, { useEffect, useState } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import { getTopProductById } from "../Services/HttpServices/TopProductsHttpService";

// Enable Swiper modules
// SwiperCore.use([Navigation]);

export default function Hero() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getTopProductById().then((res) => {
            if (res && Array.isArray(res)) {
                setProducts(res);
            } else if (res?.data?.data) {
                setProducts(res.data.data);
            } else if (res?.data) {
                setProducts(res.data);
            } else {
                console.error("Unexpected response:", res);
            }
        });
    }, []);

    const hardcodedTexts = [
        {
            title: "Բացահայտիր գեղեցկությունը՝ յուրաքանչյուր մանրամասում",
            subtitle: "Հեշտ, հմայիչ և անձնավորական՝ մեր յուրահատուկ զարդերը ստեղծված են քեզ համար:",
        },
        {
            title: "Շեշտիր քո յուրահատկությունը բնական նրբությամբ",
            subtitle: "Բնության ոգեշնչմամբ, ժամանակակից դիզայն՝ միայն քեզ համար:",
        },
        {
            title: "Գեղեցկություն, որ պատմում է քո պատմությունը",
            subtitle: "Նախընտրիր արժեք, որ դիմանում է ժամանակին և փայլում է յուրահատուկ ոճով:",
        },
    ];

    return (
        <section className="relative w-full h-screen overflow-hidden bg-[#fefdf8] m-0 p-0">
            <Swiper
                slidesPerView={1}
                navigation={{
                    nextEl: '.hero-next',
                    prevEl: '.hero-prev',
                }}
                className="w-full h-full"
            >
                {products.map((prod, index) => {
                    const { title, subtitle } = hardcodedTexts[index % hardcodedTexts.length];

                    return (
                        <SwiperSlide key={index} className="relative w-full h-full m-0 p-0">
                            {/* Background image full-screen */}
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: `url(${prod.image_url})` }}
                            >
                                <div className="absolute inset-0 bg-black bg-opacity-30" />
                            </div>

                            {/* Overlay content */}
                            <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">
                                <h1 className="text-3xl md:text-5xl font-bold mb-2 drop-shadow-lg">{title}</h1>
                                <p className="text-md md:text-xl mb-4 drop-shadow">{subtitle}</p>
                                <Link
                                    to="/shop"
                                    className="inline-block px-4 py-2 text-sm md:text-base bg-white bg-opacity-80 text-gray-800 font-semibold rounded-md hover:bg-opacity-100 transition"
                                >
                                    Shop Now
                                </Link>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>

            {/* Navigation arrows */}
            <div className="hero-prev absolute top-1/2 left-3 transform -translate-y-1/2 cursor-pointer z-20">
                <div className="bg-white rounded-full shadow-md p-2 hover:bg-yellow-200 transition">
                    <i className="fas fa-chevron-left text-gray-800 text-lg md:text-xl"></i>
                </div>
            </div>
            <div className="hero-next absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer z-20">
                <div className="bg-white rounded-full shadow-md p-2 hover:bg-yellow-200 transition">
                    <i className="fas fa-chevron-right text-gray-800 text-lg md:text-xl"></i>
                </div>
            </div>
        </section>
    );
}
