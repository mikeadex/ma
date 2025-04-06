import { NavLink } from "react-router-dom";

const pricingData = [
  {
    id: 1,
    tab: "monthly",
    plans: [
      { title: "Free", price: 0, active: false },
      { title: "Premium", price: 47, active: true },
      { title: "Enterprise", price: 74, active: false },
    ],
  },
  {
    id: 2,
    tab: "yearly",
    plans: [
      { title: "Enterprise", price: 49, active: false },
      { title: "Premium", price: 79, active: true },
      { title: "Professional", price: 99, active: false },
    ],
  },
];

const SinglePrice = ({ title, price, active }) => {
  return (
    <div className="col-xl-4 col-lg-4 col-md-6">
      <div
        className={`price__item ${
          active ? "active" : ""
        } p-relative transition-3 text-center fix mb-30`}
      >
        <div className="price__shape transition-3 p-absolute">
          <img src="/assets/img/icon/price/triangle.png" alt="" />
        </div>
        <div className="price__inner p-relative">
          <p>{title}</p>
          <div className="price__tag mb-45">
            <h1>{`$${price}`}</h1>
            <span>Per month</span>
          </div>
          <div className="price__features text-start mb-55">
            <ul>
              <li>
                <span>Upload Your Logo</span>
              </li>
              <li>
                <span>Stock photos & videos</span>
              </li>
              <li>
                <span>Video Templates Library</span>
              </li>
            </ul>
          </div>
          <NavLink to="/contact" className="price-btn">
            Get Started
          </NavLink>
        </div>
      </div>
    </div>
  );
};

const PricingOne = () => {
  return (
    <section className="price__area pt-115 pb-75">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
            <div className="section__title section__title-3 mb-85 text-center">
              <span>Our Team</span>
              <h2>Flexible Pricing Packages</h2>
              <p>join and get 20% off coupon</p>
            </div>
            <div className="price__tab d-flex justify-content-center mb-50">
              <div className="price__offer">
                <span>Save 20%</span>
                <img src="/assets/img/icon/price/line.png" alt="" />
              </div>
              <ul
                className="nav nav-tabs justify-content-center"
                id="price-tab"
                role="tablist"
              >
                <li className="nav-item">
                  <button
                    className="nav-link active"
                    id="yearly-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#yearly"
                    role="tab"
                    aria-controls="yearly"
                    aria-selected="true"
                  >
                    Yearly
                  </button>
                </li>

                <li className="nav-item">
                  <button
                    className="nav-link"
                    id="monthly-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#monthly"
                    role="tab"
                    aria-controls="monthly"
                    aria-selected="false"
                  >
                    Monthly
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="price__tab-content">
          <div className="tab-content" id="price-tab-content">
            {pricingData.map((tab) => (
              <div
                key={tab.id}
                className={`tab-pane fade ${
                  tab.tab === "yearly" ? "show active" : ""
                }`}
                id={tab.tab}
                role="tabpanel"
                aria-labelledby={`${tab.tab}-tab`}
              >
                <div className="row">
                  {tab.plans.map((plan, index) => (
                    <SinglePrice
                      key={index}
                      title={plan.title}
                      price={plan.price}
                      active={plan.active}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingOne;
