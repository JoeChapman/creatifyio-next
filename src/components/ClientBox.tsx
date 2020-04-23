export default function ClientBox({
  imageAlt,
  imageUrl,
  children,
}: {
  imageAlt: string;
  imageUrl: string;
  children: JSX.Element;
}) {
  return (
    <div className="box">
      <h3>
        <img src={imageUrl} alt={imageAlt} />
      </h3>
      {children}
      <style jsx>{`
        .box {
          width: 45%;
          min-width: 200px;
          margin-bottom: 20px;
        }
        h3 {
          color: #1e3246;
          width: auto;
          height: auto;
          max-width: 200px;
          margin: 0 auto;
        }
        img {
          height: auto;
          width: 200px;
        }
      `}</style>
    </div>
  );
}
