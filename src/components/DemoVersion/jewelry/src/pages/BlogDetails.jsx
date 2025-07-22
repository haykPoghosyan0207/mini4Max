import React from 'react';
import { useLocation } from 'react-router-dom';

export default function BlogDetails() {
    const location = useLocation();
    const { title, image, description } = location.state || {};

    if (!title || !description) {
        return <div className="text-center py-10">Բլոգը հասանելի չէ։</div>;
    }

    return (
        <section className="max-w-3xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">{title}</h1>
            <img src={image || '/no-image.jpg'} alt={title} className="w-full h-96 object-cover rounded mb-6" />
            <p className="text-gray-700 leading-relaxed">{description}</p>
        </section>
    );
}
