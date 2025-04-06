import SEOCom from "../components/seo";
import HeaderOne from "../layout/header/header-one";
import BreadcrumbOne from "../components/breadcrumb/breadcrumb-one";
import BlogAreaTwo from "../components/blog/blog-area-two";
import FooterFour from "../layout/footer/footer-four";

export default function BlogPage() {
  return (
    <>
      {/* SEO */}
      <SEOCom title="Blog Page" />
      {/* SEO */}

      {/* header area start */}
      <HeaderOne />
      {/* header area end */}

      {/* breadcrumb area start */}
      <BreadcrumbOne title="Our Blog" subtitle="Blog" />
      {/* breadcrumb area end */}

      {/* blog area start */}
      <BlogAreaTwo/>
      {/* blog area end */}

      {/* footer start */}
      <FooterFour />
      {/* footer end */}
    </>
  );
}
