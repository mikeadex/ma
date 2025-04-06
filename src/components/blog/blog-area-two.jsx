import { useState } from "react";
import BlogItemTwo from "./blog-item-two";
import BlogQuote from "./blog-quote-item";
import BlogSidebar from "./blog-sidebar";
import { blogStandardData } from "../../data/blog-data";
import usePagination from "../../hooks/use-pagination";
import Pagination from "../pagination";
import VideoPopup from "../common/video-popup";

export default function BlogAreaTwo() {
  const [videoId, setVideoId] = useState(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const { currentItems, handlePageClick, pageCount } = usePagination(blogStandardData,4);
  function handleOpenVideo(id) {
    setVideoId(id);
    setIsVideoOpen(true);
  }
  return (
    <>
      <section className="blog__area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8">
              <div className="blog__wrapper mr-50">
                {currentItems.map((blog) =>
                  blog.isQuote ? (
                    <BlogQuote
                      key={blog.id}
                      type={blog.type}
                      content={blog.desc}
                      author={blog.author}
                    />
                  ) : (
                    <BlogItemTwo key={blog.id} item={blog} onVideoPopup={handleOpenVideo} />
                  )
                )}

                <div
                  className="basic-pagination wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <Pagination
                    handlePageClick={handlePageClick}
                    pageCount={pageCount}
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>

      {/* video popup */}
      {videoId && <VideoPopup isVideoOpen={isVideoOpen} setIsVideoOpen={setIsVideoOpen} videoId={videoId} />}
      {/* video popup */}
    </>
  );
}
