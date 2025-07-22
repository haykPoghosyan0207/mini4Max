import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../Services/HttpServices/ProductHttpService';
import { useCart } from 'react-use-cart';
import { useWishlist } from '../context/WishlistContext.jsx';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

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
                media_urls: pageData.media_urls?.length
                    ? pageData.media_urls
                    : [imageUrl],
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
                    media_urls: pageData.media_urls?.length
                        ? pageData.media_urls
                        : [imageUrl],
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

    if (loading) return <p className="text-center py-10">Բեռնվում է...</p>;

    if (error) {
        return (
            <div className="text-center py-10">
                <h2 className="text-xl font-bold text-red-500">Սխալ ապրանքի բեռնելիս</h2>
                <p>{error}</p>
                <a href="/products" className="text-blue-600 underline">Վերադառնալ ապրանքների էջ</a>
            </div>
        );
    }

    if (!pageData) return null;

    return (
        <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
                <img
                    src={imageUrl}
                    alt={pageData.name}
                    className="w-full h-auto rounded-xl shadow"
                />
            </div>

            <div className="space-y-6 relative">
                <h1 className="text-3xl font-bold text-gray-800">{pageData.name}</h1>

                <button
                    onClick={handleWishlist}
                    disabled={addingToWishlist}
                    className="absolute top-0 right-0 p-2 text-2xl"
                >
                    {isInWishlist
                        ? <FaHeart className="text-red-500" />
                        : <FaRegHeart className="text-gray-500 hover:text-red-400" />
                    }
                </button>

                <div className="text-2xl text-yellow-600 font-semibold">
                    ${pageData.price * quantity}
                    {quantity > 1 && (
                        <span className="text-sm text-gray-500 ml-2">
                            ({quantity} × ${pageData.price})
                        </span>
                    )}
                </div>

                <p className="text-gray-700">{pageData.description}</p>

                <div className="flex items-center gap-4">
                    <span className="font-medium">Քանակ:</span>
                    <button onClick={decreaseQuantity} className="px-3 py-1 bg-gray-200 rounded">-</button>
                    <span className="px-2">{quantity}</span>
                    <button onClick={increaseQuantity} className="px-3 py-1 bg-gray-200 rounded">+</button>
                </div>

                <div className="flex gap-4 mt-6">
                    <button
                        onClick={handleAddToCart}
                        disabled={addingToCart}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded shadow"
                    >
                        {addingToCart ? 'Ավելացվում է...' : 'Ավելացնել զամբյուղում'}
                    </button>
                </div>
            </div>
        </div>
    );
}
