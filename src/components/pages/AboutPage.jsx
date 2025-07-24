import "./about.css";
import aboutFox from "/images/aboutImgs/aboutFox.png";

export default function AboutPage() {

    const features = [
        {
            img: "/images/aboutImgs/img.png",
            title: "Հուսալիություն",
            desc: "Ապահովում ենք կայուն ու հուսալի աշխատանք առանց խափանումների։",
        },
        {
            img: "/images/aboutImgs/img_6.png",
            title: "Աջակցություն",
            desc: "Օգնություն և տեխնիկական աջակցություն 24/7։",
        },
        {
            img: "/images/aboutImgs/img_2.png",
            title: "Անվտանգություն",
            desc: "Ձեր տվյալներն անվտանգ են մեզ մոտ՝ համապատասխան մեթոդներով։",
        },
        {
            img: "/images/aboutImgs/img_3.png",
            title: "Ինտեգրում",
            desc: "Համալիր լուծումներ՝ ինտեգրվող ձեր բիզնես հոսքերի հետ։",
        },
        {
            img: "/images/aboutImgs/img_4.png",
            title: "Ճկունություն",
            desc: "Լուծումներ, որոնք հարմարվում են ձեր պահանջներին։",
        },
        {
            img: "/images/aboutImgs/img_5.png",
            title: "Աջակցություն",
            desc: "Օգնություն և տեխնիկական աջակցություն 24/7։",
        },

    ];

    return (
        <div className="aboutPageContainer">
            <div className="aboutHeader">
                <div className="aboutHeaderImage">
                    <img src={aboutFox} alt="MiniMax Fox"/>
                </div>
                <div className="aboutHeaderText">
                    <p>
                        MiniMax-ը տեխնոլոգիական ընկերություն է, որը նպատակ ունի դարձնել օնլայն վաճառքը պարզ, հասանելի և
                        արդյունավետ բոլոր տեսակի բիզնեսների համար։ Մենք առաջարկում ենք այնպիսի լուծումներ, որոնք կարող
                        են
                        վերափոխել բիզնեսների ապագան, խնայելով նրանց ժամանակն ու ռեսուրսները:
                    </p>
                </div>
            </div>

            <div className="valuesSection">
                <div className="AboutPageTitle">
                    <h2 className="valuesTitle">Արժեքներ</h2>

                </div>
                <div className="aboutGrid">
                    <div className="aboutCard">
                        <div className="aboutCardText">Հուսալիություն</div>
                        <div className="aboutCardDesc">
                            <p>
                                Մենք ձգտում ենք լինել հուսալի գործընկեր մեր հաճախորդների, մատակարարների եւ աշխատակիցների
                                համար. Մենք կատարում ենք մեր պարտավորությունները և պահում խոստումները ։
                            </p>
                        </div>
                    </div>
                    <div className="aboutCard">
                        <div className="aboutCardText">Որակ</div>
                        <div className="aboutCardDesc">
                            <p> մենք ձգտում ենք կատարելության մեր ցանկացած դրսևորման մեջ։
                            </p>
                        </div>
                    </div>
                    <div className="aboutCard">
                        <div className="aboutCardText">Ճկունություն</div>
                        <div className="aboutCardDesc">
                            <p>
                                արագ արձագանքում ենք շուկայի և արտաքին միջավայրի փոփոխություններին՝ միշտ պատրաստ նոր մարտահրավերների:
                            </p>
                        </div>
                    </div>

                    <div className="aboutCard">
                        <div className="aboutCardText">Հասանելիություն</div>
                        <div className="aboutCardDesc">
                            <p>
                                Մենք բացում ենք նոր հորիզոններ՝ հնարավորություն տալով կիրառել լուծումներ, որոնք նախկինում անհասանելի էին: Մեր ծառայությունները թույլ են տալիս հաղթահարել նախկինում գոյություն ունեցող սահմանափակումները և նոր հեռանկարներ են բացում բիզնեսի, կրթության, տեխնոլոգիաների և առհասարակ կյանքի համար:</p>
                        </div>
                    </div>
                    <div className="aboutCard">
                        <div className="aboutCardText">Կապ֊մեդիատոր</div>
                        <div className="aboutCardDesc"><p>Մեր գլխավոր նպատակն է ակտիվացնել ներքին շուկայի թաքնված ներուժը ՝ օգտագործելով նորագայուն տեխնոլոգիաների հնարավորությունները։</p></div>
                    </div>
                </div>
            </div>

            <section className="smartFeatures">
                {features.map((item, index) => (
                    <div
                        key={index}
                        className={`featureRow ${index % 2 === 1 ? "reverse" : ""}`}
                    >
                        <div
                            className="featureImg"
                        >
                            <img src={item.img} alt=""/>
                        </div>
                        <div className="featureText">
                            <p>{item.desc}</p>
                        </div>
                    </div>
                ))}
            </section>

        </div>
    );
}
