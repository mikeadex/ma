

export default function BlogReplyForm() {
    return (
        <form action="#">
            <div className="row">
                <div className="col-xl-12">
                    <div className="post-input">
                        <textarea placeholder="Your message..."></textarea>
                    </div>
                </div>
                <div className="col-xl-6 col-md-6">
                    <div className="post-input">
                        <input type="text" placeholder="Your Name" />
                    </div>
                </div>
                <div className="col-xl-6 col-md-6">
                    <div className="post-input">
                        <input type="email" placeholder="Your Email" />
                    </div>
                </div>
                <div className="col-xl-12">
                    <div className="post-input">
                        <input type="text" placeholder="Website" />
                    </div>
                </div>
                <div className="col-xl-12">
                    <div className="post-check mb-40">
                        <input type="checkbox" />
                        <span>Save my name, email, and website in this browser for the next time I comment.</span>
                    </div>
                </div>
            </div>

            <button type="button" className="z-btn">Send Message</button>
        </form>
    )
}
