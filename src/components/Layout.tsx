import Header from "./Header";
import Footer from "./Footer";
import CookieConsent from "react-cookie-consent";

const layoutStyle = {
  margin: 0,
  padding: 0,
};

const Layout = ({ children }: { children: JSX.Element }) => (
  <div style={layoutStyle}>
    <Header />
    {children}

    <Footer />
    <CookieConsent
      style={{ background: "black" }}
      buttonStyle={{ color: "#4e503b", fontSize: "15px", borderRadius: "5px" }}
    >
      We use{" "}
      <a
        href="http://www.bbc.co.uk/webwise/guides/about-cookies"
        target="http://www.bbc.co.uk/webwise/guides/about-cookies"
      >
        cookies
      </a>{" "}
      to improve the user experience, scroll to accept our{" "}
      <a href="/cookies" target="cookies">
        cookie policy
      </a>
      <style jsx>{`
        a {
          color: white;
        }
      `}</style>
    </CookieConsent>
  </div>
);

export default Layout;
