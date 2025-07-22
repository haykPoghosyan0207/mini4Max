import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import { useWishlist } from '../context/WishlistContext.jsx';
import SearchBox from "./SearchBox";


export default function Header() {
    const location = useLocation();
    const isHome = location.pathname === '/';
    const [isFixed, setIsFixed] = useState(false);
    const [miniCartOpen, setMiniCartOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const { items, cartTotal, removeItem, totalUniqueItems } = useCart();
    const { wishlist } = useWishlist();
    // const { user, token } = useAuth();

    const formatCurrency = (val) => val?.toFixed(2);

    useEffect(() => {
        const handleScroll = () => setIsFixed(window.scrollY > 80);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`w-full z-50 transition-all duration-300 ${isFixed ? 'fixed top-0 bg-[#F5F5DC] shadow-md' : 'relative bg-[#fafdf3]'}`}>
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold text-yellow-500 whitespace-nowrap">
                    Jewelery
                </Link>

                {/* Navigation - Desktop only */}
                <nav className="hidden lg:flex gap-6 text-gray-800 font-medium flex-1 justify-center">
                    <Link to="/" className={location.pathname === '/' ? 'text-yellow-500' : ''}>Home</Link>
                    <Link to="/about" className={location.pathname === '/about' ? 'text-yellow-500' : ''}>About Us</Link>
                    <Link to="/shop" className={location.pathname === '/shop' ? 'text-yellow-500' : ''}>Jewelry</Link>
                    <Link to="/contact" className={location.pathname === '/contact' ? 'text-yellow-500' : ''}>Contact Us</Link>
                </nav>

                {/* Right Section */}
                <div className="flex items-center gap-4">
                    {/* SearchBox - Desktop only */}
                    <div className="hidden lg:block w-64">
                        <SearchBox />
                    </div>
                    <Link to="/" className="text-xl text-gray-700 hover:text-yellow-500" title="Login">
                        <i className="fas fa-user-circle"></i>
                    </Link>

                    {/*/!* Icons *!/*/}
                    {/*{token ? (*/}
                    {/*    <Link to="/dashboard" className="text-xl text-gray-700 hover:text-yellow-500" title="Dashboard">*/}
                    {/*        <i className="fas fa-user-circle"></i>*/}
                    {/*    </Link>*/}
                    {/*) : (*/}
                    {/*    <Link to="/register" className="text-xl text-gray-700 hover:text-yellow-500" title="Login">*/}
                    {/*        <i className="fas fa-user-circle"></i>*/}
                    {/*    </Link>*/}
                    {/*)}*/}

                    <Link to="/wishlist" className="relative text-gray-700 hover:text-yellow-500">
                        <i className="far fa-heart text-xl"></i>
                        {wishlist.length > 0 && (
                            <span className="absolute -top-2 -right-2 text-xs bg-yellow-500 text-white px-1 rounded-full">
                {wishlist.length}
              </span>
                        )}
                    </Link>

                    <button onClick={() => setMiniCartOpen(!miniCartOpen)} className="relative text-gray-700 hover:text-yellow-500">
                        <i className="fas fa-shopping-cart text-xl"></i>
                        {totalUniqueItems > 0 && (
                            <span className="absolute -top-2 -right-2 text-xs bg-yellow-500 text-white px-1 rounded-full">
                {totalUniqueItems}
              </span>
                        )}
                    </button>

                    {/* Burger Menu - After icons */}
                    <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden flex flex-col gap-1">
                        <span className="w-6 h-0.5 bg-gray-700"></span>
                        <span className="w-6 h-0.5 bg-gray-700"></span>
                        <span className="w-6 h-0.5 bg-gray-700"></span>
                    </button>
                </div>
            </div>

            {/* Mini Cart Dropdown */}
            {miniCartOpen && (
                <div className="absolute right-4 top-full mt-2 bg-white shadow-lg border p-4 w-80 z-50">
                    <h3 className="text-lg font-semibold mb-2">Shopping Cart</h3>
                    {totalUniqueItems === 0 ? (
                        <div className="text-center">
                            <p>Your cart is empty</p>
                            <Link to="/shop" onClick={() => setMiniCartOpen(false)} className="mt-3 inline-block px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
                                Continue Shopping
                            </Link>
                        </div>
                    ) : (
                        <>
                            <div className="space-y-3 max-h-60 overflow-y-auto">
                                {items.map(item => (
                                    <div key={item.id} className="flex items-center justify-between border-b pb-2">
                                        <div className="flex items-center space-x-3">
                                            <img src={item.media_urls || '/no-image.png'} alt="product" className="w-12 h-12 object-cover" />
                                            <div>
                                                <p className="text-sm font-medium">{item.title}</p>
                                                <p className="text-sm">{item.quantity} × ${formatCurrency(item.price)}</p>
                                            </div>
                                        </div>
                                        <button onClick={() => removeItem(item.id)} className="text-red-500 hover:text-red-700">
                                            <i className="fas fa-times"></i>
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-4 border-t pt-2 text-right">
                                <p className="font-semibold">Subtotal: ${formatCurrency(cartTotal)}</p>
                            </div>
                            <div className="mt-3 flex justify-between gap-2">
                                <Link to="/cart" onClick={() => setMiniCartOpen(false)} className="flex-1 text-center px-3 py-2 bg-gray-200 rounded hover:bg-gray-300">
                                    View Cart
                                </Link>
                                <Link to="/shop" onClick={() => setMiniCartOpen(false)} className="flex-1 text-center px-3 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
                                    Continue
                                </Link>
                            </div>
                        </>
                    )}
                </div>
            )}

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="lg:hidden px-4 pb-4 bg-white shadow-md">
                    <nav className="flex flex-col gap-2 text-gray-800 font-medium mt-4">
                        <Link to="/" className="block py-1">Home</Link>
                        <Link to="/about" className="block py-1">About Us</Link>
                        <Link to="/shop" className="block py-1">Jewelry</Link>
                        <Link to="/contact" className="block py-1">Contact Us</Link>
                    </nav>

                    <div className="mt-4">
                        <SearchBox />
                    </div>
                </div>
            )}
        </header>
    );
}
