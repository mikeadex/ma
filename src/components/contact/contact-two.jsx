import ContactForm from "../form/contact-form";


export default function ContactTwo() {
    return (
        <section className="contact__area">
            <div className="container-fluid p-0">
                <div className="row g-0">
                    <div className="col-xl-12">
                        <div className="contact__map">
                            <iframe title='contact' src="https://maps.google.com/maps?hl=en&amp;q=Dhaka+()&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;output=embed"></iframe>
                            <div className="contact__wrapper d-md-flex justify-content-between wow fadeInUp" data-wow-delay=".3s">
                                <div className="contact__info mr-100">
                                    <h3>Get in touch</h3>
                                    <ul>
                                        <li>
                                            <h4>Address</h4>
                                            <p>24 Parking Plaza, Suite 506 <br /> Ardmore, SA 19004</p>
                                        </li>
                                        <li>
                                            <h4>call us</h4>
                                            <p><a href="tel:(404)-888-123-456">(404) 888 123 456</a></p>
                                            <p><a href="tel:(204)-888-234-674">(204) 888 234 674</a></p>
                                        </li>
                                        <li>
                                            <h4>Email Address</h4>
                                            <p><a href="mailto:Info@example.com">Info@example.com</a></p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="contact__form">
                                    <ContactForm/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
