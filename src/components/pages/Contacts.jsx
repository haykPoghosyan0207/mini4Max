import "./contacts.css"

export default function Contacts() {
    return (
        <div className="contacts">
            <div className="contactsHeader">
                <h2>Մենք այստեղ ենք ձեզ օգնելու համար</h2>
                <div className="contactsContainer">
                    <div className="contactItem">
                        <img src="public/images/ContactsImg/img.png" alt=""/>
                        +374 77 00000000000
                    </div>
                    <div className="contactItem">
                        <img src="public/images/ContactsImg/img_3.png" alt=""/>
                        info@mini4max.com
                    </div>
                    <div className="contactItem">
                        <img src="public/images/ContactsImg/img_2.png" alt=""/>
                        Երևան, Հայաստան
                    </div>
                </div>
            </div>

            {/*<form className="contactForm">*/}
            {/*    <input type="text" placeholder="Ձեր անունը, ազգանունը" />*/}
            {/*    <input type="email" placeholder="Էլ․ հասցեն" />*/}
            {/*    <textarea placeholder="Ձեր հաղորդագրությունը" rows="5"></textarea>*/}
            {/*    <button type="submit">Ուղարկել</button>*/}
            {/*</form>*/}
        </div>
    );
}
