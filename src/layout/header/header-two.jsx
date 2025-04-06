import { NavLink } from "react-router-dom";
import NavMenus from "./nav-menus";
import useSticky from "../../hooks/use-sticky";
import { useState } from "react";
import OffcanvasArea from "../../components/common/offcanvas-area";


export default function HeaderTwo() {
    const { stickyMenu } = useSticky();
    const [openOffcanvas, setOpenOffcanvas] = useState(false);
    return (
        <>
            <header>
                <div className="header__area p-relative header__transparent">
                    <div id="header__sticky" className={stickyMenu ? 'sticky header__bottom header__bottom-2' : 'header__bottom header__bottom-2'}>
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
                                        <div className="header__btn d-none d-sm-block d-xl-block ml-50">
                                            <NavLink to="/contact" className="z-btn z-btn-white z-btn-white-2">Get a Quote</NavLink>
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
                </div>
            </header>


            {/* offcanvas area */}
            <OffcanvasArea openOffcanvas={openOffcanvas} onCloseOffcanvas={() => setOpenOffcanvas(false)} />
            {/* offcanvas area */}
        </>
    )
}
