import SEOCom from "../components/seo";
import HeaderOne from "../layout/header/header-one";
import FooterOne from "../layout/footer/footer-one";
import BreadcrumbOne from "../components/breadcrumb/breadcrumb-one";
import CtaTwo from "../components/cta/cta-two";
import TeamDetailsArea from "../components/team/team-details-area";

export default function TeamDetailsPage() {
  return (
    <>
      {/* SEO */}
      <SEOCom title="Team Details Page" />
      {/* SEO */}

      {/* header area start */}
      <HeaderOne />
      {/* header area end */}

      {/* breadcrumb area start */}
      <BreadcrumbOne title="Team Details" subtitle="Team Details" />
      {/* breadcrumb area end */}

      {/* team details area start */}
      <TeamDetailsArea/>
      {/* team details area end */}

      {/* cta area start */}
      <CtaTwo />
      {/* cta area end */}

      {/* footer start */}
      <FooterOne />
      {/* footer end */}
    </>
  );
}
