import { NavLink } from "react-router-dom";
import { blogStandardData } from "../../data/blog-data"

const rc_posts = blogStandardData.filter(b => !b.isQuote).slice(0, 3);

export default function BlogSidebar() {
    return (
        <div className="blog__sidebar">
            <div className="sidebar__widget mb-50 wow fadeInUp" data-wow-delay=".2s">
                <div className="sidebar__widget-content">
                    <div className="search">
                        <form action="#">
                            <input type="text" placeholder="Search..." />
                            <button type="submit"><i className="far fa-search"></i></button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="sidebar__widget mb-75 wow fadeInUp" data-wow-delay=".4s">
                <div className="sidebar__widget-title mb-50">
                    <h4>Recent News</h4>
                </div>
                <div className="sidebar__widget-content">
                    <div className="rc-post">
                        <ul>
                            {rc_posts.map(post => (

                                <li key={post.id} className="d-flex mb-20">
                                    <div className="rc-thumb mr-15">
                                        <NavLink to="/blog-details"><img src={post.thumb} alt="rc-post" /></NavLink>
                                    </div>
                                    <div className="rc-text">
                                        <h6><NavLink to="/blog-details">{post.title}</NavLink></h6>
                                        <div className="rc-meta"><span>{post.date}</span> </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="sidebar__widget mb-75 wow fadeInUp" data-wow-delay=".6s">
                <div className="sidebar__widget-title mb-50">
                    <h4>Categories</h4>
                </div>
                <div className="sidebar__widget-content">
                    <div className="cat-link">
                        <ul>
                            <li><NavLink to="/blog-details">Web Design (6)</NavLink></li>
                            <li><NavLink to="/blog-details"> Web Development (14)</NavLink></li>
                            <li><NavLink to="/blog-details">Graphics (12)</NavLink></li>
                            <li><NavLink to="/blog-details">IOS/Android Design (10)</NavLink></li>
                            <li><NavLink to="/blog-details">App & Saas (4)</NavLink></li>
                            <li><NavLink to="/blog-details">Fresh Products (9)</NavLink></li>
                            <li><NavLink to="/blog-details">Saas Design (8)</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="sidebar__widget mb-60 wow fadeInUp" data-wow-delay=".8s">
                <div className="sidebar__widget-title mb-50">
                    <h4>Recent Comments</h4>
                </div>
                <div className="sidebar__widget-content">
                    <div className="rc__comments">
                        <ul>
                            <li className="d-flex mb-25">
                                <div className="rc__comments-icon mr-30">
                                    <i className="icon_comment_alt"></i>
                                </div>
                                <div className="rc__comments-content">
                                    <h6>Justin Case</h6>
                                    <p>My lady mush hanky panky young delinquent.!</p>
                                </div>
                            </li>
                            <li className="d-flex mb-25">
                                <div className="rc__comments-icon mr-30">
                                    <i className="icon_comment_alt"></i>
                                </div>
                                <div className="rc__comments-content">
                                    <h6>Eric Widget</h6>
                                    <p>My lady mush hanky panky young delinquent.!</p>
                                </div>
                            </li>
                            <li className="d-flex mb-25">
                                <div className="rc__comments-icon mr-30">
                                    <i className="icon_comment_alt"></i>
                                </div>
                                <div className="rc__comments-content">
                                    <h6>Penny Tool</h6>
                                    <p>My lady mush hanky panky young delinquent.!</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="sidebar__widget mb-50 wow fadeInUp" data-wow-delay="1s">
                <div className="sidebar__widget-title mb-50">
                    <h4>Popular Tags</h4>
                </div>
                <div className="sidebar__widget-content">
                    <div className="tags">
                        <NavLink to="/blog-details">The Saas</NavLink>
                        <NavLink to="/blog-details">Pix Saas Blog</NavLink>
                        <NavLink to="/blog-details">Landing</NavLink>
                        <NavLink to="/blog-details">UI/UX Design</NavLink>
                        <NavLink to="/blog-details">Branding</NavLink>
                        <NavLink to="/blog-details">Animation</NavLink>
                        <NavLink to="/blog-details">Design</NavLink>
                        <NavLink to="/blog-details">Ideas</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}
