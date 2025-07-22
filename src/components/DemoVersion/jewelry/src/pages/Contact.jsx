import React from "react";

export default function Contact() {
    return (
        <section className="min-h-screen bg-white flex items-center justify-center px-4 py-12">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl grid md:grid-cols-2 overflow-hidden">
                {/* Left: Contact Info */}
                <div className="bg-[#fefdf3] p-8 flex flex-col justify-center">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Կապ մեզ հետ</h2>
                    <p className="text-gray-600 mb-6">
                        Ունե՞ք հարցեր կամ առաջարկներ։ Լրացրեք ձևը կամ կապ հաստատեք հետևյալ միջոցով։
                    </p>
                    <div className="text-gray-700 space-y-4">
                        <div>
                            <i className="fas fa-envelope mr-2 text-yellow-600"></i>
                            hello@example.com
                        </div>
                        <div>
                            <i className="fas fa-phone mr-2 text-yellow-600"></i>
                            +374 00 00 00 00
                        </div>
                        <div>
                            <i className="fas fa-map-marker-alt mr-2 text-yellow-600"></i>
                            Երևան, Հայաստան
                        </div>
                    </div>
                </div>

                {/* Right: Contact Form */}
                <form className="p-8 bg-white flex flex-col justify-center">
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Անուն</label>
                        <input
                            type="text"
                            placeholder="Ձեր անունը"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Էլ․ փոստ</label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 font-medium mb-2">Հաղորդագրություն</label>
                        <textarea
                            rows="4"
                            placeholder="Գրեք ձեր հաղորդագրությունը"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition"
                    >
                        Ուղարկել
                    </button>
                </form>
            </div>
        </section>
    );
}
