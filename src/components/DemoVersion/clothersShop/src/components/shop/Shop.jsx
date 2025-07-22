import React, { useEffect, useState } from 'react';
import { getProductByCategory } from "../../Services/HttpServices/CategoriesHttpService.js";
import ProductCard from "../../Utils/ProductCard.jsx";
import { useSearchParams, useNavigate } from 'react-router-dom';
import './Shop.css';

export default function Shop() {
    const [allProducts, setAllProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage =4;

    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    const currentFilter = searchParams.get('category') || '';
    const minPrice = searchParams.get('minPrice') || '';
    const maxPrice = searchParams.get('maxPrice') || '';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getProductByCategory();
                const categoriesData = Array.isArray(res?.data?.data) ? res.data.data : [];
                setCategories(categoriesData);

                const products = categoriesData
                    .flatMap((cat) => Array.isArray(cat.products) ? cat.products : [])
                    .filter(p => p && typeof p.id === 'number' && typeof p.name === 'string' && p.name.trim() !== '' && typeof p.price === 'number');

                setAllProducts(products);
                console.log(products)
            } catch (error) {
                console.error('Error fetching products:', error);
                setAllProducts([]);
                setCategories([]);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        let filtered = allProducts;

        if (currentFilter) {
            const category = categories.find(c => c && c.name === currentFilter);
            filtered = category && Array.isArray(category.products)
                ? category.products.filter(p => p && typeof p.id === 'number' && typeof p.name === 'string' && p.name.trim() !== '')
                : [];
        }

        const min = parseFloat(minPrice) || 0;
        const max = parseFloat(maxPrice) || Infinity;

        filtered = filtered.filter(p => p.price >= min && p.price <= max);

        setFilteredProducts(filtered);
        setItemOffset(0);
    }, [currentFilter, minPrice, maxPrice, allProducts, categories]);

    const currentItems = filteredProducts.slice(itemOffset, itemOffset + itemsPerPage);

    const pageCount = Math.ceil(filteredProducts.length / itemsPerPage);

    const updateURL = (params) => setSearchParams(params);

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

    const resetFilters = () => navigate('/shop');

    const handlePageChange = (newOffset) => {
        if (newOffset >= 0 && newOffset < filteredProducts.length) {
            setItemOffset(newOffset);
        }
    };

    return (
        <div className="shop-container">
            <div className="shop-inner">
                <div className="shop-layout">
                    {/* Sidebar */}
                    <div className="shop-sidebar">
                        <h3 className="sidebar-title">Կատեգորիաներ</h3>
                        <ul className="category-list">
                            <li>
                                <button
                                    className={`category-button ${!currentFilter ? 'active' : ''}`}
                                    onClick={() => handleCategoryClick('')}
                                >
                                    Բոլորը
                                </button>
                            </li>
                            {categories.map((cat, i) => (
                                <li key={cat.id || i}>
                                    <button
                                        className={`category-button ${currentFilter === cat.name ? 'active' : ''}`}
                                        onClick={() => handleCategoryClick(cat.name)}
                                    >
                                        {cat.name || 'Unnamed Category'}
                                    </button>
                                </li>
                            ))}
                        </ul>

                        <h3 className="sidebar-title">Գնի ֆիլտր</h3>
                        <div className="price-filter">
                            <input
                                type="number"
                                placeholder="Min"
                                className="price-input"
                                value={minPrice}
                                onChange={(e) => {
                                    const params = new URLSearchParams(searchParams);
                                    if (e.target.value) params.set('minPrice', e.target.value);
                                    else params.delete('minPrice');
                                    updateURL(params);
                                }}
                            />
                            <input
                                type="number"
                                placeholder="Max"
                                className="price-input"
                                value={maxPrice}
                                onChange={(e) => {
                                    const params = new URLSearchParams(searchParams);
                                    if (e.target.value) params.set('maxPrice', e.target.value);
                                    else params.delete('maxPrice');
                                    updateURL(params);
                                }}
                            />
                        </div>
                        <button onClick={handlePriceFilter} className="filter-button">Ֆիլտրել</button>
                        <button onClick={resetFilters} className="reset-button">Մաքրել բոլորը</button>
                    </div>

                    {/* Products */}
                    <div className="shop-products">
                        <div className="product-grid">
                            {currentItems.length > 0 ? (
                                currentItems.map((item, i) => (
                                    <ProductCard key={item.id || `item-${i}`} item={item} />
                                ))
                            ) : (
                                <p>Ապրանքներ չեն գտնվել</p>
                            )}
                        </div>

                        <div className="pagination">
                            {Array.from({ length: pageCount }).map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => handlePageChange(i * itemsPerPage)}
                                    className={`page-button ${itemOffset / itemsPerPage === i ? 'active' : ''}`}
                                >
                                    {i + 1}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
