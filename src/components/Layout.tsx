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
    <style jsx global>{`
      body {
        margin: 0;
        padding: 0;
        font-family: "Raleway", "HelveticaNeue", "Helvetica Neue", Helvetica,
          Arial, sans-serif;
        font-size: 100%;
        font-weight: 400;
        -webkit-font-smoothing: antialiased;
        line-height: 1.6;
      }

      p {
        color: black;
        font-size: 1.12rem;
        line-height: 1.7;
      }
      main {
        margin-top: 85px;
      }
      .row {
        flex-flow: row wrap;
        display: flex;
        justify-content: space-between;
      }
      .content {
        width: 65%;
        margin: 0 auto;
      }
      .three {
        width: 25%;
      }
    `}</style>
    <Footer />
    <CookieConsent>
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
    </CookieConsent>
  </div>
);

export default Layout;
