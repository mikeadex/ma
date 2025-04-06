import SEOCom from "../components/seo";
import HeaderOne from "../layout/header/header-one";
import FooterOne from "../layout/footer/footer-one";
import BreadcrumbTwo from "../components/breadcrumb/breadcrumb-two";
import ServiceDetailsArea from "../components/services/service-details-area";

export default function ServiceDetailsPage() {
  return (
    <>
      {/* SEO */}
      <SEOCom title="Service Details Page" />
      {/* SEO */}

      {/* header area start */}
      <HeaderOne />
      {/* header area end */}

      {/* breadcrumb area start */}
      <BreadcrumbTwo
        title="Team Management Brand strategy."
        subtitle="UX Design"
      />
      {/* breadcrumb area end */}

      {/* service details area start */}
      <ServiceDetailsArea/>
      {/* service details area end */}

      {/* footer start */}
      <FooterOne />
      {/* footer end */}
    </>
  );
}
