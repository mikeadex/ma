import { NavLink } from "react-router-dom";
import { CgArrowLongRight } from "react-icons/cg";

const BlogItem = ({ blog }) => {
  const { date, name, desc, img } = blog || {};
  return (
    <div className="col-xl-4 col-lg-4 col-md-6">
      <div className="blog__item p-relative fix mb-30 white-bg">
        <div
          className="blog__thumb"
          style={{
            background: `url(${img})`,
          }}
        ></div>
        <div className="blog__content">
          <div className="blog__meta date mb-45">
            <h4>{date?.substring(0, 2)}</h4>
            <h6>{date?.substring(2)}</h6>
          </div>
          <div className="blog__meta user mb-15">
            <span>
              By <NavLink to="/blog-details">{name}</NavLink>
            </span>
          </div>
          <h3>
            <NavLink to="/blog-details">{desc}</NavLink>
          </h3>
          <div className="blog__btn">
            <NavLink to="/blog-details" className="NavLink-btn-2">
              Read More
              <i>
                {" "}
                <CgArrowLongRight />{" "}
              </i>
              <i>
                {" "}
                <CgArrowLongRight />{" "}
              </i>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
