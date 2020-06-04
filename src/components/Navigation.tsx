import classNames from "classnames";
import { useState, useEffect } from "react";
import Link from "next/link";
import Router from "next/router";

const Navigation = () => {
  const handleToggle = (e: React.SyntheticEvent) => {
    e.currentTarget.classList.toggle("change");
    e.currentTarget.nextElementSibling!.classList.toggle("expanded");
  };

  const [path, setPath] = useState("");

  const updatePath = () => {
    setPath(Router.pathname + location.hash);
    setTimeout(() => {
      if (location.hash) {
        location = location;
      }
    }, 0);
  };

  const hashChangeTo = (targetHash: string) => {
    console.log(targetHash);
    return () => {
      if (targetHash === location.hash) return;

      const detectHash = () => {
        if (location.hash === targetHash) {
          updatePath();
        } else {
          requestAnimationFrame(detectHash);
        }
      };
      requestAnimationFrame(detectHash);
    };
  };

  useEffect(() => {
    hashChangeTo(location.hash);
  }, [path]);

  return (
    <nav>
      <a href="#menu" aria-hidden="true" onClick={handleToggle}></a>
      <ul>
        <li>
          <Link href="/#our-services">
            <a
              onClick={hashChangeTo("#our-services")}
              className={classNames({
                active: path.includes("#our-services"),
              })}
            >
              Services
            </a>
          </Link>
        </li>
        <li>
          <Link href="/#our-clients">
            <a
              onClick={hashChangeTo("#our-clients")}
              className={classNames({
                active: path.includes("#our-clients"),
              })}
            >
              Clients
            </a>
          </Link>
        </li>
        <li>
          <Link href="/#contact-us">
            <a
              onClick={hashChangeTo("#contact-us")}
              className={classNames({
                active: path.includes("#contact-us"),
              })}
            >
              Contact
            </a>
          </Link>
        </li>
      </ul>

      <style jsx>{`
        nav {
          position: absolute;
          right: 0;
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
          border-top: 0.125em solid #fff;
          transition: all 0.2s ease-in-out;
        }
        a[href="#menu"]::before {
          content: "";
          position: absolute;
          right: 0;
          width: 1em;
          height: 0.125em;
          top: 0.25em;
          border-top: 0.125em solid #fff;
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
          border-bottom: 0.125em solid #fff;
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
        a.active {
          text-decoration: underline;
        }
        @media only screen and (max-width: 1000px) {
          a[href="#menu"] {
            display: block;
          }
          ul {
            display: none;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
            box-shadow: #00aaff 17px 12px 0px;
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
          a:hover {
            text-decoration: underline;
          }
          ul.expanded {
            display: block;
            background-color: #1e3246;
            margin-top: 70px;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navigation;
