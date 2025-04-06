import { NavLink } from "react-router-dom";

export default function ExpertOne() {
  const data = [
    {
      id: "philosophy",
      label: "Philosophy",
      title: "Our experts will guide you",
      description:
        "Tosser me old mucker lurgy cheeky bugger young delinquent squiffy at public school lost the plot fanny around, haggle daft my lady faff about old pear.",
      image: "1",
      link: "/about",
    },
    {
      id: "work",
      label: "Work Area",
      title: "Discover our work area",
      description:
        "Our team works diligently to deliver the best solutions tailored to your needs, ensuring quality and excellence every step of the way.",
      image: "2",
      link: "/services",
    },
  ];
  return (
    <section className="expart__area pt-200 wow fadeInUp" data-wow-delay=".4s">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="expart__wrapper">
              <div className="expart__nav">
                <ul
                  className="nav nav-pills justify-content-end"
                  id="expart-tab"
                  role="tablist"
                >
                  {data.map((item, index) => (
                    <li className="nav-item text-center" key={item.id}>
                      <a
                        className={`nav-link ${index === 0 ? "active" : ""}`}
                        id={`${item.id}-tab`}
                        data-bs-toggle="pill"
                        href={`#${item.id}`}
                        role="tab"
                        aria-controls={item.id}
                        aria-selected={index === 0}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="expart__tab">
                <div className="tab-content" id="expart-Content">
                  {data.map((item, index) => (
                    <div
                      className={`tab-pane fade ${
                        index === 0 ? "show active" : ""
                      }`}
                      id={item.id}
                      role="tabpanel"
                      aria-labelledby={`${item.id}-tab`}
                      key={item.id}
                    >
                      <SingleExpartContent
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        link={item.link}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const SingleExpartContent = ({ image, title, description, link }) => {
  return (
    <div className="expart__tab-content white-bg">
      <div
        className="expart__thumb"
        style={{
          background: `url(/assets/img/expart/expart-${image}.jpg)`,
        }}
      ></div>
      <div className="row">
        <div className="col-xl-6 col-lg-6 offset-lg-6">
          <div className="expart__content">
            <h3>{title}</h3>
            <p>{description}</p>
            <NavLink to={link} className="z-btn">
              Learn More
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
