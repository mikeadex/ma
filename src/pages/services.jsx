import SEOCom from "../components/seo";
import HeaderOne from "../layout/header/header-one";
import FooterOne from "../layout/footer/footer-one";
import BreadcrumbOne from "../components/breadcrumb/breadcrumb-one";
import ServicesOne from "../components/services/services-one";
import CapabilitiesOne from "../components/capabilities/capabilities-one";
import ServicesThree from "../components/services/services-three";
import CtaTwo from "../components/cta/cta-two";

export default function ServicesPage() {
  return (
    <>
      {/* SEO */}
      <SEOCom title="Services Page" />
      {/* SEO */}

      {/* header area start */}
      <HeaderOne />
      {/* header area end */}

      {/* breadcrumb area start */}
      <BreadcrumbOne title="Services" subtitle="Services" />
      {/* breadcrumb area end */}

      {/* service area start */}
      <ServicesOne />
      {/* service area end */}

      {/* capability area start */}
      <CapabilitiesOne />
      {/* capability area end */}

      {/* services area start */}
      <ServicesThree />
      {/* services area end */}

      {/* cta area start */}
      <CtaTwo />
      {/* cta area end */}

      {/* footer start */}
      <FooterOne />
      {/* footer end */}
    </>
  );
}
