export default function ServiceBox({
  header,
  imageUrl,
  children,
}: {
  header: string;
  imageUrl: string;
  children: JSX.Element;
}) {
  return (
    <div className="box">
      <h3>
        <img src={imageUrl} alt={header} />
        <span>{header}</span>
      </h3>
      {children}
      <style jsx>{`
        .box {
          width: 45%;
          min-width: 280px;
        }
        h3 {
          color: #1e3246;
          line-height: 1.5;
          font-size: 2rem;
          margin-bottom: 0;
        }
        span {
          padding-left: 4px;
        }
        img {
          width: 3.5rem;
          height: 40px;
          vertical-align: text-top;
        }
      `}</style>
    </div>
  );
}
