import { CgArrowLongRight } from "react-icons/cg";
import { FaCheck } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function AboutOne() {
  return (
    <section className="about__area pb-200 pt-100">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 pr-0 col-lg-6">
            <div className="about__thumb m-img">
              <img src="/assets/img/about/about-1.jpg" alt="" />
              <div className="about__shape">
                <img src="/assets/img/about/red-shape.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-xl-5 offset-xl-1 col-lg-5 offset-lg-1">
            <div className="about__content">
              <div className="section__title mb-25">
                <span>Who we are</span>
                <h2>We Unlock Potential</h2>
              </div>
              <p>
                Welcome to Cleary Premium Project Management Solutions, where
                our mission is simple: empower your internal talent to drive
                effective business transformation.
              </p>
              <p>
                We understand that the most significant challenges arise not
                from technology or strategy alone, but from the lack of genuine
                buy-in from your team.
              </p>
              <p>
                Our innovative approach centers on injecting confidence into
                your organization’s very foundation, ensuring that every project
                not only survives but thrives.
              </p>

              <NavLink to="/services" className="z-btn ">
                Learn More
                <i>
                  {" "}
                  <CgArrowLongRight />{" "}
                </i>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
