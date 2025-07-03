import "./services.css";
import "./servicesTwo.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useState } from "react";

export default function Services() {
    const servicesMap = [
        {
            img: "./images/servicesImg/img.png",
            title: "Առցանց ներկայություն  24/7",
        },
        {
            img: "./images/servicesImg/img_1.png",
            title: "Ավտոմատ վաճառքներ և պատվերների կառավարում",
        },
        {
            img: "./images/servicesImg/img_2.png",
            title: "Մրցակցային առավելություն",
        },
        {
            img: "./images/servicesImg/img_3.png",
            title: "Հաճախորդների հետ կապի ուժեղացում",
        }
    ];

    const valuesMap = [
        {
            img: "🖌️",
            title: "Գեղեցիկ և ճկուն դիզայն",
            desc: "Ձեր կայքի դիզայնը ոչ միայն գեղեցիկ է, այլ նաև լիովին հարմարեցվող՝ ըստ ձեր բրենդի։ Ընտրեք պատրաստի շաբլոններից կամ կառուցեք ամբողջությամբ անհատական տեսք՝ արագ և առանց կոդ գրելու։"
        },
        {
            img: "🧭",
            title: "Ուժեղ ադմին համակարգ",
            desc: "Բիզնեսի կառավարման ամբողջական կենտրոն՝ մեկ ադմին համակարգում։ Կառավարեք էջերը, ապրանքները, պատվերները, օգտատերերին և նույնիսկ մարքեթինգային գործիքները՝ պարզ ու հասանելի միջերեսով։"
        },
        {
            img: "📂",
            title: "Կատեգորիաների ստեղծում",
            desc: "Ստեղծեք և խմբավորեք բաժիններ ու կատեգորիաներ՝ ձեր ապրանքների կամ ծառայությունների կառուցվածքը դարձնելով հստակ և նավիգացիոն առումով հեշտ:"
        },
        {
            img: "📈",
            title: "Մարքեթինգային գործիքներ",
            desc: "Մենք բացում ենք նոր հորիզոններ՝ հնարավորություն տալով կիրառել լուծումներ, որոնք նախկինում անհասանելի էին:"
        },
        {
            img: "📋",
            title: "Պատվերների կառավարում",
            desc: "Հետևեք բոլոր պատվերներին իրական ժամանակում, կարգավիճակի փոփոխությամբ և ավտոմատ ծանուցումներով։ Ձեր հաճախորդները միշտ տեղեկացված են։"
        },
        {
            img: "📋",
            title: "Պատվերների կառավարում",
            desc: "Հետևեք բոլոր պատվերներին իրական ժամանակում, կարգավիճակի փոփոխությամբ և ավտոմատ ծանուցումներով։ Ձեր հաճախորդները միշտ տեղեկացված են։"
        }
    ];

    const valuesMapTwo = [
        {
            title: "Օգտատերերի հետ չաթ համակարգ",
            desc: "Մեր գլխավոր նպատակն է ակտիվացնել ներքին շուկայի թաքնված ներուժը ՝ օգտագործելով նորագայուն տեխնոլոգիաների հնարավորությունները։"
        },
        {
            title: "Ծանուցումների համակարգ",
            desc: "Մեր գլխավոր նպատակն է ակտիվացնել ներքին շուկայի թաքնված ներուժը ՝ օգտագործելով նորագայուն տեխնոլոգիաների հնարավորությունները։"
        },
        {
            title: "Կտրոնների համակարգ",
            desc: "Ստեղծեք զեղչային կտրոններ կամ ակցիաներ և տարածեք դրանք՝ ավելացնելով վաճառքը։ Հնարավոր է նաև ուղարկել կտրոններ Telegram մինի հավելվածի միջոցով։"
        },
        {
            title: "Վճարային համակարգ",
            desc: "Ինտեգրված վճարման գործիքներ՝ ապահով, արագ և բազմակողմանի վճարման հնարավորությամբ։ Ընդունեք վճարումներ տեղում՝ առանց երրորդ կողմերի։"
        },
        {
            title: "Մարքեթինգային գործիքներ",
            desc: "Վերլուծություն, օգտատերերի վարքագծի հետևում, վերաթիրախավորում և ավելին։ Ձեր կայքը պարզապես վեբ էջ չէ՝ այն նաև վաճառում է։"
        },
        {
            title: "Միասնական լուծում՝ բիզնեսի բոլոր պահանջների համար",
            desc: "Մեր գլխավոր նպատակն է ակտիվացնել ներքին շուկայի թաքնված ներուժը ՝ օգտագործելով նորագայուն տեխնոլոգիաների հնարավորությունները։"
        }
    ];

    const [expandedIndex, setExpandedIndex] = useState(null);
    const [expandedIndexTwo, setExpandedIndexTwo] = useState(null);

    const toggleExpand = (index) => {
        setExpandedIndex(prev => prev === index ? null : index);
    };

    const toggleExpandTwo = (index) => {
        setExpandedIndexTwo(prev => prev === index ? null : index);
    };

    return (
        <div className="services">
            <div className="servicesHeader">
                <div className="headerTitle">
                    <h2>ՎԵԲ ԿԱՅՔԵՐԻ ԱՆՀՐԱԺԵՇՏՈՒԹՅՈՒՆԸ ԲԻԶՆԵՍՆԵՐԻ ՀԱՄԱՐ</h2>
                </div>
                <div className="headerMain">
                    <div className="mainLeft">
                        {servicesMap.map((item, i) => (
                            <div className="servicesItem" key={i}>
                                <div className="itemImg">
                                    <img src={item.img} alt=""/>
                                </div>
                                <p className="itemTitle">{item.title}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mainRight">
                        <div className="mainImg"></div>
                    </div>
                </div>
            </div>

            {/* Desktop Version */}
            <div className="servicesContainer desktop">
                <div className="servicesCardsContainer">
                    {valuesMap.map((i, index) => (
                        <div
                            className={`servicesCard ${expandedIndex === index ? 'expanded' : ''}`}
                            key={index}
                        >
                            <div className="cardTop">
                                <h1>{i.title}</h1>
                                <button className="expandBtn" onClick={() => toggleExpand(index)}>
                                    {expandedIndex === index ? "−" : "+"}
                                </button>
                            </div>
                            {expandedIndex === index && (
                                <div className="cardContent">
                                    <p className="cardDescContent">{i.desc}</p>
                                    {/*<div className="cardIMg"><p>{i.img}</p></div>*/}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="servicesCardsContainerTwo">
                    {valuesMapTwo.map((i, index) => (
                        <div
                            className={`servicesCard ${expandedIndexTwo === index ? 'expanded' : ''}`}
                            key={index}
                        >
                            <div className="cardTop">
                                <h1>{i.title}</h1>
                                <button className="expandBtn" onClick={() => toggleExpandTwo(index)}>
                                    {expandedIndexTwo === index ? "−" : "+"}
                                </button>
                            </div>
                            {expandedIndexTwo === index && (
                                <div className="cardContent">
                                    <p className="cardDescContent">{i.desc}</p>
                                    <div className="cardIMg"><p style={{
                                        fontSize: '45px',
                                    }}> {i.img}</p></div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className="servicesMobileSlider">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 4000 }}
                >
                    {[...valuesMap, ...valuesMapTwo].map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="servicesCard expanded">
                                <div className="cardTop">
                                    <h1>{item.title}</h1>
                                </div>
                                <div className="cardContent">
                                    <p>{item.desc}</p>
                                    <div className="cardIMg"><p>{item.img}</p></div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}


// <div className="services">
    //     <div className="servicesHeader">
    //         <div className="headerTitle">
    //             <h2>
    //                 ՎԵԲ ԿԱՅՔԵՐԻ ԱՆՀՐԱԺԵՇՏՈՒԹՅՈՒՆԸ ԲԻԶՆԵՍՆԵՐԻ ՀԱՄԱՐ
    //             </h2>
    //         </div>
    //         <div className="headerMain">
    //             <div className="mainLeft">
    //                 {servicesMap.map((item, i) => (
    //                     <div className="servicesItem" key={i}>
    //                         <div className="itemImg">
    //                             <img src={item.img} alt="" />
    //                         </div>
    //                         <p className="itemTitle">{item.title}</p>
    //                     </div>
    //                 ))}
    //             </div>
    //             <div className="mainRight">
    //                 <div className="mainImg"></div>
    //             </div>
    //         </div>
    //     </div>
    //
    //     <div className="servicesMain">
    //         <div className="mainTitle">
    //             <h2>MINI4MAXI – ԼԱՎԱԳՈՒՅՆ ԼՈՒԾՈՒՄԸ ՁԵՐ ԲԻԶՆԵՍԻ ՀԱՄԱՐ</h2>
    //         </div>
    //
    //         <Swiper
    //             modules={[Autoplay, Navigation, Pagination]}
    //             spaceBetween={20}
    //             slidesPerView={5}
    //             autoplay={{ delay: 10000, disableOnInteraction: false }}
    //             navigation
    //             pagination={{ clickable: true }}
    //             loop={true}
    //             breakpoints={{
    //                 320: { slidesPerView: 1 },
    //                 768: { slidesPerView: 2 },
    //                 1024: { slidesPerView: 3 }
    //             }}
    //             className="valuesSlider"
    //         >
    //             {valuesMap.map((item, i) => (
    //                 <SwiperSlide key={i}   >
    //                     <div className="valueCard"
    //                          onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
    //                     >
    //                         <div className="cardImg">{item.img}</div>
    //                         <div className="cardText"> <p>{item.title}</p></div>
    //                         <div className="cardDesc">
    //                             <p>{item.desc}</p>
    //                         </div>
    //                     </div>
    //                 </SwiperSlide>
    //             ))}
    //         </Swiper>
    //     </div>
    //
    //     <div className="sectionThree">
    //         <h2>Միասնական լուծում բիզնեսի բոլոր պահանջների համար</h2>
    //         <div className="sectionItemList">
    //             <div className="sectionItem">
    //                 <h2>Արագ գործարկում </h2>
    //                 <p>ձեր կայքը պատրաստ կլինի մի քանի 3ից 4 օրում</p>
    //             </div>
    //             <div className="sectionItem">
    //                 <h2>Հարմարեցվող դիզայն </h2>
    //                 <p>փոխեք տեսքը ձեր բրենդին համապատասխան</p>
    //             </div>
    //             <div className="sectionItem">
    //                 <h2>Եզակի հնարավորություններ՝</h2>
    //                 <p>առանց հավելյալ ծախսերի</p>
    //             </div>
    //         </div>
    //         <h2>Միացեք հիմա և դարձեք ձեր ոլորտի առաջատարն առանց ավելորդ բարդությունների</h2>
    //     </div>
    // </div>
