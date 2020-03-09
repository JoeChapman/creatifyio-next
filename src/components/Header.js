import Link from "next/link";
import Nav from "./Nav";

const Header = () => (
  <header>
    <div className="column row">
      <Link href="/">
        <a id="logo" title="Home page">
          <img src="/images/cre-logo-g.svg" width="220px" alt="Creatify ltd" />
        </a>
      </Link>
      <Nav />
    </div>
    <style jsx>{`
      header {
        position: fixed;
        top: 0;
        width: 100%;
        height: 85px;
        background-color: #1e3246;
      }

      header #logo {
        display: flex;
      }
    `}</style>
  </header>
);

export default Header;
