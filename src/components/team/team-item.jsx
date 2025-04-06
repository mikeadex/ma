import { NavLink } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaVimeoV } from "react-icons/fa";

function renderIcon(icon) {
  switch (icon) {
    case "facebook":
      return <FaFacebookF />;
    case "twitter":
      return <FaTwitter />;
    case "vimeo":
      return <FaVimeoV />;
    default:
      return <FaFacebookF />;
  }
}

export default function SingleTeam({ item }) {
  return (
    <div className="team__item p-relative text-center fix mb-30">
      <div className="team__thumb mb-25">
        <img src={item.image} alt="team" />
        <div className="team__info text-start">
          <h3>
            <NavLink to="/team-details">{item.name}</NavLink>
          </h3>
          <span>{item.title}</span>
        </div>
        <div className="team__social theme-social">
          <ul>
            {item.socials.map((s) => (
              <li key={s.id}>
                <a href={s.link}>
                  <i>{renderIcon(s.name.toLowerCase())}</i>
                  <i>{renderIcon(s.name.toLowerCase())}</i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="team__content">
        <h3>
          <NavLink to="/team-details">{item.name}</NavLink>
        </h3>
        <span>{item.title}</span>
      </div>
    </div>
  );
}
