import SectionStyleOne from "../Helpers/SectionStyleOne";
import ViewMoreTitle from "../Helpers/ViewMoreTitle";
import Layout from "../Partials/Layout";
import Banner from "./Banner";
import CampaignCountDown from "./CampaignCountDown";
import ProductsAds from "./ProductsAds";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import AddWishListButton from "../Wishlist/AddWishListButton.jsx";
import { getProductByCategoryId } from "../../Services/HttpServices/CategoriesHttpService.js";
import { environment } from "../../environment.dev.js";
import AddToCartButton from "../Cart/AddToCartButton.jsx";

export default function Home() {
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        async function productsResponse() {
            const response = await getProductByCategoryId(environment.appId);
            setProductData(response.data.data[0].products);
        }

        productsResponse();
    }, []);

    return (
        <>
            <Layout>
                <div className="btn w-5 h-5 "></div>
                <Banner className="banner-wrapper mb-[60px]" />
                <SectionStyleOne
                    categoryTitle="Բջջային և պլանշետ"
                    sectionTitle="Լավագույն ապրանքներ"
                    seeMoreUrl="/all-products"
                    className="category-products mb-[60px]"
                />

                <ProductsAds
                    sectionHeight="sm:h-[295px] h-full"
                    className="products-ads-section mb-[60px]"
                />

                <ViewMoreTitle
                    className="top-selling-product mb-[60px]"
                    seeMoreUrl="/all-products"
                    categoryTitle="Ամենավաճառվող ապրանքներ"
                >
                    <div className="grid grid-cols-2 lg:grid-cols-2 xl:gap-[30px] gap-5">
                        {productData.slice(0, 4).map((data, index) => (
                            <div
                                key={index}
                                data-aos="fade-left"
                                className="product-row-card-style-one w-full h-auto bg-white group relative overflow-hidden cursor-pointer rounded-lg shadow-md hover:shadow-lg transition"
                            >
                                <div className="flex flex-col w-full h-full lg:p-[20px] sm:p-3 p-2">
                                    <div
                                        className="w-full h-[250px] mb-4 rounded-md"
                                        style={{
                                            backgroundImage: `url(${data.media_urls[0]})`,
                                            backgroundRepeat: "no-repeat",
                                            backgroundSize: "cover",
                                            backgroundPosition: "center center",
                                        }}
                                    ></div>
                                    <div className="flex flex-col justify-start items-start w-full px-2">
                                        <Link to={`/single-product/${data.id}`}>
                                            <p className="title mb-2 text-[16px] font-semibold text-qblack leading-[22px] line-clamp-2 hover:text-blue-600">
                                                {data.name}
                                            </p>
                                        </Link>
                                        <div className="price mb-2">
                                            <div className="main-price text-qgray font-semibold text-[18px]">
                                                {data.price} ֏
                                            </div>
                                        </div>
                                        <AddToCartButton product={data} className="px-7 py-5"/>
                                    </div>
                                </div>

                                {/* Quick access կոճակներ */}
                                <div className="quick-access-btns flex flex-col space-y-4 absolute group-hover:right-4 -right-10 top-[30px] transition-all duration-300 ease-in-out">
                                    <div className="flex justify-center items-center bg-primarygray rounded">
                                        <AddWishListButton productId={data.id} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </ViewMoreTitle>

                <CampaignCountDown className="mb-[60px]" lastDate="2025-10-04 4:00:00" />
            </Layout>
        </>
    );
}
