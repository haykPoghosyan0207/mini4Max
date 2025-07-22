import React, { useEffect, useRef, useState } from 'react';
import { useCart } from 'react-use-cart';
import { useWishlist } from '../context/WishlistContext.jsx';
import { Link } from 'react-router-dom';

export default function ProductCard({ item }) {
    const product = item.products;

    const [miniCartDropDown, setMiniCartDropDown] = useState(false);
    const miniCartRef = useRef(null);
    const { addItem } = useCart();
    const { addToWishlist, wishlist } = useWishlist();

    const cartProduct = {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.media_urls?.[0],
        description: product.description,
        ...product,
    };

    const isInWishlist = (id) => wishlist.some((w) => w.id === id);

    const handleMiniCartDropDown = () => {
        setMiniCartDropDown((prev) => !prev);
        document.body.classList.add('minicart-open');
        document.getElementById('mini-cart-dropdown')?.classList.add('open');
    };

    useEffect(() => {
        if (!miniCartDropDown) return;

        const handleClickOutside = (event) => {
            if (miniCartRef.current && !miniCartRef.current.contains(event.target)) {
                setMiniCartDropDown(false);
                document.body.classList.remove('minicart-open');
                document.getElementById('mini-cart-dropdown')?.classList.remove('open');
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [miniCartDropDown]);

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-IN', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(amount);
    };

    if (!product) return null;

    return (
        <div
            ref={miniCartRef}
            className="bg-white shadow-md rounded-lg overflow-hidden p-4 flex flex-col items-center justify-between hover:shadow-lg transition duration-300"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1500"
        >
            <div className="relative w-full">
                <img
                    src={product.media_urls?.[0] || '/default-image.jpg'}
                    alt={product.name}
                    className="w-full h-64 object-cover rounded-md"
                />

                {item.sold_out && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <Link to="/check-out" className="bg-yellow-500 text-white px-4 py-2 rounded">
                            Sold Out
                        </Link>
                    </div>
                )}

                <div className="absolute top-2 right-2 space-y-2">
                    {/* Add to Cart */}
                    <button
                        onClick={() => {
                            addItem(cartProduct);
                            handleMiniCartDropDown();
                        }}
                        className="bg-white p-2 rounded-full shadow hover:bg-yellow-100"
                    >
                        <i className="fas fa-cart-plus text-yellow-600"></i>
                    </button>

                    {/* View Product */}
                    <Link
                        to={`/product/${product.id}`}
                        className="block bg-white p-2 rounded-full shadow hover:bg-yellow-100"
                    >
                        <i className="fas fa-eye text-yellow-600"></i>
                    </Link>

                    {/* Add to Wishlist */}
                    <button
                        onClick={() => addToWishlist(cartProduct)} // ✅ ճիշտ կառուցվածք
                        className="bg-white p-2 rounded-full shadow hover:bg-yellow-100"
                    >
                        <i
                            className={
                                isInWishlist(product.id)
                                    ? 'fa-solid fa-heart text-red-600'
                                    : 'fa-regular fa-heart text-gray-500'
                            }
                        ></i>
                    </button>
                </div>
            </div>

            <div className="mt-4 w-full text-center">
                <Link to={`/product/${product.id}`}>
                    <h3 className="text-lg font-bold text-gray-800 hover:text-yellow-600 transition">
                        {product.name}
                    </h3>
                </Link>
                <p className="text-gray-600 text-sm mt-2 line-clamp-2">{product.description}</p>
                <h5 className="text-yellow-700 font-semibold mt-2">$ {formatCurrency(product.price)}</h5>
            </div>
        </div>
    );
}
