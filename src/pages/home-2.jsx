import AchievementOne from "../components/achievement/achievement-one";
import BlogAreaOne from "../components/blog/blog-area-one";
import CounterTwo from "../components/counter/counter-two";
import CtaTwo from "../components/cta/cta-two";
import ExpertOne from "../components/expart/expert-one";
import FaqOne from "../components/faq/faq-one";
import FeaturesTwo from "../components/features/features-two";
import HeroBannerTwo from "../components/hero-banner/hero-banner-two";
import PortfolioOne from "../components/portfolio/portfolio-one";
import SEOCom from "../components/seo";
import TestimonialOne from "../components/testimonial/testimonial-one";
import FooterTwo from "../layout/footer/footer-two";
import HeaderTwo from "../layout/header/header-two";

export default function HomePageTwo() {
  return (
    <>
      {/* SEO */}
      <SEOCom title="Home Style Two" />
      {/* SEO */}

      {/* header area start */}
      <HeaderTwo />
      {/* header area end */}

      {/* hero banner start */}
      <HeroBannerTwo />
      {/* hero banner end */}

      {/* feature area start */}
      <FeaturesTwo />
      {/* feature area end */}

      {/* faq area start */}
      <FaqOne/>
      {/* faq area end */}

      {/* achievement area start */}
      <AchievementOne/>
      {/* achievement area end */}

      {/* expert area start */}
      <ExpertOne/>
      {/* expert area end */}

      {/* counter area start */}
      <CounterTwo/>
      {/* counter area end */}

      {/* testimonial area start */}
      <TestimonialOne/>
      {/* testimonial area end */}

      {/* portfolio area start */}
      <PortfolioOne/>
      {/* portfolio area end */}

      {/* blog area start */}
      <BlogAreaOne/>
      {/* blog area end */}

      {/* cta area start */}
      <CtaTwo/>
      {/* cta area end */}

      {/* footer area start */}
      <FooterTwo/>
      {/* footer area end */}
    </>
  );
}
