import SEOCom from "../components/seo";
import HeroBannerThree from "../components/hero-banner/hero-banner-three";
import ServicesTwo from "../components/services/services-two";
import ServicesThree from "../components/services/services-three";
import TestimonialOne from "../components/testimonial/testimonial-one";
import ProjectsArea from "../components/project/project-one";
import FaqTwo from "../components/faq/faq-two";
import CtaTwo from "../components/cta/cta-two";
import FooterThree from "../layout/footer/footer-three";
import HeaderSix from "../layout/header/header-six";
 
export default function HeaderStyleSeven() {
  return (
    <>
      {/* SEO */}
      <SEOCom title="Header Style Seven" />
      {/* SEO */}

      {/* header area start */}
      <HeaderSix />
      {/* header area end */}

      {/* hero banner start */}
      <HeroBannerThree />
      {/* hero banner end */}

      {/* services area start */}
      <ServicesTwo />
      {/* services area end */}

      {/* services area start */}
      <ServicesThree />
      {/* services area end */}

      {/* testimonial area start */}
      <TestimonialOne />
      {/* testimonial area end */}

      {/* project area start */}
      <ProjectsArea />
      {/* project area end */}

      {/* faq area start */}
      <FaqTwo />
      {/* faq area end */}

      {/* cta area start */}
      <CtaTwo />
      {/* cta area end */}

      {/* footer area start */}
      <FooterThree/>
      {/* footer area end */}
    </>
  );
}
