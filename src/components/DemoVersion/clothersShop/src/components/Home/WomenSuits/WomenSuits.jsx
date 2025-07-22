import { useEffect, useState } from "react";
import { getProductByCategoryId } from "../../../Services/HttpServices/CategoriesHttpService.js";
import { Link } from "react-router-dom";
import "./WomenSuits.css";

export default function WomenSuits() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await getProductByCategoryId(4);
                const categories = res?.data?.data || [];
                setProducts(categories.slice(0, 8)); // Ցուցադրում ենք միայն առաջին 8 ապրանքները
            } catch (error) {
                console.error("Error loading products:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) return <div className="women-products-loading">Բեռնվում է...</div>;

    return (
        <section className="women-products-wrapper">
            <h2 className="women-products-title">Կանացի Ապրանքներ</h2>

            <div className="women-products-grid">
                {products.map((product) => (
                    <div className="women-product-card" key={product.id}>
                        <div className="women-product-img">
                            <img src={product.media_urls} alt={product.name} />
                        </div>
                        <div className="women-product-info">
                            <h3 className="women-product-name">{product.name}</h3>
                            <p className="women-product-price">{product.price} դր․</p>
                            <button className="women-add-btn">
                                <Link to="/shop" style={{ textDecoration: "none", color: "white" }}>
                                    SHOP NOW
                                </Link>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
