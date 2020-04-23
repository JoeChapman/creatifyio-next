export default function ToolBox({
  header,
  imageUrl,
  title,
  children,
}: {
  header: string;
  imageUrl: string;
  title?: string;
  children?: JSX.Element;
}) {
  return (
    <div className="box">
      <h3>
        <img src={imageUrl} alt={header} />
        <span>{title}</span>
      </h3>
      {children}
      <style jsx>{`
        .box {
          width: 25%;
          min-width: 260px;
          text-align: center;
        }
        h3 {
          color: #1e3246;
          width: auto;
          height: auto;
          max-width: 150px;
          margin: 0 auto;
          text-align: center;
        }
        img {
          height: auto;
          width: 150px;
        }
      `}</style>
    </div>
  );
}
