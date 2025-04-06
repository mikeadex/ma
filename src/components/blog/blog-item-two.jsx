import { NavLink } from "react-router-dom";

export default function BlogItemTwo({ item,onVideoPopup }) {
  return (
    <div className="blog__item-2 mb-50 fix wow fadeInUp" data-wow-delay=".4s">
      <div className="blog__thumb-2 w-img fix p-relative">
        <NavLink to="/blog-details">
          <img src={item.thumb} alt={item.title} />
        </NavLink>
        {item?.videoId && (
          <div className="blog__play p-absolute">
            <button onClick={() => onVideoPopup(item.videoId)}>
              <i className="fal fa-play"></i>
            </button>
          </div>
        )}
      </div>
      <div className="blog__content-2">
        <div className="blog__meta-2 mb-15 d-sm-flex align-items-center">
          <div className="blog__user pr-20 mr-20">
            <a href="#">
              <img src={item.author.img} alt={item.author.name} />
              <h6>{item.author.name}</h6>
            </a>
          </div>
          <div className="blog__date">
            <span>{item.date}</span>
          </div>
        </div>
        <h3>
          <NavLink to={`/blog-details`}>{item.title}</NavLink>
        </h3>
        <p>{item.desc}</p>
        <div className="blog__btn d-sm-flex justify-content-between">
          <div className="blog__btn">
            <NavLink to={`/blog-details`} className="link-btn-2">
              Read More
              <i className="fal fa-long-arrow-right"></i>
              <i className="fal fa-long-arrow-right"></i>
            </NavLink>
          </div>
          <div className="blog__comment">
            <a href="#">
              <i className="icon_chat_alt"></i>
              {item.comments}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
