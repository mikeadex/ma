import { NavLink } from "react-router-dom";

const servicesData = [
  { icon: "1", title: "Expense Reporting" },
  { icon: "2", title: "Tax Advisory" },
  { icon: "3", title: "Consulting" },
  { icon: "4", title: "Audit & Assurance" },
  { icon: "5", title: "Finance Analytics" },
  { icon: "6", title: "Cord Processing" },
  { icon: "7", title: "Development" },
  { icon: "8", title: "Financial Audit" },
];

const SingleService = ({ icon, title }) => {
  return (
    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
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
          <p>Naff the wireless barney bodge lurgy cuppa cheeky.</p>
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
            <div
              className="section__title section__title-3 text-center mb-90 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <span>Our Services</span>
              <h2>Provide awesome customer service with our tools.</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {servicesData.map((service, index) => (
            <SingleService
              key={index}
              icon={service.icon}
              title={service.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
