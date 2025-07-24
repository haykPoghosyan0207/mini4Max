import React from 'react';
import { Link } from 'react-router-dom';

export default function CategoryGrid() {
    const categories = [
        {
            id: 1,
            name: 'Ականջօղեր',
            image: './images/akanjox.jpg',
            link: '/shop?category=Ականջօղեր'
        },
        {
            id: 2,
            name: 'Հավաքածուներ',
            image: './images/havaqatsu.jpg',
            link: '/shop?category=Հավաքածուներ'
        },
        {
            id: 3,
            name: 'Մատանիներ',
            image: './images/matani.jpg',
            link: '/shop?category=Մատանիներ'
        },
        {
            id: 4,
            name: 'Թևնոցներ',
            image: './images/tevnoc.jpg',
            link: '/shop?category=Թևնոցներ'
        },
    ];

    return (
        <section className="bg-[#fefdf8] py-12 px-4 md:px-12">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                    Կատեգորիաներ
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {categories.map((cat) => (
                        <div
                            key={cat.id}
                            className="relative w-full h-64 rounded-lg overflow-hidden shadow-md group"
                        >
                            <img
                                src={cat.image}
                                alt={cat.name}
                                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                            />

                            <div className="absolute inset-0 bg-black bg-opacity-30"></div>

                            {/* Centered Content */}
                            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center z-10 px-4">
                                <h3 className="text-xl md:text-2xl font-semibold drop-shadow mb-3">
                                    {cat.name}
                                </h3>
                                <Link
                                    to={cat.link}
                                    className="px-4 py-2 bg-white text-gray-800 text-sm font-medium rounded hover:bg-gray-100 transition"
                                >
                                    Shop Now
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
