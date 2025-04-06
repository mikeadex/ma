import { AiOutlineFilePdf } from 'react-icons/ai';
import { FiDownload } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

export default function ServiceDetailsArea() {
    return (
        <section className="services__details pt-115 pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 order-last order-lg-first">
                        <div className="services__sidebar mr-50">
                            <div className="services__widget grey-bg-18 mb-40">
                                <div className="services__widget-title">
                                    <h4>Categories</h4>
                                </div>
                                <div className="services__widget-content">
                                    <div className="services__link">
                                        <ul>
                                            <li><NavLink to="/services">Market Analysis</NavLink></li>
                                            <li><NavLink to="/services"> Great Tests</NavLink></li>
                                            <li><NavLink to="/services">Optimal Choice</NavLink></li>
                                            <li><NavLink to="/services">SEO Optimized</NavLink></li>
                                            <li><NavLink to="/services">Task Consulting</NavLink></li>
                                            <li><NavLink to="/services">Great Advices</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="services__widget grey-bg-18 mb-40">
                                <div className="services__widget-title">
                                    <h4>Subscribe Now</h4>
                                </div>
                                <div className="services__widget-content">
                                    <div className="services__form">
                                        <form>
                                            <input type="text" placeholder="Name" />
                                            <input type="email" placeholder="Email" />
                                            <button className="z-btn z-btn-3 w-100">Subscribe Now</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="services__action grey-bg-18 mb-15">
                                <a href="#"><i > <FiDownload /> </i>Download docs</a>
                            </div>
                            <div className="services__action grey-bg-18 mb-15">
                                <a href="#"><i > <AiOutlineFilePdf /> </i>Characteristics</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8 col-lg-8">
                        <div className="services__text">
                            <h3>We give the best consulting</h3>
                            <p>That brown bread spiffing nice one zonked spiffing
                                good time loo so I said bite your arm off argy-bargy, skive off amongst chip shop hanky panky
                                blow off blower it is your round sloshed, spend a penny mush pukka barmy Harry plastered gutted
                                mate no biggie. Argy-bargy chap a blinding shot twit bits and bobs the wireless Oxford
                                bamboozled pardon you cheers baking cakes mufty. </p>
                        </div>
                        <div className="services__img mb-45 w-img">
                            <img src="/assets/img/services/details/services-01.jpg" alt="" />
                        </div>
                        <div className="services__text">
                            <h3>We Unlock Potential</h3>
                            <p>Cheeky say horse play cup of char bubble and squeak
                                blower pukka what a load of rubbish off his nut, a blinding shot pardon you young delinquent
                                argy-bargy no biggie only a quid pardon me haggle, bleeding amongst the wireless easy peasy loo
                                <span> Charles I do not want no agro</span>. Why gormless loo he lost his bottle wellies cup of
                                tea pardon me lost the plot naff what a plonker, lurgy show off show off pick your nose and blow
                                off super knackered smashing blower morish my lady, bodge codswallop bits and bobs bobby arse
                                get stuffed mate down the pub mush. Eaton lavatory on your bike mate loo bugger all mate nancy
                                boy me old mucker he legged it, twit vagabond pardon me cockup gormless buggered wellies, A bit
                                of hows your father bum bag codswallop bleeder cracking goal absolutely bladdered.</p>
                        </div>
                        <div className="services__list mb-40">
                            <ul>
                                <li>Set up in minutes</li>
                                <li>Save time with Automations</li>
                                <li>Visualize work with Views</li>
                                <li>Customer support</li>
                            </ul>
                        </div>
                        <div className="services__text">
                            <h4 >Why gormless loo he lost his bottle wellies cup of
                                tea pardon me lost the plot naff what a plonker lurgy show off show off pick your nose and blow.
                            </h4>
                            <p>Horse play skive off I amongst bonnet hanky panky
                                Richard brown bread grub I, sloshed nice one lavatory A bit of hows your father easy peasy daft
                                jolly good is, spiffing golly gosh in my flat cup of char tomfoolery a vagabond James Bond. Mush
                                down the pub victoria sponge zonked cracking goal off his nut the little rotter bits and bobs
                                say starkers blower why I william give us a bell.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
