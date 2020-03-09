import { ReactNode } from "react";

export default function ToolBox({
  header,
  imageUrl,
  text
}: {
  header: string;
  imageUrl: string;
  text?: string;
}) {
  return (
    <div className="box three">
      <h3>
        <img src={imageUrl} alt={header} />
      </h3>
      <p>{text}</p>
      <style jsx>{`
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
