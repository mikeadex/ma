import { NavLink } from "react-router-dom";
import { BiMap } from "react-icons/bi";
import {
  FaEnvelope,
  FaFacebookF,
  FaPhoneAlt,
  FaTwitter,
  FaVimeoV,
} from "react-icons/fa";

const FooterOne = () => {
  return (
    <footer>
      <div className="footer__area grey-bg pt-100">
        <div className="footer__top pb-45">
          <div className="container">
            <div className="row">
              <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
                <div className="footer__widget mb-45">
                  <div className="footer__widget-title">
                    <h4>Company</h4>
                  </div>
                  <div className="footer__widget-content">
                    <div className="footer__links">
                      <ul>
                        <li>
                          <a href="#">About Us</a>
                        </li>
                        <li>
                          <a href="#">Testimonials</a>
                        </li>
                        <li>
                          <a href="#">Consulting</a>
                        </li>
                        <li>
                          <a href="#">Partners</a>
                        </li>
                        <li>
                          <a href="#">Contact Us</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 offset-xl-1 col-lg-2 offset-lg-1 col-md-4 col-sm-6">
                <div
                  className="footer__widget mb-45 wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <div className="footer__widget-title">
                    <h4>Resources</h4>
                  </div>
                  <div className="footer__widget-content">
                    <div className="footer__links">
                      <ul>
                        <li>
                          <a href="#">Customers</a>
                        </li>
                        <li>
                          <a href="#">News</a>
                        </li>
                        <li>
                          <a href="#">Learning Center</a>
                        </li>
                        <li>
                          <a href="#">Help desk</a>
                        </li>
                        <li>
                          <a href="#">Support</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 offset-xl-1 col-lg-2 offset-lg-1 col-md-4 col-sm-6">
                <div className="footer__widget mb-45">
                  <div className="footer__widget-title">
                    <h4>Use Cases</h4>
                  </div>
                  <div className="footer__widget-content">
                    <div className="footer__links">
                      <ul>
                        <li>
                          <a href="#">Change Management</a>
                        </li>
                        <li>
                          <a href="#">Project Management</a>
                        </li>
                        <li>
                          <a href="#">Tools</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 offset-xl-1 col-lg-3 offset-lg-1 col-md-4 col-sm-6">
                <div className="footer__widget mb-45">
                  <div className="footer__widget-title">
                    <h4>Information</h4>
                  </div>
                  <div className="footer__widget-content">
                    <div className="footer__info">
                      <ul>
                        <li>
                          <div className="icon">
                            <i>
                              {" "}
                              <BiMap />{" "}
                            </i>
                          </div>
                          <div className="text">
                            <span>London, United Kingdom</span>
                          </div>
                        </li>
                        <li>
                          <div className="icon theme-color ">
                            <i>
                              {" "}
                              <FaEnvelope />{" "}
                            </i>
                          </div>
                          <div className="text theme-color ">
                            <span>
                              <a href="mailto:support@example.com">
                                support@example.com
                              </a>
                            </span>
                          </div>
                        </li>
                        <li>
                          <div className="icon theme-color">
                            <i>
                              <FaPhoneAlt />{" "}
                            </i>
                          </div>
                          <div className="text theme-color">
                            <span>
                              <a href="tel:(+642)-394-396-432">
                                (+642) 394 396 432
                              </a>
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__copyright">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="footer__copyright-text">
                  <p>
                    Copyright © {new Date().getFullYear()} All Rights Reserved{" "}
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="footer__social theme-social f-right">
                  <ul>
                    <li>
                      <a href="#">
                        <i>
                          <FaFacebookF />
                        </i>
                        <i>
                          <FaFacebookF />
                        </i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i>
                          <FaTwitter />{" "}
                        </i>
                        <i>
                          <FaTwitter />{" "}
                        </i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i>
                          <FaVimeoV />{" "}
                        </i>
                        <i>
                          <FaVimeoV />{" "}
                        </i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
