import { NavLink } from "react-router-dom";


const ContactInfoArea = () => {
    return (
        <section className="contact__help p-relative pt-115 pb-150">
            <div className="contact__shape">
                <img className="dot" src="/assets/img/icon/contact/dot.png" alt="dot" />
                <img className="shape" src="/assets/img/icon/contact/shape.png" alt="shape" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 offset-xl-1">
                        <div className="section__title section__title-3 mb-55">
                            <span >Contact</span>
                            <h2 >Help Center</h2>
                        </div>
                    </div>
                </div>
                <div className="row p-relative">

                    <ContactInfoItem image="headset" title="Customer Support" btn_text="Visit Support Forum" />
                    <ContactInfoItem image="msg" title="Any Questions" btn_text="Contact Support" />

                </div>
            </div>
        </section>
    );
};

export default ContactInfoArea;


const ContactInfoItem = ({ image, title, btn_text }) => {
    return (
        <div className="col-xl-5 col-lg-6 col-md-6 offset-xl-1">
            <div className="contact__help-item white-bg text-center mb-30 wow fadeInLeft" data-wow-delay=".3s">
                <div className="contact__icon mb-35">
                    <img src={`/assets/img/icon/contact/${image}.png`} alt="" />
                </div>
                <div className="contact__text">
                    <h3>{title}</h3>
                    <p>Naff the wireless barney bodge lurgy cuppa cheeky.</p>
                    <NavLink to="/contact" className="z-btn z-btn-border">{btn_text}</NavLink>
                </div>
            </div>
        </div>
    );
};