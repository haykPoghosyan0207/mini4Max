import React, { useEffect, useState } from 'react';
import { useCart } from 'react-use-cart';
import { Link } from 'react-router-dom';
import './CartPage.css';

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
        <div className="cart-container">
            <div className="cart-inner">
                {totalUniqueItems === 0 ? (
                    <div className="cart-empty">
                        <h5>Your cart is empty</h5>
                        <Link to="/shop" className="btn-continue">
                            Continue Shopping
                        </Link>
                    </div>
                ) : (
                    <div className="cart-table-wrapper">
                        <table className="cart-table">
                            <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Total</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {items.map((item) => (
                                <tr key={item.id}>
                                    <td className="product-info">
                                        <img
                                            src={item.media_urls || '/no-image.png'}
                                            alt={item.title}
                                        />
                                        <div>{item.title}</div>
                                    </td>
                                    <td>${formatCurrency(item.price)}</td>
                                    <td className="qty-controls">
                                        <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                                    </td>
                                    <td>${formatCurrency(item.price * item.quantity)}</td>
                                    <td>
                                        <button
                                            className="delete-btn"
                                            onClick={() => removeItem(item.id)}
                                        >
                                            🗑
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>

                        <div className="cart-bottom">
                            <Link to="/shop" className="btn-continue">Continue Shopping</Link>

                            <div className="summary-box">
                                <h4>Order Summary</h4>
                                <div className="summary-row">
                                    <span>Subtotal:</span>
                                    <span>${formatCurrency(cartTotal)}</span>
                                </div>
                                <div className="summary-row">
                                    <span>Shipping:</span>
                                    <span>$0.00</span>
                                </div>
                                <div className="summary-row total">
                                    <span>Total:</span>
                                    <span>${formatCurrency(cartTotal)}</span>
                                </div>
                                <Link to="/check-out" className="btn-checkout">Checkout</Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
