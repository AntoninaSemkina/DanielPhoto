import {
  ABOUT_PAGE_ROUTE,
  CONTACT_PAGE_ROUTE,
  MAIN_PAGE_ROUTE,
  PORTFOLIO_PAGE_ROUTE,
  SERVICES_PAGE_ROUTE,
} from "../utils/consts";
import MainPage from "../pages/MainPage/MainPage";
import ContactPage from "../pages/ContactPage/ContactPage";
import AboutPage from "../pages/AboutPage/AboutPage";
import PortfolioPage from "../pages/PortfolioPage/PortfolioPage";
import ServicesPage from "../pages/ServicesPage/ServicesPage";

export const publicRoutes = [
  {
    path: MAIN_PAGE_ROUTE,
    Component: MainPage,
  },
  {
    path: CONTACT_PAGE_ROUTE,
    Component: ContactPage,
  },
  {
    path: ABOUT_PAGE_ROUTE,
    Component: AboutPage,
  },
  {
    path: PORTFOLIO_PAGE_ROUTE,
    Component: PortfolioPage,
  },
  {
    path: SERVICES_PAGE_ROUTE,
    Component: ServicesPage,
  },
];
