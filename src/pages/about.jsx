import SEOCom from "../components/seo";
import HeaderOne from "../layout/header/header-one";
import FooterOne from "../layout/footer/footer-one";
import BreadcrumbOne from "../components/breadcrumb/breadcrumb-one";
import AboutOne from "../components/about/about-one";
import FaqOne from "../components/faq/faq-one";
import AchievementOne from "../components/achievement/achievement-one";
import BrandOne from "../components/brand/brand-one";

export default function AboutPage() {
  return (
    <>
      {/* SEO */}
      <SEOCom title="About Page" />
      {/* SEO */}

      {/* header area start */}
      <HeaderOne />
      {/* header area end */}

      {/* breadcrumb area start */}
      <BreadcrumbOne title="About us" subtitle="About" />
      {/* breadcrumb area end */}

      {/* about area start */}
      <AboutOne />
      {/* about area end */}

      {/* faq area start */}
      <FaqOne />
      {/* faq area end */}

      {/* achievement area start */}
      <AchievementOne />
      {/* achievement area end */}

      {/* brand area start */}
      <BrandOne />
      {/* brand area end */}

      {/* footer start */}
      <FooterOne />
      {/* footer end */}
    </>
  );
}
