import Link from "next/link";
import FootNote from "./FootNote";

const Footer = () => (
  <footer>
    <div className="content">
      <div className="row">
        <img src="/images/cre-logo-b.svg" />
      </div>
      <div className="row">
        <nav>
          <ul>
            <li>
              <Link href="/services">
                <a title="Services Page">our services</a>
              </Link>
            </li>
            <li>
              <Link href="/clients">
                <a title="Clients page">our work</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a title="Contact us">contact us</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="row">
        <ul>
          <li>
            <a href="./cookies">Cookie Policy</a>
          </li>
          <li>
            <a href="./terms">Terms & Conditions</a>
          </li>
        </ul>
      </div>
    </div>
    <div className="content">
      <div className="row">
        <FootNote
          address="Registered Office: First Floor, Telecom House, 125-135 Preston Road, Brighton, East Sussex, BN1 6AF."
          company="Company limited by guarantee in England and Wales, Company number: 07614146"
        />
      </div>
    </div>
    <style jsx>
      {`
        footer {
          background-color: #00aaff;
          color: #fff;
          margin: 0 0 0 0;
          padding: 30px 0 0 0;
        }
      `}
    </style>
  </footer>
);

export default Footer;
