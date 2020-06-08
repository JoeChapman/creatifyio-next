import Link from "next/link";
import ActiveLink from "./ActiveLink";

const Navigation = () => {
  const handleToggle = (e: React.SyntheticEvent) => {
    e.currentTarget.classList.toggle("change");
    e.currentTarget.parentElement!.classList.toggle("expanded");
  };
  return (
    <nav>
      <a href="#menu" aria-hidden="true" onClick={handleToggle}></a>
      <ul>
        <li>
          <ActiveLink href="/" activeClassName="selected">
            <a>About us</a>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/services" activeClassName="selected">
            <a>Our services</a>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/customers" activeClassName="selected">
            <a>Our customers</a>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/contact" activeClassName="selected">
            <a>Contact us</a>
          </ActiveLink>
        </li>
      </ul>

      <style jsx>{`
        nav {
          position: absolute;
          right: 0;
          height: 100%;
        }
        ul {
          display: flex;
          margin: 0;
          height: 100%;
        }
        li {
          list-style: none;
          display: inline-flex;
        }
        li a:link,
        li a:active,
        li a:visited {
          color: #1f3346;
          text-decoration: none;
          line-height: 3.4;
          padding: 12px;
          font-size: 1.2rem;
        }
        li a.selected {
          text-decoration: underline;
          color: #00aaff;
        }
        a[href="#menu"] {
          display: none;
          position: absolute;
          background: none;
          font-size: 2em;
          top: 22px;
          content: "";
          right: 0;
          width: 0.25em;
          padding: 12px;
          border-top: 0.125em solid #1f3346;
          transition: all 0.2s ease-in-out;
        }
        a[href="#menu"]::before {
          content: "";
          position: absolute;
          right: 0;
          width: 1em;
          height: 0.125em;
          top: 0.25em;
          border-top: 0.125em solid #1f3346;
          -webkit-transition: all 0.2s ease-in-out;
          transition: all 0.2s ease-in-out;
        }
        a[href="#menu"]::after {
          content: "";
          position: absolute;
          top: 0.1em;
          right: 0;
          width: 1em;
          height: 0.5em;
          border-bottom: 0.125em solid #1f3346;
          -webkit-transition: all 0.2s ease-in-out;
          transition: all 0.2s ease-in-out;
        }
        a[href="#menu"].change {
          -webkit-transform: rotate(-45deg) translate(-9px, 6px);
          transform: rotate(-45deg) translate(-9px, 6px);
        }
        a[href="#menu"].change::before {
          opacity: 0;
        }
        a[href="#menu"].change::after {
          -webkit-transform: rotate(90deg) translate(-14px, -9px);
          transform: rotate(90deg) translate(-14px, -9px);
        }
        @media only screen and (max-width: 1000px) {
          a[href="#menu"] {
            display: block;
          }
          ul {
            display: none;
          }
          li {
            list-style: none;
            display: block;
            text-align: right;
          }
          a {
            display: block;
            line-height: 1.5;
          }
          nav.expanded ul li a:link,
          nav.expanded ul li a:active,
          nav.expanded ul li a:visited {
            color: #1f3346;
            text-decoration: none;
            line-height: 2.4;
            padding: 5px;
            font-size: 1.2rem;
          }
          li a:hover {
            text-decoration: underline;
          }
          nav.expanded {
            position: relative;
          }
          nav.expanded ul {
            height: auto;
            display: block;
            background-color: #fff;
            margin-top: 79px;
            margin-bottom: 50px;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navigation;
