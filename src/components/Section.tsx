import { ReactChildren, ReactChild } from "react";

export default function Section({
  header,
  subheader,
  background = "white",
  children
}: {
  header: string;
  subheader?: string;
  background?: string;
  children: JSX.Element | JSX.Element[];
}) {
  return (
    <section>
      <div className="content">
        <h2>{header}</h2>
        <h3>{subheader}</h3>
        <div className="row">{children}</div>
      </div>
      <style jsx>{`
        section {
          background-color: ${background};
          padding: 40px 0 100px;
        }
        h2 {
          color: #1e3246;
          font-size: 2.6rem;
          text-align: center;
          margin-bottom: 0;
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
