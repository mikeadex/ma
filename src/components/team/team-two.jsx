import teamData from "../../data/team-data";
import SingleTeam from "./team-item";

export default function TeamTwo() {
  return (
    <section className="team__area pt-115 pb-110">
      <div className="container">
        <div className="row align-items-center mb-55">
          <div className="col-xl-6 col-lg-8 col-md-8 col-sm-8">
            <div className="section__title section__title-3 mb-30">
              <span>Our Team</span>
              <h2>We help to create visual strategies.</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {teamData.map((team) => (
            <div key={team.id} className="col-xl-3 col-lg-4 col-md-6">
              <SingleTeam item={team} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
