import React, { useEffect, useRef, useState } from 'react';
import { getProductByCategory } from "../Services/HttpServices/CategoriesHttpService";
import { useCart } from 'react-use-cart';
import { useWishlist } from '../context/WishlistContext.jsx';
import { Link } from 'react-router-dom';

export default function TrendingProduct() {
    const [data, setData] = useState([]);
    const [miniCartDropDown, setMiniCartDropDown] = useState(false);
    const miniCartRef = useRef(null);

    const { addItem } = useCart();
    const { addToWishlist, removeFromWishlist, wishlist } = useWishlist();

    useEffect(() => {
        async function fetchData() {
            const response = await getProductByCategory();
            setData(response?.data?.data?.[4]?.products?.slice(0, 4) || []);
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

    if (!data || data.length === 0) return null;

    const handleWishlistToggle = (item) => {
        const isFav = wishlist.find(el => el.id === item.id);
        isFav ? removeFromWishlist(item.id) : addToWishlist(item);
    };

    const ProductCard = ({ item }) => {
        const isFav = wishlist.find(el => el.id === item.id);

        return (
            <div className="relative group bg-[#fefdf8] rounded-l overflow-hidden shadow-md h-72 flex flex-col justify-between">
                <img
                    src={item.media_urls?.[0] || '/no-image.jpg'}
                    alt={item.name}
                    className="w-full h-3/4 object-cover"
                />
                <div className="p-3 text-center flex-1 flex flex-col justify-between">
                    <p className="text-sm font-medium text-gray-800">{item.name}</p>
                    <span className="mt-1 inline-block bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded w-max mx-auto">
                        ${item.price}
                    </span>
                </div>

                {/* Icons on hover */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition">
                    <button onClick={() => { addItem(item); handleMiniCartDropDown(); }} className="bg-white p-2 rounded-full shadow hover:bg-yellow-100">
                        <i className="fas fa-cart-plus"></i>
                    </button>
                    <Link to={`/product/${item.id}`} className="bg-white p-2 rounded-full shadow hover:bg-yellow-100">
                        <i className="fas fa-eye"></i>
                    </Link>
                    <button onClick={() => handleWishlistToggle(item)} className="bg-white p-2 rounded-full shadow hover:bg-yellow-100">
                        <i className={isFav ? "fas fa-heart text-red-500" : "far fa-heart"}></i>
                    </button>
                </div>
            </div>
        );
    };

    return (
        <div ref={miniCartRef} className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-800">Trending Products</h2>
                    <Link to="/shop" className="text-yellow-600 underline text-sm hover:text-yellow-800 transition">View All</Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {data.map((item, index) => (
                        <ProductCard key={index} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
}
