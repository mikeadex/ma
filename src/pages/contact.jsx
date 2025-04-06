import SEOCom from "../components/seo";
import HeaderOne from "../layout/header/header-one";
import FooterOne from "../layout/footer/footer-one";
import BreadcrumbOne from "../components/breadcrumb/breadcrumb-one";
import ContactInfoArea from "../components/contact/contact-info-area";
import ContactTwo from "../components/contact/contact-two";

export default function ContactPage() {
  return (
    <>
      {/* SEO */}
      <SEOCom title="Contact Page" />
      {/* SEO */}

      {/* header area start */}
      <HeaderOne />
      {/* header area end */}

      {/* breadcrumb area start */}
      <BreadcrumbOne title="Contact Us" subtitle="Contact" />
      {/* breadcrumb area end */}

      {/* contact info area start */}
      <ContactInfoArea/>
      {/* contact info area end */}

      {/* contact area start */}
      <ContactTwo/>
      {/* contact area end */}

      {/* footer start */}
      <FooterOne />
      {/* footer end */}
    </>
  );
}
