import React, { useEffect, useState } from 'react';
import { useCart } from 'react-use-cart';
import { Link } from 'react-router-dom';

export default function CartPage() {
    const [isMounted, setIsMounted] = useState(false);
    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
        cartTotal,
    } = useCart();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-IN', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(amount);
    };

    if (!isMounted) return null;

    return (
        <div className="px-4 py-10">
            <div className="max-w-6xl mx-auto">
                {totalUniqueItems === 0 ? (
                    <div className="text-center py-16">
                        <h5 className="text-xl font-semibold mb-4">Your cart is empty</h5>
                        <Link
                            to="/shop"
                            className="inline-block bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600 transition"
                        >
                            Continue Shopping
                        </Link>
                    </div>
                ) : (
                    <div className="overflow-x-auto shadow rounded-lg">
                        <table className="min-w-full text-sm">
                            <thead className="bg-yellow-100">
                            <tr>
                                <th className="p-4 text-left">Product</th>
                                <th className="p-4 text-left">Price</th>
                                <th className="p-4 text-left">Qty</th>
                                <th className="p-4 text-left">Total</th>
                                <th className="p-4 text-left">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {items.map((item) => (
                                <tr key={item.id} className="border-t hover:bg-yellow-50">
                                    <td className="p-4 flex items-center gap-4">
                                        <img
                                            src={item.media_urls || '/no-image.png'}
                                            alt={item.title}
                                            className="w-16 h-20 object-cover rounded"
                                        />
                                        <div>
                                            <p className="font-medium">{item.title}</p>
                                        </div>
                                    </td>
                                    <td className="p-4">${formatCurrency(item.price)}</td>
                                    <td className="p-4 flex items-center gap-2">
                                        <button
                                            onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                                            className="bg-gray-200 px-2 rounded"
                                        >
                                            -
                                        </button>
                                        <span>{item.quantity}</span>
                                        <button
                                            onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                                            className="bg-gray-200 px-2 rounded"
                                        >
                                            +
                                        </button>
                                    </td>
                                    <td className="p-4">${formatCurrency(item.price * item.quantity)}</td>
                                    <td className="p-4">
                                        <button
                                            onClick={() => removeItem(item.id)}
                                            className="text-red-500 hover:text-red-700"
                                        >
                                            <i className="fas fa-trash-alt"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>

                        <div
                            className="cart-shopping-wrapper mt-8 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
                            <Link
                                to="/shop"
                                className="bg-yellow-500 text-white px-6 py-3 rounded hover:bg-yellow-600 transition w-full lg:w-auto text-center"
                            >
                                Continue Shopping
                            </Link>

                            <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full md:max-w-sm">
                                <h4 className="text-lg font-bold mb-4">Order Summary</h4>
                                <div className="flex justify-between mb-2">
                                    <span>Subtotal:</span>
                                    <span>${formatCurrency(cartTotal)}</span>
                                </div>
                                <div className="flex justify-between mb-2">
                                    <span>Shipping:</span>
                                    <span>$0.00</span>
                                </div>
                                <div className="flex justify-between font-semibold text-lg">
                                    <span>Total:</span>
                                    <span>${formatCurrency(cartTotal)}</span>
                                </div>
                                <Link
                                    to="/check-out"
                                    className="mt-6 block w-full text-center bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
                                >
                                    Checkout
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}