import { useState } from "react";
import {portfolioOneData} from "../../data/portfolio-data";
import { PhotoProvider } from "react-photo-view";
import { NavLink } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import ImageLightbox from "../common/image-lightbox";

export default function PortfolioOne() {
  // Get unique categories
  const allCategories = [
    "all",
    ...new Set(portfolioOneData.map((item) => item.category)),
  ];

  // Filter unique items based on `img` and `State`
  const uniqueItems = portfolioOneData.filter(
    (item, index, self) =>
      index ===
      self.findIndex((t) => t.img === item.img && t.State === item.State)
  );

  // State management
  const [isActive, setIsActive] = useState("all");
  const [filterGalleryItems, setFilterGalleryItems] = useState(uniqueItems);

  // Filter items based on category
  const filterCategory = (category) => {
    setIsActive(category);
    if (category === "all") {
      setFilterGalleryItems(uniqueItems);
    } else {
      const filteredItems = portfolioOneData.filter(
        (item) => item.category === category
      );
      setFilterGalleryItems(filteredItems);
    }
  };

  // photoIndex
  const [photoIndex, setPhotoIndex] = useState(0);
  // image open state
  const [open, setOpen] = useState(false);
  // images
  const images = filterGalleryItems.map((item) => item.img);
  // handleImagePopup
  const handleImagePopup = (index) => {
    setPhotoIndex(index);
    setOpen(true);
  };
  return (
    <>
      <section className="case__area pt-115 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 offset-xl-2">
              <div className="section__title section__title-3 text-center mb-45">
                <span>Case Studies</span>
                <h2>Featured Works.</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div
                className="case__menu text-center mb-40 wow fadeInUp"
                data-wow-delay=".6s"
              >
                <div className="masonary-menu filter-button-group">
                  {allCategories.map((category, index) => {
                    return (
                      <button
                        key={index}
                        onClick={() => filterCategory(category)}
                        className={`${
                          isActive === category ? "active" : ""
                        } text-capitalize`}
                      >
                        {category}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <PhotoProvider>
            <div className="row">
              {filterGalleryItems.map((item, i) => (
                <div
                  key={item.id}
                  className={
                    item.img.includes("case-3.jpg")
                      ? "col-xl-6 col-lg-6 col-md-6"
                      : "col-xl-3 col-lg-3 col-md-6 grid-item"
                  }
                >
                  <div className="case__item mb-30 fix">
                    <div className="case__thumb w-img p-relative">
                      <img src={item.img} alt="case" />
                      <div className="case__info p-absolute transition-3">
                        <h4>
                          <NavLink to="/portfolio-details">
                            {item.title}
                          </NavLink>
                        </h4>
                        <span>{item.subtitle}</span>
                      </div>
                      <div className="case__info case__info-2 p-absolute transition-3">
                        <h4>
                          <NavLink to="/portfolio-details">
                            {item.title}
                          </NavLink>
                        </h4>
                        <span>{item.subtitle}</span>
                      </div>
                      <div className="case__plus p-absolute transition-3">
                        <button
                          data-fancybox="gallery"
                          onClick={() => handleImagePopup(i)}
                        >
                          <i>
                            {" "}
                            <AiOutlinePlus />{" "}
                          </i>
                          <i>
                            {" "}
                            <AiOutlinePlus />{" "}
                          </i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </PhotoProvider>
        </div>
      </section>

      {/* image light box start */}
      <ImageLightbox
        images={images}
        visible={open}
        setVisible={setOpen}
        index={photoIndex}
        setIndex={setPhotoIndex}
      />
      {/* image light box end */}
    </>
  );
}
