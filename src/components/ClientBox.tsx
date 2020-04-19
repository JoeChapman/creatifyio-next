export default function ClientBox({
  imageAlt,
  imageUrl,
  children
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
          min-width: 250px;
        }
        h3 {
          color: #1e3246;
          text-align: center;
        }
        img {
          height: 75px;
        }
      `}</style>
    </div>
  );
}
