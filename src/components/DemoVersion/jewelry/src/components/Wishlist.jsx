import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext.jsx';
import { useCart } from 'react-use-cart';

export default function Wishlist() {
    const { wishlistCount, wishlist, removeFromWishlist } = useWishlist();
    const { addItem } = useCart();
    const [miniCartOpen, setMiniCartOpen] = useState(false);
    const miniCartRef = useRef(null);

    const handleMiniCartDropDown = () => {
        setMiniCartOpen(prev => !prev);
        document.body.classList.add('minicart-open');
        document.getElementById('mini-cart-dropdown')?.classList.add('open');
    };

    useEffect(() => {
        if (!miniCartOpen) return;

        const handleClickOutside = (event) => {
            if (miniCartRef.current && !miniCartRef.current.contains(event.target)) {
                setMiniCartOpen(false);
                document.body.classList.remove('minicart-open');
                document.getElementById('mini-cart-dropdown')?.classList.remove('open');
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [miniCartOpen]);

    const formatCurrency = (amount) =>
        new Intl.NumberFormat('en-IN', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(amount);

    return (
        <div ref={miniCartRef} className="w-full px-4 py-8">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl font-bold mb-6">My Wishlist</h2>

                {wishlistCount === 0 ? (
                    <div className="text-center py-10">
                        <h5 className="text-lg font-medium">Your wishlist is empty</h5>
                        <Link
                            to="/shop"
                            className="mt-4 inline-block bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600 transition"
                        >
                            Continue Shopping
                        </Link>
                    </div>
                ) : (
                    <div className="shadow border rounded-lg">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-yellow-100">
                            <tr>
                                <th className="p-4">Product</th>
                                <th className="p-4">Price</th>
                                <th className="p-4"></th>
                                <th className="p-4"></th>
                            </tr>
                            </thead>
                            <tbody>
                            {wishlist.map((item, idx) => (
                                <tr key={idx} className="border-t hover:bg-yellow-50 transition">
                                    <td className="p-4">
                                        <div className="flex items-center gap-4">
                                            <img
                                                src={item.media_urls || '/no-image.png'}
                                                alt={item.title}
                                                className="w-16 h-20 object-cover rounded"
                                            />
                                            <div>
                                                <p className="font-medium">{item.title}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        ${formatCurrency(item.price)}
                                    </td>
                                    <td className="p-4">
                                        <button
                                            onClick={() => {
                                                addItem(item);
                                                handleMiniCartDropDown();
                                            }}
                                            className="bg-yellow-500 text-white px-4 py-1.5 rounded hover:bg-yellow-600"
                                        >
                                            Add to Cart
                                        </button>
                                    </td>
                                    <td className="p-4">
                                        <button
                                            onClick={() => removeFromWishlist(item.id)}
                                            className="text-red-500 hover:text-red-700"
                                        >
                                            <i className="fas fa-trash-alt"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>

                        <div className="text-center my-8">
                            <Link
                                to="/shop"
                                className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600 transition"
                            >
                                Continue Shopping
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
