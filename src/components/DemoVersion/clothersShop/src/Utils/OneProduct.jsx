import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { getProductById } from '../Services/HttpServices/ProductHttpService';
import {getProductById} from "../Services/HttpServices/ProductsHttpService.js";
import { useCart } from 'react-use-cart';
import { useWishlist } from '../context/WishlistContext.jsx';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import './OneProduct.css';

export default function ProductPage() {
    const { id: slug } = useParams();
    const [pageData, setPageData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);
    const [addingToCart, setAddingToCart] = useState(false);
    const [addingToWishlist, setAddingToWishlist] = useState(false);

    const { addItem } = useCart();
    const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

    useEffect(() => {
        const fetchProductData = async () => {
            try {
                setLoading(true);
                const data = await getProductById(slug);
                setPageData(data);
            } catch (err) {
                setError(err.message || 'Ապրանքը գտնված չէ');
            } finally {
                setLoading(false);
            }
        };

        if (slug) fetchProductData();
    }, [slug]);

    const imageUrl = pageData?.media_urls?.[0] || '/no-image.png';
    const isInWishlist = wishlist.some(item => item.id === pageData?.id);

    const handleAddToCart = async () => {
        if (!pageData?.id) return;
        setAddingToCart(true);

        try {
            await addItem({
                id: pageData.id.toString(),
                name: pageData.name,
                price: Number(pageData.price),
                media_urls: pageData.media_urls?.length ? pageData.media_urls : [imageUrl],
                quantity,
            });
        } catch (e) {
            console.error('Error adding to cart:', e);
        } finally {
            setAddingToCart(false);
        }
    };

    const handleWishlist = async () => {
        if (!pageData?.id) return;
        setAddingToWishlist(true);

        try {
            if (isInWishlist) {
                await removeFromWishlist(pageData.id);
            } else {
                await addToWishlist({
                    id: pageData.id,
                    name: pageData.name,
                    price: pageData.price,
                    media_urls: pageData.media_urls?.length ? pageData.media_urls : [imageUrl],
                });
            }
        } catch (e) {
            console.error('Error updating wishlist:', e);
        } finally {
            setAddingToWishlist(false);
        }
    };

    const increaseQuantity = () => setQuantity(q => q + 1);
    const decreaseQuantity = () => setQuantity(q => (q > 1 ? q - 1 : 1));

    if (loading) return <p className="product-page-loading">Բեռնվում է...</p>;

    if (error) {
        return (
            <div className="product-page-error">
                <h2>Սխալ ապրանքի բեռնելիս</h2>
                <p>{error}</p>
                <a href="/products">Վերադառնալ ապրանքների էջ</a>
            </div>
        );
    }

    if (!pageData) return null;

    return (
        <div className="product-page-wrapper">
            <div className="product-page-image-section">
                <img src={imageUrl} alt={pageData.name} className="product-page-main-image" />
            </div>

            <div className="product-page-info-section">
                <h1 className="product-page-title">{pageData.name}</h1>

                <button onClick={handleWishlist} disabled={addingToWishlist} className="product-page-wishlist-btn">
                    {isInWishlist ? <FaHeart className="wishlist-icon-active" /> : <FaRegHeart className="wishlist-icon" />}
                </button>

                <div className="product-page-price">
                    ${pageData.price * quantity}
                    {quantity > 1 && (
                        <span className="product-page-multiplier">
                            ({quantity} × ${pageData.price})
                        </span>
                    )}
                </div>

                <p className="product-page-description">{pageData.description}</p>

                <div className="product-page-quantity">
                    <span>Քանակ:</span>
                    <button onClick={decreaseQuantity}>-</button>
                    <span>{quantity}</span>
                    <button onClick={increaseQuantity}>+</button>
                </div>

                <div className="product-page-actions">
                    <button onClick={handleAddToCart} disabled={addingToCart} className="product-page-cart-btn">
                        {addingToCart ? 'Ավելացվում է...' : 'Ավելացնել զամբյուղում'}
                    </button>
                </div>
            </div>
        </div>
    );
}
