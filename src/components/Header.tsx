import Link from "next/link";
import Navigation from "./Navigation";

const Header = () => (
  <header>
    <div className="content row">
      <Link href="/">
        <a id="logo" title="Home page">
          <img src="/images/cre-logo-g.svg" width="220px" alt="Creatify ltd" />
        </a>
      </Link>
      <Navigation />
    </div>
    <style jsx>{`
      header {
        position: fixed;
        top: 0;
        width: 100%;
        height: 85px;
        background-color: #1e3246;
      }
      .content {
        position: relative;
      }
    `}</style>
  </header>
);

export default Header;
