import { Link, NavLink } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaPinterestP, FaPhoneAlt, FaEnvelope, FaSearch, FaLinkedinIn } from 'react-icons/fa';
import NavMenus from './nav-menus';
import useSticky from '../../hooks/use-sticky';
import { useState } from 'react';
import OffcanvasArea from '../../components/common/offcanvas-area';

export default function HeaderOne() {
    const {stickyMenu} = useSticky();
    const [openOffcanvas, setOpenOffcanvas] = useState(false);
    return (
        <>
            <header>
                <div className="header__area p-relative header__transparent">
                    <div className="header__top d-none d-md-block">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-xl-6 col-lg-5 col-md-4">
                                    <div className="header__social">
                                        <ul>
                                            <li><a href="#"><i ><FaFacebookF /></i> </a></li>
                                            <li><a href="#"><i ><FaTwitter /> </i></a> </li>
                                            <li><a href="#"><i ><FaLinkedinIn /></i></a></li>
                                            <li><a href="#"><i > <FaPinterestP /> </i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-7 col-md-8">
                                    <div className="header__info f-right">
                                        <ul>
                                            <li>
                                                <a href="tel:(+468)-254-762-443">
                                                    <i > <FaPhoneAlt /> </i>
                                                    (+468) 254 762 443
                                                </a>
                                            </li>
                                            <li>
                                                <a href="mailto:info@consulting.com">
                                                    <i > <FaEnvelope /> </i>
                                                    info@consulting.com
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="search-toggle">
                                                    <i > <FaSearch /> </i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="header__sticky" className={stickyMenu ? "sticky header__bottom" : "header__bottom"}>
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                                    <div className="logo">
                                        <NavLink to="/">
                                            <img src="/assets/img/logo/logo.png" alt="logo" />
                                        </NavLink>
                                    </div>
                                    <div className="logo-gradient">
                                        <NavLink to="/">
                                            <img src="/assets/img/logo/logo-gradient.png" alt="logo" />
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6">
                                    <div className="header__bottom-right d-flex justify-content-end align-items-center">
                                        <div className="main-menu menu_wrapper_one">
                                            {/* nav menus */}
                                            <NavMenus />
                                            {/* nav menus */}
                                        </div>
                                        <div className="header__btn d-none d-sm-block d-lg-none d-xl-block ml-50">
                                            <Link to="/contact" className="z-btn z-btn-white">Get a Quote</Link>
                                        </div>
                                        <div className="sidebar__menu d-lg-none">
                                            <div onClick={() => setOpenOffcanvas(true)} className="sidebar-toggle-btn" id="sidebar-toggle">
                                                <span className="line"></span>
                                                <span className="line"></span>
                                                <span className="line"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header__search-wrapper">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <form action="#">
                                        <input type="text" placeholder="Your Keywords" />
                                        <button type="button"><i > <FaSearch /> </i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="body-overlay-2"></div>
                </div>
            </header>

            {/* offcanvas area */}
            <OffcanvasArea openOffcanvas={openOffcanvas} onCloseOffcanvas={() => setOpenOffcanvas(false)} />
            {/* offcanvas area */}
        </>
    )
}
