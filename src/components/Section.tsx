import { ReactChildren, ReactChild } from "react";

export default function Section({
  header,
  subheader,
  background = "white",
  children,
}: {
  header?: string;
  subheader?: string;
  background?: string;
  children: JSX.Element | JSX.Element[];
}) {
  return (
    <section>
      <div className="content">
        {header && <h2>{header}</h2>}
        {subheader && <h3>{subheader}</h3>}
        <div className="row">{children}</div>
      </div>
      <style jsx>{`
        section {
          background: ${background};
          padding: 40px 0;
        }
        h2 {
          color: #1e3246;
          font-size: 2.6rem;
          text-align: center;
        }
        h3 {
          color: #1e3246;
          font-size: 2rem;
          text-align: center;
          margin-top: 0;
          margin-bottom: 40px;
        }
      `}</style>
    </section>
  );
}
