import { NavLink } from "react-router-dom";

export default function HeroBannerThree() {
    return (
        <section className="hero__area p-relative">
            <div className="hero__shape">
                <img className="one" src="/assets/img/icon/slider/03/icon-1.png" alt="icon" />
                <img className="two" src="/assets/img/icon/slider/03/icon-2.png" alt="icon" />
                <img className="three" src="/assets/img/icon/slider/03/icon-3.png" alt="icon" />
                <img className="four" src="/assets/img/icon/slider/03/icon-4.png" alt="icon" />
                <img className="five" src="/assets/img/icon/slider/03/icon-6.png" alt="icon" />
                <img className="six" src="/assets/img/icon/slider/03/icon-7.png" alt="icon" />
            </div>
            <div className="hero__item hero__height d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-5 order-last">
                            <div className="hero__thumb-wrapper ml-100 scene p-relative">
                                <div className="hero__thumb one">
                                    <img className="layer" data-depth="0.2" src="/assets/img/slider/03/slider-1.jpg" alt="slider-thumb" />
                                </div>
                                <div className="hero__thumb two d-none d-md-block d-lg-none d-xl-block">
                                    <img className="layer" data-depth="0.3" src="/assets/img/slider/03/slider-2.jpg" alt="slider-thumb" />
                                </div>
                                <div className="hero__thumb three d-none d-sm-block">
                                    <img className="layer" data-depth="0.4" src="/assets/img/slider/03/slider-3.jpg" alt="slider-thumb" />
                                </div>
                                <div className="hero__thumb four d-none d-md-block d-lg-none d-xl-block">
                                    <img className="layer" data-depth="0.5" src="/assets/img/slider/03/slider-4.jpg" alt="slider-thumb" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7 d-flex align-items-center">
                            <div className="hero__content">
                                <span>Welcome To Zibber.</span>
                                <h1>Get more <br /> Impact Fasted</h1>
                                <p>Tinkety tonk old fruit baking cakes cobblers happy days argy-bargy up the duff excuse my french fanny around.</p>
                                <NavLink to="/about" className="z-btn z-btn-border">See whats New</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
