import { Helmet } from "react-helmet-async";

const SEOCom = ({ title }) => {
  return (
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title ? `${title} - Zibber` : 'Zibber - Consulting React Template'}</title>
        <meta name="robots" content="noindex, follow" />
        <meta name="description" content="MYKD eSports and Gaming React Template" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Helmet>
  );
};

export default SEOCom;