import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../../context/WishlistContext.jsx';
import { useCart } from 'react-use-cart';
import './Wishlist.css';

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
        <div ref={miniCartRef} className="wishlist-wrapper">
            <div className="wishlist-container">
                <h2 className="wishlist-heading">My Wishlist</h2>

                {wishlistCount === 0 ? (
                    <div className="wishlist-empty">
                        <h5>Your wishlist is empty</h5>
                        <Link to="/shop" className="continue-shopping">
                            Continue Shopping
                        </Link>
                    </div>
                ) : (
                    <div className="wishlist-table">
                        <table>
                            <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th></th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            {wishlist.map((item, idx) => (
                                <tr key={idx}>
                                    <td data-label="Product">
                                        <div className="wishlist-product">
                                            <img
                                                src={item.media_urls || '/no-image.png'}
                                                alt={item.title}
                                                className="product-image"
                                            />
                                            <div>
                                                <p className="product-title">{item.title}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td data-label="Price">${formatCurrency(item.price)}</td>
                                    <td data-label="Add to Cart">
                                        <button
                                            onClick={() => {
                                                addItem(item);
                                                handleMiniCartDropDown();
                                            }}
                                            className="add-to-cart"
                                        >
                                            Add to Cart
                                        </button>
                                    </td>
                                    <td data-label="Remove">
                                        <button
                                            onClick={() => removeFromWishlist(item.id)}
                                            className="remove-button"
                                            aria-label="Remove from wishlist"
                                        >
                                            <i className="fas fa-trash-alt"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>

                        <div className="wishlist-footer">
                            <Link to="/shop" className="continue-shopping">
                                Continue Shopping
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
