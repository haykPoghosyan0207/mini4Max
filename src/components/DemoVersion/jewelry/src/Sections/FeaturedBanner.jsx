import React from 'react';
import { Link } from 'react-router-dom';

export default function FeaturedBanner() {
    return (
        <section
            className="relative w-full h-[400px] bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: "url('./images/background.jpg')" }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-30 z-0"></div>

            {/* Content on image */}
            <div className="relative z-10 text-center px-4 text-white max-w-2xl">
                <h2 className="text-2xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                    Թող քո ոճը խոսի քո փոխարեն
                </h2>
                <p className="text-lg md:text-xl mb-6 drop-shadow">
                    Համադրիր գեղեցկությունը և նորարարությունը՝ յուրահատուկ զարդերի հետ։ Դրսևորիր քո անհատականությունը՝ ամեն օր
                </p>
                <Link
                    to="/shop"
                    className="inline-block px-6 py-3 bg-white text-gray-900 font-semibold rounded-md hover:bg-gray-100 transition"
                >
                    Shop Now
                </Link>
            </div>
        </section>
    );
}
