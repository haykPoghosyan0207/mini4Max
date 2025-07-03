export default function ContactsSection() {
    return (
        <div className="contactSection">
            {/* Brand Part */}
            <div className="contactsLeft">
                <div className="contactsLeftTitle">
                    <h2>Mini4Max</h2>
                </div>
                <div className="contactsLeftDescription">
                    Minimum <br/> Investment for<br/>Maximum Success
                </div>
            </div>
            <div className="contactsCenter" style={ {
                backgroundImage : "url(public/images/icon.png)",
                backgroundSize: "contain",
            }}>
            </div>
            <div className="contactsRight">

                <div className="contactRightTwo">
                    <div className="sectionTitle">Կապ մեզ հետ</div>
                    <div className="contactDetail">
                        <i className="fa fa-phone" /> +374 00 000 000
                    </div>
                    <div className="contactDetail">
                        <i className="fa fa-envelope" /> info@mini4max.com
                    </div>
                    <div className="contactIcons">
                        <i className="fa fa-facebook" />
                        <i className="fa fa-instagram" />
                        <i className="fa fa-linkedin" />
                    </div>

                </div>

            </div>
        </div>
    );
}
