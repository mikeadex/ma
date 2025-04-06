import { Link } from "react-router-dom";
import { CgArrowLongRight } from "react-icons/cg";
import {blogData} from "../../data/blog-data";
import BlogItem from "./blog-item";

const BlogAreaOne = () => {
  return (
    <section className="blog__area grey-bg-15 pt-115 pb-135">
      <div className="container">
        <div className="row">
          <div className="col-xl-5">
            <div className="section__title section__title-3 mb-65">
              <span>Latest News</span>
              <h2>Latest web design Blog and news.</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {blogData.map((blog) => (
            <BlogItem key={blog.id} blog={blog} />
          ))}
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="blog__more mt-60">
              <Link to="/blogs" className="z-btn z-btn-border">
                View all News
                <i>
                  {" "}
                  <CgArrowLongRight />{" "}
                </i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogAreaOne;
