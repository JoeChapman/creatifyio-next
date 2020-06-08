import Link from "next/link";
import Navigation from "./Navigation";

const Header = () => (
  <header>
    <div className="content row">
      <Link href="/">
        <a id="logo" title="Home page">
          <img src="/images/cre-logo.svg" alt="Creatify ltd" />
        </a>
      </Link>
      <Navigation />
    </div>
    <style jsx>{`
      header {
        position: fixed;
        top: 0;
        width: 100%;
        background-color: white;
        border-bottom: 1px solid #1e3246;
      }
      img {
        width: 14rem;
      }
      .content {
        position: relative;
      }
    `}</style>
  </header>
);

export default Header;
