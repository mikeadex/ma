import SEOCom from "../components/seo";
import HeaderOne from "../layout/header/header-one";
import BreadcrumbOne from "../components/breadcrumb/breadcrumb-one";
import FooterFour from "../layout/footer/footer-four";
import BlogDetailsArea from "../components/blog/blog-details-area";

export default function BlogDetailsPage() {
  return (
    <>
      {/* SEO */}
      <SEOCom title="Blog Details Page" />
      {/* SEO */}

      {/* header area start */}
      <HeaderOne />
      {/* header area end */}

      {/* breadcrumb area start */}
      <BreadcrumbOne title="Blog Details" subtitle="Blog Details" />
      {/* breadcrumb area end */}

      {/* blog details area start */}
      <BlogDetailsArea/>
      {/* blog details area end */}

      {/* footer start */}
      <FooterFour />
      {/* footer end */}
    </>
  );
}
