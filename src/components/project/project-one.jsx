
import { NavLink } from 'react-router-dom';
import Slider from "react-slick";

// slick setting
const settings = {
   autoplay: false,
   autoplaySpeed: 10000,
   dots: false,
   fade: false,
   arrows: false,
   slidesToShow: 2,
   slidesToScroll: 1,
   responsive: [
      {
         breakpoint: 767,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
         }
      },
   ]
}
// slider data
const testimonialData = [
   {
      id: 1,
      title: "Organizational <br /> design for business",
      img:"/assets/img/project/project-1.png",
   },
   {
      id: 2,
      title: "Solve customer <br/> problems in a flash",
      img:"/assets/img/project/project-2.png",
   },
   {
      id: 3,
      title: "Organizational <br /> design for business",
      img: "/assets/img/project/project-1.png",
   },
]

const ProjectsArea = () => {
   return (
         <section className="project__area pt-115 pb-120">
            <div className="container">
               <div className="row">
                  <div className="col-xl-7">
                     <div className="section-title section__title-3 mb-70">
                        <h2>Future is brighter <br/> when you are more prepared</h2>
                        <p>We help you weather todays uncertainty through our best team <br/> intelligence and needs.</p>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xl-12">

                     <Slider className='project__slider' {...settings}>

                        {
                           testimonialData.map((testimonial, index) => {
                              return <div key={index} className="project__item grey-bg-19">
                                 <div className="project__content">
                                    <div className="project__no">
                                       <h5>{testimonial.id}</h5>
                                    </div>
                                    <h3>
                                        <NavLink to="/portfolio-details" dangerouslySetInnerHTML={{__html: testimonial.title}}/>
                                    </h3>
                                 </div>
                                 <div className="project__thumb m-img">
                                    <img src={testimonial.img} alt="" />
                                 </div>
                              </div>
                           })
                        }

                     </Slider>

                  </div>
               </div>
            </div>
         </section>
   );
};

export default ProjectsArea;