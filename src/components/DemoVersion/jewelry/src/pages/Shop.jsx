import React, { useEffect, useState } from 'react';
import { getProductByCategory } from '../Services/HttpServices/CategoriesHttpService';
import ProductCard from '../components/ProductCart.jsx';
import { useSearchParams, useNavigate } from 'react-router-dom';

export default function Shop() {
    const [allProducts, setAllProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 4;

    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    const currentFilter = searchParams.get('category') || '';
    const minPrice = searchParams.get('minPrice') || '';
    const maxPrice = searchParams.get('maxPrice') || '';

    useEffect(() => {
        const fetchData = async () => {
            const res = await getProductByCategory();
            const categories = res?.data?.data || [];
            setCategories(categories);
            const products = categories.flatMap((cat) => cat.products);
            setAllProducts(products);
        };
        fetchData();
    }, []);

    useEffect(() => {
        let filtered = allProducts;
        if (currentFilter) {
            const category = categories.find((c) => c.name === currentFilter);
            if (category) filtered = category.products;
        }
        const min = parseFloat(minPrice) || 0;
        const max = parseFloat(maxPrice) || Infinity;
        filtered = filtered.filter((p) => p.price >= min && p.price <= max);
        setFilteredProducts(filtered);
        setItemOffset(0);
    }, [currentFilter, minPrice, maxPrice, allProducts]);

    const currentItems = filteredProducts.slice(itemOffset, itemOffset + itemsPerPage);
    const pageCount = Math.ceil(filteredProducts.length / itemsPerPage);

    const updateURL = (params) => {
        setSearchParams(params);
    };

    const handleCategoryClick = (name) => {
        const params = new URLSearchParams(searchParams);
        if (name) params.set('category', name);
        else params.delete('category');
        updateURL(params);
    };

    const handlePriceFilter = () => {
        const params = new URLSearchParams(searchParams);
        if (minPrice) params.set('minPrice', minPrice);
        else params.delete('minPrice');
        if (maxPrice) params.set('maxPrice', maxPrice);
        else params.delete('maxPrice');
        updateURL(params);
    };

    const resetFilters = () => {
        navigate('/shop');
    };

    return (
        <div className="py-12 px-4 bg-[#fefdf3] min-h-screen">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-10 text-center">Մեր Ապրանքները</h1>
                <div className="flex flex-col md:flex-row gap-10">

                    {/* Sidebar */}
                    <aside className="w-full md:w-1/4 bg-white rounded-xl shadow p-6 space-y-10">
                        <div>
                            <h3 className="font-semibold text-lg mb-4 text-yellow-700">Կատեգորիաներ</h3>
                            <ul className="space-y-2">
                                <li>
                                    <button
                                        className={`block w-full text-left px-4 py-2 rounded-md transition ${
                                            !currentFilter ? 'bg-yellow-200 font-bold' : 'hover:bg-yellow-100'
                                        }`}
                                        onClick={() => handleCategoryClick('')}
                                    >
                                        Բոլորը
                                    </button>
                                </li>
                                {categories.map((cat, i) => (
                                    <li key={i}>
                                        <button
                                            className={`block w-full text-left px-4 py-2 rounded-md transition ${
                                                currentFilter === cat.name
                                                    ? 'bg-yellow-200 font-bold'
                                                    : 'hover:bg-yellow-100'
                                            }`}
                                            onClick={() => handleCategoryClick(cat.name)}
                                        >
                                            {cat.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold text-lg mb-4 text-yellow-700">Գնի Ֆիլտր</h3>
                            <div className="flex gap-2 mb-3">
                                <input
                                    type="number"
                                    placeholder="Min"
                                    className="border border-gray-300 px-3 py-2 w-1/2 rounded-md text-sm"
                                    value={minPrice}
                                    onChange={(e) => updateURL(new URLSearchParams({ ...Object.fromEntries(searchParams), minPrice: e.target.value }))}
                                />
                                <input
                                    type="number"
                                    placeholder="Max"
                                    className="border border-gray-300 px-3 py-2 w-1/2 rounded-md text-sm"
                                    value={maxPrice}
                                    onChange={(e) => updateURL(new URLSearchParams({ ...Object.fromEntries(searchParams), maxPrice: e.target.value }))}
                                />
                            </div>
                            <div className="flex gap-3">
                                <button
                                    onClick={handlePriceFilter}
                                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md text-sm"
                                >
                                    Ֆիլտրել
                                </button>
                                <button
                                    onClick={resetFilters}
                                    className="text-sm underline text-red-600"
                                >
                                    Մաքրել բոլորը
                                </button>
                            </div>
                        </div>
                    </aside>

                    {/* Products */}
                    <main className="w-full md:w-3/4">
                        {currentItems.length === 0 ? (
                            <p className="text-center text-gray-500">Չկան համապատասխան արդյունքներ։</p>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {currentItems.map((item, i) => (
                                    <ProductCard key={i} item={{ products: item }} />
                                ))}
                            </div>
                        )}

                        {/* Pagination */}
                        <div className="mt-10 flex justify-center flex-wrap gap-2">
                            {Array.from({ length: pageCount }).map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setItemOffset(i * itemsPerPage)}
                                    className={`px-4 py-2 rounded-md border border-gray-300 text-sm ${
                                        itemOffset / itemsPerPage === i
                                            ? 'bg-black text-white'
                                            : 'hover:bg-gray-100'
                                    }`}
                                >
                                    {i + 1}
                                </button>
                            ))}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}
