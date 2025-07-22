import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-[#F5F5DC] text-gray-700 py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
                    {/* Logo and Description */}
                    <div className="md:w-1/4">
                        <h2 className="text-2xl font-bold text-yellow-600 mb-4">Jewelery</h2>
                        <p className="text-gray-600">
                            Որակյալ զարդեր Ձեր ոճի համար։
                            Հավերժ գեղեցկություն և փայլ։
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div className="md:w-1/4">
                        <h3 className="text-xl font-semibold mb-4">Էջեր</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="/shop" className="hover:text-yellow-600 transition-colors duration-300">
                                    Jewelery
                                </a>
                            </li>
                            <li>
                                <a href="/about" className="hover:text-yellow-600 transition-colors duration-300">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className="hover:text-yellow-600 transition-colors duration-300">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="md:w-1/4">
                        <h3 className="text-xl font-semibold mb-4">Կոնտակտներ</h3>
                        <ul>
                            <li>📍 Երևան, Հայաստան</li>
                            <li>
                                📞{' '}
                                <a href="tel:+37499123456" className="hover:text-yellow-600 transition-colors duration-300">
                                    +374 99 123456
                                </a>
                            </li>
                            <li>
                                ✉️{' '}
                                <a href="mailto:info@zareri.com" className="hover:text-yellow-600 transition-colors duration-300">
                                    info@.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div className="md:w-1/4">
                        <h3 className="text-xl font-semibold mb-4">Հետևեք մեզ</h3>
                        <div className="flex space-x-6">
                            <a
                                href="https://instagram.com/yourinstagram"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-yellow-600 transition-colors duration-300"
                                aria-label="Instagram"
                            >
                                <i className="fab fa-instagram text-2xl"></i>
                            </a>
                            <a
                                href="https://facebook.com/yourfacebook"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-yellow-600 transition-colors duration-300"
                                aria-label="Facebook"
                            >
                                <i className="fab fa-facebook-f text-2xl"></i>
                            </a>
                            <a
                                href="https://linkedin.com/in/yourlinkedin"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-yellow-600 transition-colors duration-300"
                                aria-label="LinkedIn"
                            >
                                <i className="fab fa-linkedin-in text-2xl"></i>
                            </a>
                            <a
                                href="https://twitter.com/yourtwitter"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-yellow-600 transition-colors duration-300"
                                aria-label="Twitter"
                            >
                                <i className="fab fa-twitter text-2xl"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-10 border-t border-gray-300 pt-6 text-center text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} Mini4Max. Բոլոր իրավունքները պաշտպանված են։
                </div>
            </div>
        </footer>
    );
}
