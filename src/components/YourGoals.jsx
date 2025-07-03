import { useState } from 'react';
import '../componentStyle.css';
import phone1 from '/images/webPages.jpg';
import phone2 from '/images/telegram_mini_app_store.png';
import phone3 from '/images/laravelNova.png';
import phone4 from '/images/technicallSupport.png';

const phoneImages = [phone1, phone2, phone3, phone4];

export function ServiceSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const accordionData = [
        {
            title: 'Վեբ կայքեր',
            content: <p >
                🔧 գործիքներ, որոնք իրական արդյունքներ են բերում <br/>
                💡 ճկուն դիզայն՝ քո ոճով <br />
                📊 օգտատերերի վարքագծի վերլուծություն <br/>
                🚀 արագություն, որը պահում է այցելուներին<br/>
            </p>
        },
        {
            title: 'Telegram mini app',
            titleTwo: "Կայք և հավելված՝ մեկ հզոր լուծումով",
            content: <p >
                Արդյունքում դու ստանում ես լիարժեք թվային հարթակ՝
                որը համատեղում է կայքի ճկունությունն ու Telegram-ի հզորությունը՝
                որպեսզի կարողանաս
                <br/>
                🛒 վաճառել<br/>
                📞 կապ հաստատել<br/>
                🚀 առաջ մղվել
            </p>
        },
        {
            title: 'Կառավարում և վերլուծություններ',
            titleTwo: "Դու ստանում ես ամբողջական գործիքակազմ՝",
            content: <p>
                🎯 Կառավարիր ամեն ինչ՝ միևնույն հարթակից
                Ապրանքներ, էջեր, պատվերներ, օգտատերեր՝ ամեն ինչ մեկ կենտրոնացված ադմինից։<br/>
                📊 Տես՝ ինչ է իրականում կատարվում
                Վերլուծիր այցելությունները, հաճախորդների վարքագիծը և արդյունքները՝ իրական ժամանակում։<br/>

                🧠 Հասկացիր՝ ինչ են ուզում օգտատերերդ
                Ճանաչիր նախասիրությունները, հետևիր գործողություններին և պատրաստիր ճիշտ առաջարկներ։


            </p>
        },
        {
            title: 'Տեխնիկական աջակցություն',
            content: <p>
                Չկա հավելյալ ծախս՝ տեխնիկական սպասարկման կամ կոդ գրելու համար։ Պարզապես օգտագործիր, և ամեն ինչ կաշխատի։
                <br/>

                📞 Աջակցություն միշտ ձեռքդ տակ
                Մեր թիմը պատրաստ է օգնել ցանկացած հարցում՝ օրվա ցանկացած պահին։
            </p>
        }
    ];

    return (
        <section className="service-section">
            <div className="service-content">
                <div className="service-text">
                    <div className="service-accordion">
                        {accordionData.map((item, index) => (
                            <div key={index} className="accordion-wrapper">
                                <div className="accordion-item" onClick={() => toggleAccordion(index)}>
                                    <span>{item.title}</span>
                                    <span className="plus">{openIndex === index ? '−' : '+'}</span>
                                </div>
                                {openIndex === index && (
                                    <div>
                                        <div className="accordion-content">
                                            <h4>{item.titleTwo}</h4>
                                            {item.content}
                                        </div>
                                    </div>

                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="service-phones">
                    <img
                        src={openIndex !== null ? phoneImages[openIndex] : phoneImages[0]}
                        alt={`Phone ${openIndex !== null ? openIndex + 1 : 1}`}
                        className="phone"
                    />
                </div>
            </div>
        </section>
    );
}
