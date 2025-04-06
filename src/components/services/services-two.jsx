import { CgArrowLongRight } from "react-icons/cg";
import { FaCheck } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const serviceData = [
  {
    image: "/assets/img/icon/services/services-1.png",
    title: "Share Knowledge",
    subtitle: "Data Tracking",
  },
  {
    image: "/assets/img/icon/services/services-2.png",
    title: "Meet New Friends",
    subtitle: "User Experience",
  },
  {
    image: "/assets/img/icon/services/services-3.png",
    title: "Customer Service",
    subtitle: "App Design",
  },
  {
    image: "/assets/img/icon/services/services-4.png",
    title: "Strategic Advice",
    subtitle: "Press Releases",
  },
];

export default function ServicesTwo() {
  return (
    <section
      className="services__area-2 mt--120 pt-270 pb-140 p-relative"
      style={{
        background: `url(/assets/img/bg/wave-bg-2.png)`,
        backgroundPosition: "bottom",
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div className="row g-0">
          {serviceData.map((service, index) => (
            <ServiceItem
              key={index}
              image={service.image}
              title={service.title}
              subtitle={service.subtitle}
            />
          ))}
        </div>
        <div className="about__area-2 pt-130">
          <div className="row">
            <div className="col-xl-7 col-lg-6">
              <div className="about__thumb-2 p-relative m-img">
                <img src="/assets/img/about/about-2.png" alt="" />
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="about__content">
                <div className="section__title section__title-3 mb-25">
                  <h2>Startup & Early Consulting Business Package</h2>
                </div>
                <p>
                  We help you weather todays uncertainty through our best team
                  intelligence and needs.
                </p>
                <div className="about__list">
                  <ul>
                    <li>
                      <span>
                        <i>
                          <FaCheck />
                        </i>
                        Innovative ideas
                      </span>
                    </li>
                    <li>
                      <span>
                        <i>
                          <FaCheck />
                        </i>
                        Professional assistance
                      </span>
                    </li>
                    <li>
                      <span>
                        <i>
                          <FaCheck />
                        </i>
                        Financial advisory
                      </span>
                    </li>
                  </ul>
                </div>
                <NavLink to="/about" className="z-btn">
                  What we do
                  <i>
                    <CgArrowLongRight />
                  </i>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const ServiceItem = ({ image, title, subtitle }) => {
  return (
    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
      <div className="services__item services__item-2 mb-30 transition-3 white-bg">
        <div className="services__icon mb-35">
          <img
            src={image}
            alt="services"
          />
        </div>
        <div className="services__content services__content-2">
          <h3>
            <NavLink to="/services-details">{title}</NavLink>
          </h3>
          <p>{subtitle}</p>
        </div>
      </div>
    </div>
  );
};
