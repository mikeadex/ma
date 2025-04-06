import SEOCom from "../components/seo";
import HeaderOne from "../layout/header/header-one";
import FooterOne from "../layout/footer/footer-one";
import BreadcrumbOne from "../components/breadcrumb/breadcrumb-one";
import TeamTwo from "../components/team/team-two";
import CtaTwo from "../components/cta/cta-two";

export default function TeamPage() {
  return (
    <>
      {/* SEO */}
      <SEOCom title="Team Page" />
      {/* SEO */}

      {/* header area start */}
      <HeaderOne />
      {/* header area end */}

      {/* breadcrumb area start */}
      <BreadcrumbOne title="Our Team" subtitle="Team" />
      {/* breadcrumb area end */}

      {/* team area start */}
      <TeamTwo />
      {/* team area end */}

      {/* cta area start */}
      <CtaTwo />
      {/* cta area end */}

      {/* footer start */}
      <FooterOne />
      {/* footer end */}
    </>
  );
}
