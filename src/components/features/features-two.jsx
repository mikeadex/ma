import { CgArrowLongRight } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import { BiLock } from "react-icons/bi";
import { FaLightbulb, FaRibbon } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";

const featureData = [
  { icon: <FaLightbulb />, title: "Share Knowledge" },
  { icon: <IoDocumentTextOutline />, title: "Amazing Works" },
  { icon: <FaRibbon />, title: "Meet new Friends" },
  { icon: <BiLock />, title: "Portfolio Expert" },
];

const FeaturesTwo = () => {
  return (
    <section className="features__area pt-115 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-6">
            <div className="features__content-left">
              <div className="section__title section__title-h2 mb-25">
                <span>Design Accordlogy</span>
                <h2>
                  Enrich <br /> your design
                </h2>
              </div>
              <p>
                Do one plastered chinwag only a quid squiffy bugger all mate,
                the little rotter horse play.
              </p>
              <NavLink to="/about" className="z-btn">
                What we do
                <i>
                  <CgArrowLongRight />
                </i>
              </NavLink>
            </div>
          </div>
          <div className="col-xl-6 offset-xl-1 col-lg-6">
            <div className="features__content-right">
              <div className="row">
                {featureData.map((feature, index) => (
                  <div
                    className="col-xl-6 col-lg-6 col-md-6 col-sm-6"
                    key={index}
                  >
                    <FeatureItem icon={feature.icon} title={feature.title} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesTwo;

const FeatureItem = ({ icon, title }) => {
  return (
    <div className="features__item features__item-2 white-bg fix mb-30">
      <div
        className="features__thumb-2"
        style={{
          background: `url(/assets/img/features/02/features-1.jpg)`,
        }}
      ></div>
      <div className="features__content-2">
        <div className="features__icon features__icon-2">
          <i>{icon}</i>
        </div>
        <h3>{title}</h3>
        <p>He nicked it Jeffrey zonked cheeky bugger.</p>
        <div className="features__btn-2">
          <NavLink to="/about" className="link-btn">
            <i>
              <CgArrowLongRight />
            </i>
            <i>
              <CgArrowLongRight />
            </i>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
