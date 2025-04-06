import { NavLink } from "react-router-dom";
import NavMenus from "./nav-menus";
import useSticky from "../../hooks/use-sticky";
import { useState } from "react";
import OffcanvasArea from "../../components/common/offcanvas-area";

export default function HeaderThree({
  hStyleFour,
  btn_text = "Get a Quote",
  btn_class = "z-btn-3",
}) {
  const { stickyMenu } = useSticky();
  const [openOffcanvas, setOpenOffcanvas] = useState(false);
  return (
    <>
      <header>
        <div className="header__area p-relative header__transparent">
          <div className="header__shape p-absolute">
            <img src="/assets/img/icon/slider/03/icon-5.png" alt="" />
          </div>
          <div
            id="header__sticky"
            className={`${
              stickyMenu
                ? `sticky header__bottom header__bottom-2`
                : `header__bottom header__bottom-2`
            } ${hStyleFour ? hStyleFour : ""}`}
          >
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="logo-3">
                    <NavLink to="/">
                      <img
                        src="/assets/img/logo/logo-gradient.png"
                        alt="logo"
                      />
                    </NavLink>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6">
                  <div className="header__bottom-right d-flex justify-content-end align-items-center">
                    <div className="main-menu main-menu-3 menu_three_wrapper">
                      {/* nav menus */}
                      <NavMenus />
                      {/* nav menus */}
                    </div>
                    <div className="header__btn d-none d-sm-block d-xl-block ml-50">
                      <NavLink to="/contact" className={`z-btn ${btn_class}`}>
                        {btn_text}
                      </NavLink>
                    </div>
                    <div className="sidebar__menu d-lg-none">
                      <div
                        className="sidebar-toggle-btn sidebar-toggle-btn-3"
                        id="sidebar-toggle"
                        onClick={() => setOpenOffcanvas(true)}
                      >
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
  );
}
