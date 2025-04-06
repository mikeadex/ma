import { FaFacebookF, FaTwitter, FaVimeoV } from 'react-icons/fa';
import BlogSidebar from './blog-sidebar';
import BlogComments from './blog-comments';
import BlogReplyForm from '../form/blog-reply-form';

const BlogDetailsArea = () => {
   return (
      <>
         <section className="blog__area pt-120 pb-120">
            <div className="container">
               <div className="row">
                  <div className="col-xl-8 col-lg-8">
                     <div className="blog__details-wrapper mr-50">
                        <div className="blog__text mb-45">
                           <p>Nancy boy Charles down the pub get stuffed mate easy peasy brown bread car boot squiffy loo, blimey arse over tit it is your round cup of char horse play chimney pot old. Chip shop bonnet barney owt to do with me what a plonker hotpot loo that gormless off his nut a blinding shot Harry give us a bell, do not get shirty with me daft codswallop geeza up the duff zonked I tinkety tonk old fruit bog-standard spiffing good time Richard. Are you taking the piss young delinquent wellies absolutely bladdered the BBC Eaton my good sir, cup of tea spiffing bleeder David mufty you mug <span>cor blimey guvnor, burke bog-standard brown</span> bread wind up barney. Spend a penny a load of old tosh get stuffed mate I do not want no agro the full monty grub Jeffrey faff about my good sir David cheeky, bobby blatant loo pukka chinwag Why ummm I am telling bugger plastered, jolly good say bits and bobs show off show off pick your nose and blow off cuppa blower my lady I lost the plot.</p>
                        </div>
                        <div className="blog__quote mb-40 p-relative white-bg fix">
                           <div className="blog__quote-line">
                              <img className="line-1" src="/assets/img/icon/blog/line-1.png" alt="" />
                              <img className="line-2" src="/assets/img/icon/blog/line-2.png" alt="" />
                           </div>
                           <div className="quote mb-10">
                              <img src="/assets/img/icon/blog/quote-1.png" alt="" />
                           </div>
                           <div className="quote-2 p-absolute">
                              <img src="/assets/img/icon/blog/quote-2.png" alt="" />
                           </div>
                           <blockquote>
                              <p>Tosser argy-bargy mush loo at public school Elizabeth up the duff buggered chinwag on your bike mate do not get shirty with me super, Jeffrey bobby Richard cheesed off spend a penny a load of old tosh blag horse.</p>
                           </blockquote>
                           <h4>Shahnewaz Sakil</h4>
                        </div>
                        <div className="blog__text mb-40">
                           <p>Cheeky bugger cracking goal starkers lemon squeezy lost the plot pardon me no biggie the BBC burke gosh boot so I said wellies, zonked a load of old tosh bodge barmy skive off he legged it morish spend a penny my good sir wind up hunky-dory. Naff grub elizabeth cheesed off do not get shirty with me arse over tit mush a blinding shot young delinquent bloke boot blatant.</p>
                        </div>
                        <div className="blog__details-thumb w-img mb-45">
                           <img src="/assets/img/blog/details/b-d-1.jpg" alt="" />
                        </div>
                        <div className="blog__text mb-40">
                           <h3>Zibber is the only theme you will ever need</h3>
                           <p>Are you taking the piss young delinquent wellies absolutely bladdered the Eaton my good sir, cup of tea spiffing bleeder David mufty you mug cor blimey guvnor, burke bog-standard brown bread wind up barney. Spend a penny a load of old tosh get stuffed mate I do not want no agro the full monty grub Jeffrey faff about my good sir David cheeky, bobby blatant loo pukka chinwag Why ummm I am telling bugger plastered, jolly good say bits and bobs show off show off pick your nose and blow off cuppa blower my lady I lost the plot.</p>

                           <p> <span>Cheeky bugger cracking goal starkers lemon squeezy</span> lost the plot pardon me no biggie the BBC burke gosh boot so I said wellies, zonked a load of old tosh bodge barmy skive off he legged it morish spend a penny my good sir wind up hunky-dory. Naff grub elizabeth cheesed off do not get shirty with me arse over tit mush a blinding shot young delinquent bloke boot blatant.</p>
                        </div>
                        <div className="blog__tag mb-30">
                           <span>Tag : </span>
                           <a href="#">Blog</a>
                           <a href="#">Creative</a>
                           <a href="#">Portfolio</a>
                           <a href="#">Theme</a>
                        </div>
                        <div className="blog__share d-flex align-items-center mb-30">
                           <span>Share : </span>
                           <div className="blog__social theme-social d-inline-block">
                              <ul>
                                 <li>
                                    <a href="#">
                                       <i ><FaFacebookF /></i>
                                       <i ><FaFacebookF /></i>
                                    </a>
                                 </li>
                                 <li>
                                    <a href="#">
                                       <i ><FaTwitter /> </i>
                                       <i ><FaTwitter /> </i>
                                    </a>
                                 </li>
                                 <li>
                                    <a href="#">
                                       <i ><FaVimeoV /> </i>
                                       <i ><FaVimeoV /> </i>
                                    </a>
                                 </li>
                              </ul>
                           </div>
                        </div>
                        <div className="blog__author mb-95 d-sm-flex">
                           <div className="blog__author-img mr-30">
                              <img src="/assets/img/blog/author/author-1.jpg" alt="" />
                           </div>
                           <div className="blog__author-content">
                              <h5>Sophie Ianiro</h5>
                              <span>Author</span>
                              <p>I said cracking goal down the pub blag cheeky bugger at public school A bit of how is your father boot.!</p>
                           </div>
                        </div>
                        <div className="post-comments mb-95" data-wow-delay=".6s">
                           <div className="post-comment-title mb-40">
                              <h3>3 Comments</h3>
                           </div>
                           <div className="latest-comments">
                              {/* comment area */}
                              <BlogComments/>
                              {/* comment area */}
                           </div>
                        </div>
                        <div className="post-comment-form">
                           <h4>Leave a Reply </h4>
                           <span>Your email address will not be published.</span>
                           {/* form start */}
                           <BlogReplyForm/>
                           {/* form end */}
                        </div>
                     </div>
                  </div>

                  <div className="col-xl-4 col-lg-4" >
                      {/* blog sidebar */}
                       <BlogSidebar />
                     {/* blog sidebar */}
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default BlogDetailsArea;