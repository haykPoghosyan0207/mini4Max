import { useEffect, useState } from "react";
import { getProductByCategoryId } from "../../../Services/HttpServices/CategoriesHttpService.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./BabySuits.css";

export default function BabySuits() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await getProductByCategoryId(4);
                console.log(res.data);
                const categories = res?.data?.data || [];
                setProducts(categories);
            } catch (error) {
                console.error("Error loading products:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) return <div className="baby-products-loading">Բեռնվում է...</div>;

    return (
        <section className="baby-products-wrapper">
            <h2 className="baby-products-title"></h2>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {products.map((product) => (
                    <SwiperSlide key={product.id}>
                        <div className="baby-product-card"
                        style={{
                            backgroundImage: `url(${product.media_urls})`,
                        }}>
                            <div className="baby-product-info">
                                <h3 className="baby-product-name">{product.name}</h3>
                                <p className="baby-product-price">{product.price} դր․</p>
                                <button className="baby-add-btn">Ավելացնել զամբյուղ</button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
