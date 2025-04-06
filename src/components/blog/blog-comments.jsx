import { BiReply } from 'react-icons/bi'

export default function BlogComments() {
    return (
        <ul>
            <li>
                <div className="comments-box">
                    <div className="comments-avatar">
                        <img src="/assets/img/blog/comment/comments-1.png" alt="" />
                    </div>
                    <div className="comments-text">
                        <div className="avatar-name">
                            <h5>David Angel Makel</h5>
                            <span className="post-meta">December 26, 2021</span>
                        </div>
                        <p>The bees knees bite your arm off bits and bobs he nicked it gosh gutted mate blimey, old off his nut argy bargy vagabond buggered dropped.</p>
                        <a href="#" className="comment-reply"> <i > <BiReply /> </i> Reply</a>
                    </div>
                </div>
            </li>
            <li className="children">
                <div className="comments-box">
                    <div className="comments-avatar">
                        <img src="/assets/img/blog/comment/comments-rep-1.png" alt="" />
                    </div>
                    <div className="comments-text">
                        <div className="avatar-name">
                            <h5>Bailey Wonger</h5>
                            <span className="post-meta">December 27, 2021</span>
                        </div>
                        <p>Do one say wind up buggered bobby bite your arm off gutted mate, David victoria sponge cup of char chap fanny around.</p>
                        <a href="#" className="comment-reply"> <i > <BiReply /> </i> Reply</a>
                    </div>
                </div>
            </li>
            <li className="children">
                <div className="comments-box">
                    <div className="comments-avatar">
                        <img src="/assets/img/blog/comment/comments-rep-2.png" alt="" />
                    </div>
                    <div className="comments-text">
                        <div className="avatar-name">
                            <h5>Hilary Ouse</h5>
                            <span className="post-meta">December 28, 2021</span>
                        </div>
                        <p>Baking cakes is cobblers wellies William geeza bits and bobs what a plonker it is your round,</p>
                        <a href="#" className="comment-reply"> <i > <BiReply /> </i> Reply</a>
                    </div>
                </div>
            </li>
        </ul>
    )
}
