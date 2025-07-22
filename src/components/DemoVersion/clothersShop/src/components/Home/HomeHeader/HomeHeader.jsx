import { useEffect, useState } from "react";
import {getTopProductById} from "../../../Services/HttpServices/TopProductsHttpService.js";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "./HomeHeader.css"

export default function TopProductSlider() {
    const [topProducts, setTopProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getTopProductById();
            if (response?.data) {
                setTopProducts(response.data.data);
            }
        };
        fetchData();
    }, []);
    return (
        <div className="top-product-slider-wrapper">
            <Swiper
                modules={[Navigation]}
                navigation
                spaceBetween={0}
                slidesPerView={1}
            >
                {topProducts.map((product) => (
                    <SwiperSlide key={product.id}>
                        <div className="top-product-card">
                            <img
                                src={product.image_url}
                                alt={product.name}
                                className="top-product-image"
                            />
                            <h3 className="top-product-name">{product.name}</h3>
                            <p className="top-product-description">{product.description}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
