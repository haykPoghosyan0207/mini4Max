import {ServiceSection} from "./YourGoals.jsx";

export default function About() {
    return (
        <div className="about">
            <div className="aboutSectionOne">
                <div className="aboutSectionLeft">
                    <div className="aboutSectionLeftTitle">
                        <h2>Աջակցություն</h2>
                    </div>
                    <div className="aboutSectionLeftImg" style={{
                        backgroundImage: `url(/public/images/technicallSupport.png)`,
                    }}></div>
                </div>
                <div className="aboutSectionRight">
                    <div className="aboutSectionRightTitl">
                        <h2>
                            Կառավարման Համակարգ
                        </h2>
                    </div>
                    <div className="aboutSectionRightImg" style={{
                        backgroundImage: `url(./images/img_4.png)`,
                    }}></div>
                </div>
            </div>
            <div className="aboutSectionTwo">
                <div className="aboutSectionTwoLeft">
                    <div className="aboutSectionTwoLeftTitle">
                        <h2>Եզակի դիզայն</h2>
                    </div>
                    <div className="aboutSectionTwoLeftImg">
                        <img src="./images/img_5.png" alt=""/>
                    </div>
                </div>
                <div className="aboutSectionTwoRight">
                    <div className="aboutSectionTwoRightUp">
                        <div className="aboutSectionTwoRightUpTitle">
                            <h2>Վերլուծություն</h2>
                        </div>
                        <div className="aboutSectionTwoRightUpImg" style={{
                            backgroundImage: "url('./images/img_6.png')",
                        }}>
                        </div>
                    </div>
                    <div className="aboutSectionTwoRightDown">
                        <div className="aboutPhone">
                            <div className="aboutPhoneTitle">
                                Ծանուցումներ
                            </div>
                            <div className="aboutPhoneImg" style={{
                                backgroundImage: "url('./images/img_7.png')",
                            }}></div>
                        </div>
                        <div className="aboutSaleSection">
                            <div className="aboutSaleSectionTitle">
                                <h2>
                                    Վճարային համակարգ
                                </h2>

                            </div>
                            <div className="aboutSaleSectionImg" style={{
                                backgroundImage: "url('./images/img_8.png')",
                            }}></div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
