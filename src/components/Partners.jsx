export default function Partners() {
    const partners = [
        {
            name: "Mersedes",
            img: "./images/img_3.png"
        },
        {
            name: "Mersedes",
            img: "./images/img_3.png"
        },
        {
            name: "Mersedes",
            img: "./images/img_3.png"
        },
        {
            name: "Mersedes",
            img: "./images/img_3.png"
        },
        {
            name: "Mersedes",
            img: "./images/img_3.png"
        },
        {
            name: "Mersedes",
            img: "./images/img_3.png"
        },

    ]
    return (
        <div className="partnersContainer">
            <div className="partnersContainerTitle">
                <h2>Մեր Գործընկերները</h2>
            </div>
            <div className="partners">
                {partners.map((partner) => (
                    <div className="partnerItem" key={partner.name}>
                        <img src={partner.img} alt=""/>
                        <p> {partner.name} </p>
                    </div>
                ))}
            </div>
        </div>
    )
}