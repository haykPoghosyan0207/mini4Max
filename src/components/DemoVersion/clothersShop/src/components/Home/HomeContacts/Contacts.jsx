import React from "react";
import "./contacts.css";

export default function Contacts() {
    return (
        <section className="contacts-section">
            <div className="contacts-container">
                {/* Left Side */}
                <div className="contacts-left">
                    <img
                        src="./images/homeImages/contactsImg.jpg"
                        alt="Tailoring"
                        className="contacts-image"
                    />

                    {/*<iframe*/}
                    {/*    className="contacts-map"*/}
                    {/*    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.709309336167!2d-73.98623958459393!3d40.75162064336652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af3d20f9c9%3A0x2d591ca9b0d2e929!2s350%205th%20Ave%2C%20New%20York%2C%20NY%2010118%2C%20USA!5e0!3m2!1sen!2s!4v1710000000000!5m2!1sen!2s"*/}
                    {/*    allowFullScreen=""*/}
                    {/*    loading="lazy"*/}
                    {/*    title="Google Map"*/}
                    {/*></iframe>*/}
                </div>

                {/* Right Side */}
                <div className="contacts-right">
                    <h2 className="contacts-title">CONTACT INFO</h2>
                    <p className="contacts-text">
                        Have a question? Our team is always ready to help. Feel free and
                        come to us anytime, we are glad to see you at our studio.
                    </p>
                    <div className="contacts-details">
                        <p>📍 2277 Lorem Ave, San Diego, CA 22553</p>
                        <p>🕒 Monday – Friday: 10 am - 10 pm</p>
                        <p>🕒 Sunday: 11 am - 9 pm</p>
                        <p>📞 123 - 456 - 7890</p>
                    </div>
                </div>
            </div>

            {/* Socials */}
            <div className="contacts-socials">
                <div>
                    <span className="social-icon">f</span>
                    Find us on Facebook
                </div>
                <div>
                    <span className="social-icon">x</span>
                    Follow Us on X
                </div>
                <div>
                    <span className="social-icon">📸</span>
                    Follow Us on Instagram
                </div>
            </div>
        </section>
    );
}
