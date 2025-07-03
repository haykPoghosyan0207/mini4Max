import "../componentStyle.css";

export default function PricePlan() {
    const pricePlansMap = [
        {
            title: "Սկսնակ (ամսական) ",
            desk: [
                "Անսահմանափակ էջերի քանակ",
                "Անհատական դիզայն",
                "Անվճար հոստինգ",
                "Աջակցություն 24/7",
                "Մարքեթինգային գործիքներ",
                "Ֆունկցիոնալ ապահովածություն"
            ],
            price: "25,000֏",
            color: "linear-gradient(180deg, #00D26A, #00A896)",
        },
        {
            title: "Կիսամյա (6 ամիս) ",
            desk: [
                "Անսահմանափակ էջերի քանակ",
                "Անհատական դիզայն",
                "Անվճար հոստինգ",
                "Աջակցություն 24/7",
                "Մարքեթինգային գործիքներ",
                "Ֆունկցիոնալ ապահովածություն"
            ],
            price: "135,000 ֏",
            color: "linear-gradient(180deg, #3A8DFF, #2563EB)"
        },
        {
            title: "Տարեկան (12 ամիս)",
            desk: [
                "Անսահմանափակ էջերի քանակ",
                "Անհատական դիզայն",
                "Անվճար հոստինգ",
                "Աջակցություն 24/7",
                "Մարքեթինգային գործիքներ",
                "Ֆունկցիոնալ ապահովածություն"
            ],
            price: "250,000֏",
            color: "linear-gradient(180deg, #A66CFF, #8338EC)"
        },
        {
            title: "VIP Սեփականություն",
            desk: [
                "Անսահմանափակ էջերի քանակ",
                "Անհատական դիզայն",
                "Անվճար հոստինգ",
                "Աջակցություն 24/7",
                "Մարքեթինգային գործիքներ",
                "Ֆունկցիոնալ ապահովածություն",
                "3 տարի հետո կայքի սեփականություն"

            ],
            price: "55,000/36 ԱՄԻՍ  ֏",
            color: " linear-gradient(180deg, #FFD54F, #FFA000)"
        },
    ];

    return (
        <div className="price-plans">
            {pricePlansMap.map((item, index) => (
                <div key={index} className="plansCard" style={{
                    background: item.color,
                }}>
                    <div className="cardHeader">
                        <p>{item.title}</p>
                    </div>
                    <div className="cardMain">
                        <ul className="planList">
                            {item.desk.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>
                        <div className="planPrice">{item.price}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}
