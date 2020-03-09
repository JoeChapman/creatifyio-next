export default function Box({
  header,
  imageUrl,
  imageAlt,
  children
}: {
  header?: string;
  imageUrl?: string;
  imageAlt?: string;
  children: JSX.Element | JSX.Element[];
}) {
  return (
    <div className="box">
      {header && (
        <h3>
          {imageUrl && <img src={imageUrl} alt={imageAlt} />}
          <span>{header}</span>
        </h3>
      )}
      {imageUrl && (
        <h3>
          <img src={imageUrl} alt={imageAlt} />
        </h3>
      )}
      {children}
      <style jsx>{`
        .box {
          width: 45%;
          min-width: 250px;
        }
        h3 {
          color: #1e3246;
          line-height: 1.5;
          font-size: 2rem;
          margin-bottom: 0;
        }
        img {
          margin-left: -21px;
          width: 7rem;
          height: 50px;
          vertical-align: bottom;
        }
      `}</style>
    </div>
  );
}
