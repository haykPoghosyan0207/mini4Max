import React, { useEffect, useRef, useState } from 'react';
import { getProductByCategory } from "../Services/HttpServices/CategoriesHttpService";
import { useCart } from 'react-use-cart';
import { useWishlist } from '../context/WishlistContext.jsx';
import { Link } from 'react-router-dom';

export default function BestProducts() {
    const [data, setData] = useState([]);
    const [miniCartDropDown, setMiniCartDropDown] = useState(false);
    const miniCartRef = useRef(null);

    const { addItem } = useCart();
    const { addToWishlist, removeFromWishlist, wishlist } = useWishlist();

    useEffect(() => {
        async function fetchData() {
            const response = await getProductByCategory();
            setData(response?.data?.data?.[1]?.products?.slice(0, 8) || []);
        }
        fetchData();
    }, []);

    const handleMiniCartDropDown = () => {
        setMiniCartDropDown(prev => !prev);
        document.body.classList.add("minicart-open");
        document.getElementById('mini-cart-dropdown')?.classList.add('open');
    };

    useEffect(() => {
        if (!miniCartDropDown) return;
        const handleClickOutside = (event) => {
            if (miniCartRef.current && !miniCartRef.current.contains(event.target)) {
                setMiniCartDropDown(false);
                document.body.classList.remove("minicart-open");
                document.getElementById('mini-cart-dropdown')?.classList.remove('open');
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [miniCartDropDown]);

    const handleWishlistToggle = (item) => {
        const isFav = wishlist.find(el => el.id === item.id);
        isFav ? removeFromWishlist(item.id) : addToWishlist(item);
    };

    const ProductCard = ({ item }) => {
        const isFav = wishlist.find(el => el.id === item.id);

        return (
            <div className="relative group bg-[#fefdf8] rounded-lg overflow-hidden shadow hover:shadow-md transition p-4">
                <img
                    src={item.media_urls?.[0] || '/no-image.jpg'}
                    alt={item.name}
                    className="w-full h-64 object-cover rounded-md mb-3"
                />
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.name}</h3>
                <p className="text-sm text-gray-500 mb-3">${item.price}</p>

                {/* Icons */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition">
                    <button onClick={() => { addItem(item); handleMiniCartDropDown(); }} className="bg-white p-2 rounded-full shadow">
                        <i className="fas fa-cart-plus text-gray-700"></i>
                    </button>
                    <Link to={`/product/${item.id}`} className="bg-white p-2 rounded-full shadow">
                        <i className="fas fa-eye text-gray-700"></i>
                    </Link>
                    <button onClick={() => handleWishlistToggle(item)} className="bg-white p-2 rounded-full shadow">
                        <i className={isFav ? "fa-solid fa-heart text-red-500" : "fa-regular fa-heart text-gray-700"}></i>
                    </button>
                </div>
            </div>
        );
    };

    if (!data || data.length === 0) return null;

    return (
        <section ref={miniCartRef} className="bg-white py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800">Best Products</h2>
                    <Link to="/shop" className="text-yellow-600 hover:underline font-medium">
                        View All
                    </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {data.map((item, idx) => (
                        <ProductCard key={idx} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}
