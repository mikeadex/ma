import SEOCom from "../components/seo";
import HeaderOne from "../layout/header/header-one";
import FooterOne from "../layout/footer/footer-one";
import BreadcrumbOne from "../components/breadcrumb/breadcrumb-one";
import PortfolioTwo from "../components/portfolio/portfolio-two";

export default function PortfolioPage() {
  return (
    <>
      {/* SEO */}
      <SEOCom title="Portfolio Page" />
      {/* SEO */}

      {/* header area start */}
      <HeaderOne />
      {/* header area end */}

      {/* breadcrumb area start */}
      <BreadcrumbOne title="Our Portfolio" subtitle="Portfolio" />
      {/* breadcrumb area end */}

      {/* portfolio area start */}
      <PortfolioTwo/>
      {/* portfolio area end */}

      {/* footer start */}
      <FooterOne />
      {/* footer end */}
    </>
  );
}
