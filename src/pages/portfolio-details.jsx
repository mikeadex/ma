import SEOCom from "../components/seo";
import HeaderOne from "../layout/header/header-one";
import FooterOne from "../layout/footer/footer-one";
import BreadcrumbOne from "../components/breadcrumb/breadcrumb-one";
import PortfolioDetailsArea from "../components/portfolio/portfolio-details-area";

export default function PortfolioDetailsPage() {
  return (
    <>
      {/* SEO */}
      <SEOCom title="Portfolio Details Page" />
      {/* SEO */}

      {/* header area start */}
      <HeaderOne />
      {/* header area end */}

      {/* breadcrumb area start */}
      <BreadcrumbOne title="Portfolio Details" subtitle="Portfolio Details" />
      {/* breadcrumb area end */}

      {/* portfolio details area start */}
      <PortfolioDetailsArea/>
      {/* portfolio details area end */}

      {/* footer start */}
      <FooterOne />
      {/* footer end */}
    </>
  );
}
