import { FiBook, FiLock } from "react-icons/fi";
import { FaLightbulb, FaRibbon } from "react-icons/fa";
import { BsHouseDoor } from "react-icons/bs";
import { IoDocumentTextOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { CgArrowLongRight } from "react-icons/cg";

const featuresData = [
  { icon: <FiBook />, title: "Training & Empowerment" },
  { icon: <FaLightbulb />, title: "Technology Tools" },
  { icon: <BsHouseDoor />, title: "Change Consultancy" },
  { icon: <IoDocumentTextOutline />, title: "Boat and Yacht Insurance" },
  { icon: <FiLock />, title: "Umbrella Insurance" },
  { icon: <FaRibbon />, title: "How We Think and Work" },
];

function SingleFeature({ icon, title }) {
  return (
    <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4">
      <div className="features__item text-center">
        <div
          className="features__thumb"
          style={{
            background: `url(/assets/img/features/features-1.jpg)`,
            backgroundRepeat: "no-repeat",
            width: "100%",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="features__content">
          <div className="features__icon">
            <i>{icon}</i>
          </div>
          <h3>{title}</h3>
          <div className="features__btn">
            <NavLink to="/servicesDetails" className="link-btn">
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
    </div>
  );
}
export default function FeaturesOne() {
  return (
    <section
      className="features__area pb-100 mt--100 wow fadeInUp"
      data-wow-delay=".5s"
    >
      <div className="container">
        <div className="features__inner fix">
          <div className="row g-0 ">
            {featuresData.map((feature, index) => (
              <SingleFeature
                key={index}
                icon={feature.icon}
                title={feature.title}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
