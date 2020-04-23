import Link from "next/link";
import FootNote from "./FootNote";

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
            <Link href="/#our-services">
              <a title="Services Page">Services</a>
            </Link>
          </li>
          <li>
            <Link href="/#our-clients">
              <a title="Clients page">Clients</a>
            </Link>
          </li>
          <li>
            <Link href="/#contact-us">
              <a title="Contact us">Contact</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="column">
        <h3>Legal stuff</h3>
        <ul>
          <li>
            <a href="./cookies">Cookie Policy</a>
          </li>
          <li>
            <a href="./terms">Terms & Conditions</a>
          </li>
        </ul>
      </div>
      <div className="columns">
        <ul>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/creatify-limited-813746145/"
              title="Linkedin"
            >
              <img
                src="/images/logos/linkedin.svg"
                width="30px"
                alt="linkedin"
              />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://github.com/JoeChapman"
              title="Github"
            >
              <img src="/images/logos/github.svg" width="30px" alt="github" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://twitter.com/social_creatify"
              title="Twitter"
            >
              <img src="/images/logos/twitter.svg" width="30px" alt="twitter" />
            </a>
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
          padding: 12px 0;
          font-size: 1.2rem;
        }
      `}
    </style>
  </footer>
);

export default Footer;
