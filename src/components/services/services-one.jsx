import { NavLink } from "react-router-dom";

const servicesData = [
  {
    icon: "1",
    title: "Change Consultancy",
    description:
      "Workshops designed to inspire and equip participants in business analysis and project management. These sessions focus on developing internal talent to drive successful transformation initiatives.",
  },
  {
    icon: "2",
    title: "Training and Empowerment",
    description:
      "Comprehensive training programs to develop your team's skills and capabilities. We provide hands-on learning experiences that empower your workforce to excel in their roles.",
  },
  {
    icon: "3",
    title: "Technology Tools",
    description:
      "Cutting-edge technological solutions to streamline your business processes. We help implement and optimize tools that enhance productivity and efficiency.",
  },
];

// Add this CSS to your stylesheet:
// .row {
//   justify-content: center;
// }

const SingleService = ({ icon, title, description }) => {
  return (
    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
      <div className="services__item mb-90">
        <div className="services__icon mb-35">
          <img
            src={`assets/img/icon/services/services-${icon}.png`}
            alt="services"
          />
        </div>
        <div className="services__content">
          <h3>
            <NavLink to="/servicesDetails">{title}</NavLink>
          </h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default function ServicesOne() {
  return (
    <section className="services__area pt-115 pb-80">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
            <div className="section__title section__title-3 text-center mb-90">
              <span>Our Services</span>
              <h2>
                We provide quality change management trainings for corporate
                clients.
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          {servicesData.map((service, index) => (
            <SingleService
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
