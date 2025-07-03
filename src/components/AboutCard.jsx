import "../componentStyle.css"

export function AboutCard(props){
    return (
        <div className="aboutCard">

            <div className="aboutCardImage">

            </div>
            <div className="aboutCardTitle">
                <div className="aboutCardTitleText">{props.title}</div>
                <div className="test" style={{display: "flex", justifyContent: "space-between",
                }}>
                    <svg>{props.img}</svg>
                </div>

            </div>
            <div className="aboutCardDescription">
                {props.description}
            </div>
        </div>
    )
}