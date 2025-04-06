import { SiKnowledgebase } from 'react-icons/si';
import { BsTools, BsHeart, BsBag } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

const navData = [
    { id: "share", label: "Share Knowledge", icon: <SiKnowledgebase /> },
    { id: "customer", label: "Customer Service", icon: <BsTools /> },
    { id: "social", label: "Social Media", icon: <BsHeart /> },
    { id: "financial", label: "Financial", icon: <BsBag /> },
];

const tabContentData = [
    { id: "share", title: "Share Knowledge" },
    { id: "customer", title: "Customer Service" },
    { id: "social", title: "Social Media" },
    { id: "financial", title: "Financial" },
];


export default function ServicesThree() {
    return (
        <section className="services__area-3 pt-115 pb-160">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="section-title section__title-3 mb-70">
                            <h2>We Help <br /> Clients Make Profit</h2>
                            <p>We help you weather todays uncertainty through our best team.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="services__nav wow fadeInUp" data-wow-delay=".4s">
                            <ul className="nav nav-pills" id="services-tab" role="tablist">
                                {navData.map((navItem) => (
                                    <li className="nav-item mb-45" key={navItem.id}>
                                        <a
                                            className={`nav-link ${navItem.id === 'share' ? 'active' : ''}`}
                                            id={`${navItem.id}-tab`}
                                            data-bs-toggle="pill"
                                            href={`#${navItem.id}`}
                                            role="tab"
                                            aria-controls={navItem.id}
                                            aria-selected="true"
                                        >
                                            <i>{navItem.icon}</i>
                                            {navItem.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-12">
                        <div className="services__tab grey-bg-18">
                            <div className="tab-content" id="services-content">
                                {tabContentData.map((tabContent) => (
                                    <div
                                        key={tabContent.id}
                                        className={`tab-pane fade ${tabContent.id === 'share' ? 'show active' : ''}`}
                                        id={tabContent.id}
                                        role="tabpanel"
                                        aria-labelledby={`${tabContent.id}-tab`}
                                    >
                                        <ServiceItem title={tabContent.title} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}



const ServiceItem = ({ title }) => {
    return (
        <div className="services__nav-content pt-90 pb-90">
            <div className="row">
                <div className="col-xl-5 col-lg-6">
                    <div className="services__thumb text-lg-right m-img">
                        <img src="/assets/img/services/services-1.png" alt="" />
                    </div>
                </div>
                <div className="col-xl-7 col-lg-6">
                    <div className="services__content-3 pl-70 pr-70">
                        <h3>{title}</h3>
                        <p>The bees knees cockup loo cracking goal hotpot bits and bobs a load of old tosh bubble and squeak arse over tit twit, excuse my French bevvy Eaton argy-bargy amongst codswallop.</p>
                        <div className="services__icon-wrapper d-md-flex mb-35">
                            <div className="services__icon-item d-flex mr-60 mb-30">
                                <div className="icon mr-20">
                                    <img src="/assets/img/icon/services/services-9.png" alt="" />
                                </div>
                                <div className="text">
                                    <h3>Acquisitions Finance Consulting</h3>
                                </div>
                            </div>
                            <div className="services__icon-item d-flex mb-30">
                                <div className="icon mr-20">
                                    <img src="/assets/img/icon/services/services-10.png" alt="" />
                                </div>
                                <div className="text">
                                    <h3>Private Placement Consulting</h3>
                                </div>
                            </div>
                        </div>
                        <NavLink to="/contact" className="z-btn">Get Started</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};
