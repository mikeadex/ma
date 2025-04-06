import { CgArrowLongRight } from "react-icons/cg";
import { FaPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import teamData from "../../data/team-data";
import SingleTeam from "./team-item";



export default function TeamOne() {
  return (
    <section className="team__area pt-30 pb-110">
      <div className="container">
        <div className="row align-items-center mb-55">
          <div className="col-xl-6 col-lg-8 col-md-8 col-sm-8">
            <div className="section__title section__title-3 mb-30">
              <span>Our Team</span>
              <h2>We help to create visual strategies.</h2>
            </div>
          </div>
          <div className="col-xl-6 col-lg-4 col-md-4 col-sm-4">
            <div className="team__more d-flex justify-content-sm-end mb-85">
              <NavLink to="/team" className="z-btn z-btn-border">
                View all
                <i>
                  {" "}
                  <CgArrowLongRight />{" "}
                </i>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="row">
          {teamData.slice(0, 6).map((team) => (
            <div key={team.id} className="col-xl-3 col-lg-4 col-md-6">
               <SingleTeam item={team} />
            </div>
          ))}

          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="team__item team__item-add p-relative text-center fix mb-30">
              <div className="team__add">
                <NavLink to="/team">
                  <i>
                    {" "}
                    <FaPlus />{" "}
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



