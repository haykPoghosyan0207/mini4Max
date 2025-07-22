import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    // Close menu on link click (mobile)
    const closeMenu = () => {
        setMenuActive(false);
    };

    return (
        <nav className="navbar-wrapper">
            <div className="navbar-left">
                <h1 className="navbar-logo">MyShop</h1>
                <div className={`navbar-links ${menuActive ? "active" : ""}`}>
                    <Link to="/home" onClick={closeMenu}>Home</Link>
                    <Link to="/about" onClick={closeMenu}>About</Link>
                    <Link to="/shop" onClick={closeMenu}>Suis</Link>
                    <Link to="/contacts" onClick={closeMenu}>Contact</Link>
                    <Link to="/news" onClick={closeMenu}>News</Link>
                </div>
            </div>

            <div className="navbar-right">
                <Link to="/wishlist" onClick={closeMenu}>
                    <FaHeart className="navbar-icon" title="Ընտրյալներ" />
                </Link>
                <Link to="/cartPage" onClick={closeMenu}>
                    <FaShoppingCart className="navbar-icon" title="Զամբյուղ" />
                </Link>
                <Link to="/profile" onClick={closeMenu}>
                    <FaUser className="navbar-icon" title="Օգտատեր" />
                </Link>
                <div className="burger" onClick={toggleMenu} aria-label="Toggle menu" role="button" tabIndex={0}>
                    {menuActive ? <FaTimes /> : <FaBars />}
                </div>
            </div>
        </nav>
    );
}
