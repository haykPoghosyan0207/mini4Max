import React, { useEffect, useRef, useState } from 'react';
import { useCart } from 'react-use-cart';
import { useWishlist } from '../context/WishlistContext.jsx';
import { Link } from 'react-router-dom';
import './ProductCard.css';

export default React.memo(function ProductCard({ item }) {
    console.log('ProductCard item:', item);

    const [miniCartDropDown, setMiniCartDropDown] = useState(false);
    const miniCartRef = useRef(null);
    const { addItem } = useCart();
    const { addToWishlist, wishlist } = useWishlist();

    const cartProduct = {
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.media_urls?.[0] || '/default-image.jpg',
        description: item.description || 'No description available',
        ...item,
    };

    console.log('cartProduct:', cartProduct);

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

    return (
        <div
            ref={miniCartRef}
            className="product-card"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1500"
        >
            <div className="product-top">
                <div className="product-image-container">
                    <img
                        src={cartProduct.image}
                        alt={item.name}
                        className="product-image"
                    />

                    {item.sold_out && (
                        <div className="sold-out-overlay">
                            <Link to="/check-out" className="sold-out-button">
                                Sold Out
                            </Link>
                        </div>
                    )}
                </div>

                <div className="action-buttons right-aligned">
                    <button
                        onClick={() => {
                            addItem(cartProduct);
                            handleMiniCartDropDown();
                        }}
                        className="icon-button"
                    >
                        <i className="fas fa-cart-plus"></i>
                    </button>

                    <Link to={`/product/${item.id}`} className="icon-button">
                        <i className="fas fa-eye"></i>
                    </Link>

                    <button
                        onClick={() => {
                            addToWishlist(cartProduct);
                        }}
                        className="icon-button"
                    >
                        <i
                            className={
                                isInWishlist(item.id)
                                    ? 'fa-solid fa-heart wishlist-icon-active'
                                    : 'fa-regular fa-heart wishlist-icon'
                            }
                        ></i>
                    </button>
                </div>
            </div>

            <div className="product-info vertical">
                <Link to={`/product/${item.id}`} className="product-title">
                    {item.name}
                </Link>
                <p className="product-description">
                    {item.description || 'No description available'}
                </p>
                <h5 className="product-price">$ {formatCurrency(item.price)}</h5>
            </div>
        </div>

    );
});