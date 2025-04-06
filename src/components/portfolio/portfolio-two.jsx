import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineReload } from "react-icons/ai";
import { AiOutlinePlus } from 'react-icons/ai';
import { CgArrowLongRight } from 'react-icons/cg';
import { portfolioTwoData } from "../../data/portfolio-data";
import ImageLightbox from "../common/image-lightbox";


// all category
const allCategory = ['see all', ...new Set(portfolioTwoData.map(category => category.category))]
// array unique items
const uniqueItem = portfolioTwoData.filter((arr, index, self) =>
   index === self.findIndex((t) => (t.img === arr.img && t.State === arr.State)))
export default function PortfolioTwo() {
   // active btn
   const [active, setActive] = useState('see all');
   const [filterPortfolio, setFilterPortfolio] = useState(uniqueItem);
   const [values, setValues] = useState(5);

   // filtering portfolio data
   const filterCategory = (category) => {
      setActive(category)
      if (category === 'see all') {
         return setFilterPortfolio(uniqueItem)
      }
      const remainingItems = portfolioTwoData.filter((item) => item.category === category);
      setFilterPortfolio(remainingItems)
   }
   // handleLoadMore
   const handleLoadMore = () => {
      setValues((value) => value + 3);
   }

   // photoIndex
   const [photoIndex, setPhotoIndex] = useState(0);
   // image open state
   const [open, setOpen] = useState(false);
   // images
   const images = filterPortfolio.map((item) => item.img);
   // handleImagePopup
   const handleImagePopup = (index) => {
      setPhotoIndex(index);
      setOpen(true);
   };

   return (
      <>
         <section className="portfolio__area pt-110 pb-160">
            <div className="container">
               <div className="row">
                  <div className="col-xl-12">
                     <div className="portfolio__menu mb-40">
                        <span>Filter by: </span>
                        <div className="masonary-menu filter-button-group d-sm-inline-block">
                           {
                              allCategory.map((cate) => {
                                 return <button key={cate} onClick={() => filterCategory(cate)} className={`${active === cate ? 'active ' : ''} text-capitalize`}>
                                    {cate}
                                 </button>
                              })
                           }
                        </div>
                     </div>
                  </div>
               </div>

               <div className='row'>
                  {filterPortfolio.slice(0, values).map((portfolio, index) => {
                     const { img, title, subtitle } = portfolio || {};
                     return (
                        <div key={portfolio.id} className={img.includes('port-1.jpg') ? "col-xl-8 col-lg-8 col-md-6 col-sm-6" : "col-xl-4 col-lg-4 col-md-6 col-sm-6"}>
                           <div className="portfolio__item p-relative mb-30">
                              <div className="portfolio__thumb w-img fix">
                                 <img src={img} alt="" />
                                 <div onClick={setOpen} className="portfolio__plus p-absolute transition-3">
                                    <button onClick={() => handleImagePopup(index)}>
                                       <i> <AiOutlinePlus /> </i>
                                       <i> <AiOutlinePlus /> </i>
                                    </button>
                                 </div>
                              </div>
                              <div className="portfolio__content">
                                 <h4><NavLink to="/portfolio-details">{title}</NavLink></h4>
                                 <p>{subtitle}</p>
                                 <div className="portfolio__more p-absolute transition-3">
                                    <NavLink to="/portfolio-details" className="link-btn-2">
                                       Show Project
                                       <i> <CgArrowLongRight /> </i>
                                       <i> <CgArrowLongRight /> </i>
                                    </NavLink>
                                 </div>
                              </div>
                           </div>
                        </div>
                     )
                  })
                  }
               </div>

               {values < filterPortfolio.length && <div className="row">
                  <div className="col-xl-2">
                     <div className="portfolio__load mt-25" onClick={handleLoadMore}>
                        <button className="z-btn z-btn-border">
                           <i><AiOutlineReload /></i> Load more</button>
                     </div>
                  </div>
               </div>}

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
   )
}
