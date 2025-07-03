import { useState } from 'react';
import "../componentStyle.css"
import {Link} from "react-router-dom";
export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className="navbar">
            <div className="icon" style={{ display: 'flex', gap: '4px' }}>
                <h2 className="navbarIconMini">Mini</h2>
                <h2 className="navbarIconFor">4</h2>
                <h2 className="navbarIconMax">Max</h2>
            </div>

            {/* Բուրգերը՝ մոբայլի համար */}
            <div className="burger" onClick={toggleMenu}>
                ☰
            </div>

            <div className={`nav ${isOpen ? "active" : ""}`}>
                <ul className="list">
                    <li ><Link to="/" >Գլխավոր</Link> </li>
                    <li> <Link to="/aboutPage">Մեր մասին</Link></li>
                    <li>  <Link to="/services">Ծառայություններ</Link></li>
                    <li>  <Link to="/blog">Թրենդներ</Link></li>
                    <li><a href=""> +65462164</a> </li>

                </ul>
            </div>
        </div>
    );
}

export default Navbar;
