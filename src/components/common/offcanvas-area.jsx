import { NavLink } from "react-router-dom";
import MobileMenus from "../../layout/header/mobile-menus";

export default function OffcanvasArea({openOffcanvas,onCloseOffcanvas}) {
    return (
        <>
            <section className={`sidebar__area ${openOffcanvas ? "sidebar-opened" : ""}`}>
                <div className="sidebar__wrapper">
                    <div className="sidebar__close">
                        <button onClick={onCloseOffcanvas} className="sidebar__close-btn" id="sidebar__close-btn">
                            <span><i className="fal fa-times"></i></span>
                            <span>close</span>
                        </button>
                    </div>
                    <div className="sidebar__tab">
                        <ul className="nav nav-tabs" id="sidebar-tab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="menu-tab" data-bs-toggle="tab" data-bs-target="#menu" href="#menu" role="tab" aria-controls="menu" aria-selected="true">menu</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="info-tab" data-bs-toggle="tab" data-bs-target="#info" href="#info" role="tab" aria-controls="info" aria-selected="false">info</a>
                            </li>
                        </ul>
                    </div>
                    <div className="sidebar__content">
                        <div className="tab-content" id="sidebar-tab-content">
                            <div className="tab-pane fade show active" id="menu" role="tabpanel" aria-labelledby="menu-tab">
                                <div className="logo mb-40">
                                    <NavLink href="/">
                                        <img src="/assets/img/logo/logo.png" alt="logo" />
                                    </NavLink>
                                </div>
                                {/* mobile menus */}
                                <MobileMenus openOffcanvas={openOffcanvas}/>
                                {/* mobile menus */}
                            </div>
                            <div className="tab-pane fade" id="info" role="tabpanel" aria-labelledby="info-tab">
                                <div className="sidebar__info">
                                    <div className="logo mb-40">
                                        <NavLink href="/">
                                            <img src="/assets/img/logo/logo.png" alt="logo" />
                                        </NavLink>
                                    </div>
                                    <p>We must explain to you how all seds this mistakens idea off denouncing pleasures and praising pain was born and I will give you a completed accounts of the system and expound.</p>
                                    <NavLink href="/contact" className="z-btn z-btn-white">contact us</NavLink>
                                    <div className="sidebar__search">
                                        <form action="#">
                                            <input type="text" placeholder="Your Keywords.." />
                                            <button type="submit"><i className="fal fa-search"></i></button>
                                        </form>
                                    </div>
                                    <div className="sidebar__contact mt-30">
                                        <ul>
                                            <li>
                                                <div className="icon">
                                                    <i className="fal fa-map-marker-alt"></i>
                                                </div>
                                                <div className="text">
                                                    <span>Ave 14th Street, Mirpur 210, San Franciso, USA 3296.</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="fal fa-envelope"></i>
                                                </div>
                                                <div className="text ">
                                                    <span><a href="mailto:support@zibber.com">support@zibber.com</a></span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="fas fa-phone-alt"></i>
                                                </div>
                                                <div className="text">
                                                    <span><a href="tel:(+642)-394-396-432">(+642) 394 396 432</a></span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div onClick={onCloseOffcanvas} className={`body-overlay ${openOffcanvas ? "opened" : ""}`}></div>
        </>
    )
}
