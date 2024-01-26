import React from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import Sidebar from "../../components/common/Sidebar";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import Box from "@mui/material/Box";
const sideBarWidth = 270;
const Layout = ({ children, title, description, keywords, author }) => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const protectedNavbar = () => {
    switch (location.pathname) {
      case "/login":
        return null;
      case "/create-account":
        return null;
      default:
        return (
          <Navbar
            sideBarWidth={sideBarWidth}
            handleDrawerToggle={handleDrawerToggle}
          />
        );
    }
  };
  const protectedHeader = () => {
    switch (location.pathname) {
      case "/login":
        return null;
      case "/create-account":
        return null;
      default:
        return (
          <Sidebar
            sideBarWidth={sideBarWidth}
            mobileOpen={mobileOpen}
            handleDrawerToggle={handleDrawerToggle}
          />
        );
    }
  };
  const protectedFooter = () => {
    switch (location.pathname) {
      case "/login":
        return null;
      case "/create-account":
        return null;
      case "/coming-soon":
        return null;
      default:
        return <Footer />;
    }
  };
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <Navbar
          sideBarWidth={sideBarWidth}
          handleDrawerToggle={handleDrawerToggle}
        />
        <Sidebar
          sideBarWidth={sideBarWidth}
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
        />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            px: { xs: 1, md: 2 },
            width: { xs: "100%", md: `calc(100% - ${sideBarWidth}px)` },
          }}
        >
          <Helmet>
            <meta charSet="utf-8" />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author} />
            <title>{title}</title>
          </Helmet>
          {protectedNavbar()}
          {protectedHeader()}
          <main>{children}</main>
        </Box>
      </Box>
    </div>
  );
};

Layout.defaultProps = {
  title: "DTLS",
  keywords: "DTLS, dtls,Bahirdar,Ethiopia",
  author: "DTLS",
};

export default Layout;
