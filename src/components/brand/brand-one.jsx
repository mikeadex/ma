import Slider from "react-slick";

// slider setting
const settings = {
  autoplay: false,
  autoplaySpeed: 10000,
  dots: false,
  arrows: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

const brands = [
  {
    img_1: "/assets/img/brand/brand-1.png",
    img_2: "/assets/img/brand/brand-5.png",
  },
  {
    img_1: "/assets/img/brand/brand-2.png",
    img_2: "/assets/img/brand/brand-6.png",
  },
  {
    img_1: "/assets/img/brand/brand-3.png",
    img_2: "/assets/img/brand/brand-7.png",
  },
  {
    img_1: "/assets/img/brand/brand-4.png",
    img_2: "/assets/img/brand/brand-8.png",
  },
  {
    img_1: "/assets/img/brand/brand-2.png",
    img_2: "/assets/img/brand/brand-6.png",
  },
];

const SingleBrandItem = ({ img_1, img_2 }) => {
  return (
    <div className="brand__item-wrapper">
      <div className="brand__item">
        <img src={img_1} alt="brand" />
      </div>
      <div className="brand__item">
        <img src={img_2} alt="brand" />
      </div>
    </div>
  );
};

export default function BrandOne() {
  return (
    <section className="brand__area p-relative pt-160 pb-50">
      <div className="brand__shape">
        <img className="square" src="/assets/img/icon/brand/square.png" alt="" />
        <img className="circle" src="/assets/img/icon/brand/circle.png" alt="" />
        <img
          className="circle-2"
          src="/assets/img/icon/brand/circle-2.png"
          alt=""
        />
        <img
          className="triangle"
          src="/assets/img/icon/brand/trianlge.png"
          alt=""
        />
      </div>
      <div className="container p-relative">
        <div className="row">
          <div className="col-xl-4 offset-xl-1 col-lg-4 offset-lg-1">
            <div className="section__title mb-30">
              <span>Our Clients</span>
            </div>
          </div>
          <div className="col-xl-6 col-lg-7">
            <div
              className="section__title section__title-3 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <h2>More than 7,962 designers use konsul.</h2>
            </div>
            <div
              className="brand__subtitle mb-90 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <p>
                Design anything from simple icons to fully featured websites and
                applications.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <Slider className="brand-active" {...settings}>
            {brands.map((brand, index) => (
              <SingleBrandItem
                key={index}
                img_1={brand.img_1}
                img_2={brand.img_2}
              />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
