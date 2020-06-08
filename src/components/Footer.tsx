import FootNote from "./FootNote";
import ActiveLink from "./ActiveLink";

const Footer = () => (
  <footer>
    <div className="content row">
      <div className="column">
        <img width="200px" src="/images/cre-logo-b.svg" />
      </div>
      <div className="column">
        <h3>Site</h3>
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
      </div>
      <div className="column">
        <h3>Legal stuff</h3>
        <ul>
          <li>
            <a href="./cookies">Cookies</a>
          </li>
          <li>
            <a href="./privacy">Privacy</a>
          </li>
        </ul>
      </div>
    </div>
    <FootNote
      address="Registered Office: First Floor, Telecom House, 125-135 Preston Road, Brighton, East Sussex, BN1 6AF."
      company="Company limited by guarantee in England and Wales, Company number: 07614146"
    />
    <style jsx>
      {`
        footer {
          background-color: #00aaff;
          color: #fff;
          margin: 0 0 0 0;
          padding: 40px 0 20px;
        }
        h3 {
          margin: 0 0 10px;
        }
        ul {
          margin: 0;
          padding: 0;
        }
        li {
          list-style: none;
        }
        li a {
          color: white;
          text-decoration: none;
          line-height: normal;

          font-size: 1.2rem;
        }
        li a.selected {
          text-decoration: underline;
        }
      `}
    </style>
  </footer>
);

export default Footer;
