import Link from "next/link";

const Nav = () => (
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
    <style jsx>{`
      ul {
        display: flex;
      }

      li {
        list-style: none;
        display: inline-flex;
      }
      a {
        color: white;
        text-decoration: none;
        line-height: normal;
        padding: 12px;
        font-size: 1.2rem;
      }
    `}</style>
  </nav>
);

export default Nav;
