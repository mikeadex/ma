import { NavLink } from "react-router-dom";
import Slider from "react-slick";

const sliderData = [
  {
    slider_class:
      "col-xl-7 offset-xl-6 col-lg-8 offset-lg-4 col-md-9 offset-md-3 col-sm-10 offset-sm-2",
    content_class: "",
    attr_1: null,
    attr_2: (
      <h1>
        We will <br /> help your kingdom grow faster
      </h1>
    ),
    attr_3: "Work with a Konsul advisor to plan for your future.",
    btn_text: "See what's New",
  },
  {
    slider_class:
      "col-xl-8 offset-xl-2 col-lg-8 offset-lg-2 col-md-9 offset-md-3 col-sm-10 offset-sm-2",
    content_class: "slider__content-3 text-center",
    attr_1: null,
    attr_2: <h1>Finance Consulting For Challenging Times</h1>,
    attr_3: "Work with a Konsul advisor to plan for your future.",
    btn_text: "Get a Free Quote",
  },
  {
    slider_class: "col-xl-6",
    content_class: "slider__content-4",
    attr_1: <span>Welcome To Zibber.</span>,
    attr_2: <h1>Get more Impact Fasted</h1>,
    attr_3:
      "Tinkety tonk old fruit baking cakes cobblers happy days argy-bargy up the duff excuse my french fanny around.",
    btn_text: "See what's New",
  },
];

// slider setting
const settings = {
  autoplay: true,
  autoplaySpeed: 8000,
  speed: 500,
  infinite: true,
  dots: false,
  fade: true,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const HeroBannerTwo = () => {
  return (
    <Slider className="slider-active" {...settings}>
      {sliderData.map((slide, index) => (
        <SliderItem key={index} item={slide} />
      ))}
    </Slider>
  );
};

export default HeroBannerTwo;

const SliderItem = ({ item }) => {
  const { slider_class, content_class, attr_1, attr_2, attr_3, btn_text } = item;
  return (
    <div
      className="single-slider single-slider-2 slider__height slider__height-2 d-flex align-items-center"
      style={{
        background: `url(/assets/img/slider/02/slider-1.jpg)`,
      }}
    >
      <div className="container">
        <div className="row">
          <div className={slider_class}>
            <div
              className={`slider__content slider__content-2 ${content_class}`}
            >
              {attr_1 && attr_1}
              {attr_2}
              <p>{attr_3}</p>
              <div className="slider__btn">
                <NavLink to="/contact" className="z-btn z-btn-transparent">
                  {btn_text}
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
