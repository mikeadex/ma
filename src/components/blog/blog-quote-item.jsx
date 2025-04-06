
const BlogQuote = ({ type, content, author }) => {
    return (
        <>
            {type === "style-1" ? (
                <div className="blog__quote mb-50 p-relative white-bg fix">
                    <div className="blog__quote-line">
                        <img className="line-1" src="/assets/img/icon/blog/line-1.png" alt="line" />
                        <img className="line-2" src="/assets/img/icon/blog/line-2.png" alt="line" />
                    </div>
                    <div className="quote mb-10">
                        <img src="/assets/img/icon/blog/quote-1.png" alt="quote" />
                    </div>
                    <div className="quote-2 p-absolute">
                        <img src="/assets/img/icon/blog/quote-2.png" alt="quote" />
                    </div>
                    <blockquote>
                        <p>{content}</p>
                    </blockquote>
                    <h4>{author}</h4>
                </div>
            ) : (
                <div className="blog__quote blog__quote-2 mb-50 p-relative white-bg fix">
                    <div className="blog__quote-line">
                        <img className="line-3" src="/assets/img/icon/blog/line-3.png" alt="line" />
                        <img className="line-4" src="/assets/img/icon/blog/line-4.png" alt="line" />
                    </div>
                    <div className="blog__link-icon">
                        <i className="icon_link_alt icon_1"></i>
                        <i className="icon_link_alt icon_2"></i>
                    </div>
                    <p>{content}</p>
                </div>
            )}
        </>
    );
};

export default BlogQuote;
