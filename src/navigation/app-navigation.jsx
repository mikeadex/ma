import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "../components/scroll-to-top";
import HomePage from "../pages/home";
import HomePageTwo from "../pages/home-2";
import HomePageThree from "../pages/home-3";
import HeaderStyleFour from "../pages/header-style-4";
import HeaderStyleFive from "../pages/header-style-5";
import HeaderStyleSix from "../pages/header-style-6";
import HeaderStyleSeven from "../pages/header-style-7";
import AboutPage from "../pages/about";
import ServicesPage from "../pages/services";
import ServiceDetailsPage from "../pages/service-details";
import ContactPage from "../pages/contact";
import PortfolioPage from "../pages/portfolio";
import PortfolioDetailsPage from "../pages/portfolio-details";
import TeamPage from "../pages/team";
import TeamDetailsPage from "../pages/team-details";
import BlogPage from "../pages/blog";
import BlogDetailsPage from "../pages/blog-details";

export default function AppNavigation() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/home-two" element={<HomePageTwo/>} />
        <Route path="/home-three" element={<HomePageThree/>} />
        <Route path="/header-style-four" element={<HeaderStyleFour/>} />
        <Route path="/header-style-five" element={<HeaderStyleFive/>} />
        <Route path="/header-style-six" element={<HeaderStyleSix/>} />
        <Route path="/header-style-seven" element={<HeaderStyleSeven/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/services" element={<ServicesPage/>} />
        <Route path="/service-details" element={<ServiceDetailsPage/>} />
        <Route path="/portfolio" element={<PortfolioPage/>} />
        <Route path="/portfolio-details" element={<PortfolioDetailsPage/>} />
        <Route path="/team" element={<TeamPage/>} />
        <Route path="/team-details" element={<TeamDetailsPage/>} />
        <Route path="/blogs" element={<BlogPage/>} />
        <Route path="/blog-details" element={<BlogDetailsPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
      </Routes>
    </BrowserRouter>
  );
}
