import { useEffect, useState } from "react";
import { getProductByCategory } from "../../../Services/HttpServices/CategoriesHttpService.js";
import {Link} from "react-router-dom";
import "./HomeProducts.css";

export default function HomeProducts() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await getProductByCategory();
                const categories = res?.data?.data || [];
                const allProducts = categories.flatMap((cat) => cat.products);
                console.log(allProducts);
                setProducts(allProducts);
            } catch (error) {
                console.error("Error loading products:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) return <div>Բեռնվում է...</div>;

    return (
        <div className="home-products">
            <div className="homeProductsTitle">
                <h1>Ready to wear</h1>
            </div>
            {products.slice(0, 4).map((product, index) => (
                <div key={index} className="homeProduct-card">
                    <img
                        src={product?.media_urls || "/default.jpg"}
                        alt={product?.title || "Անանուն ապրանք"}
                        className="homeProduct-image"
                    />
                    <h3>{product?.name || "Անվերնագիր"}</h3>
                    <p>
                        {product?.description
                            ? product.description.split(" ").slice(0, 3).join(" ") + (product.description.split(" ").length > 5 ? "..." : "")
                            : "Նկարագրություն բացակայում է։"}
                    </p>
                    <strong>{product?.price ? `${product.price} ֏` : "Գին չկա"}</strong><br/>
                    <button><Link to='/shop' style={{
                        textDecoration: 'none',
                        color: 'white',
                    }}>SHOP NOW</Link></button>
                </div>
            ))}
        </div>
    );
}
