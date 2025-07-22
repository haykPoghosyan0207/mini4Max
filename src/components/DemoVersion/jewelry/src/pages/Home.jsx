
import React from 'react'
import Hero from "../Sections/Hero.jsx";
import CategoryGrid from "../Sections/CategorySection.jsx";
import TrendingProduct from "../Sections/TrendingProducts.jsx";
import FeaturedBanner from "../Sections/FeaturedBanner.jsx";
import BlogList from "../Sections/BlogList.jsx";
// import VisitUs from "../Sections/VisitUs";
import BestProducts from "../Sections/BestProducts.jsx";
// import Gift from "../Sections/Gift";
// import Instagram from "../Sections/Instagram";

export default function Home() {
    return (
        <div >
            <Hero/>
            <CategoryGrid/>
            <TrendingProduct/>
            <FeaturedBanner/>
            {/*<VisitUs/>*/}
            <BestProducts/>
            <BlogList/>
            {/*<Gift/>*/}
            {/*<Instagram/>*/}
        </div>
    )
}
