import SEOCom from "../components/seo";
import HeaderOne from "../layout/header/header-one";
import HeroBannerOne from "../components/hero-banner/hero-banner-one";
import FeaturesOne from "../components/features/features-one";
import AboutOne from "../components/about/about-one";
import CapabilitiesOne from "../components/capabilities/capabilities-one";
import ServicesOne from "../components/services/services-one";
import CounterOne from "../components/counter/counter-one";
import TeamOne from "../components/team/team-one";
import CtaOne from "../components/cta/cta-one";
import PricingOne from "../components/pricing/pricing-one";
import BrandOne from "../components/brand/brand-one";
import ContactOne from "../components/contact/contact-one";
import FooterOne from "../layout/footer/footer-one";

export default function HomePage() {
  return (
    <>
      {/* SEO */}
      <SEOCom title="Home Page" />
      {/* SEO */}

      {/* header area start */}
      <HeaderOne />
      {/* header area end */}

      {/* hero banner start */}
      <HeroBannerOne />
      {/* hero banner end */}

      {/* feature area start */}
      {/* <FeaturesOne/> */}
      {/* feature area end */}

      {/* about area start */}
      <AboutOne />
      {/* about area end */}

      {/* capability area start */}
      <CapabilitiesOne />
      {/* capability area end */}

      {/* service area start */}
      <ServicesOne />
      {/* service area end */}

      {/* counter area start */}
      <CounterOne />
      {/* counter area end */}

      {/* team area start */}
      <TeamOne />
      {/* team area end */}

      {/* cta start */}
      <CtaOne />
      {/* cta end */}

      {/* pricing area start */}
      <PricingOne />
      {/* pricing area end */}

      {/* brand area start */}
      <BrandOne />
      {/* brand area end */}

      {/* contact area start */}
      <ContactOne />
      {/* contact area end */}

      {/* footer start */}
      <FooterOne />
      {/* footer end */}
    </>
  );
}
