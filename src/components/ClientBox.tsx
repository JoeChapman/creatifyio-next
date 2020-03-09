import Box from "./Box";

export default function ClientBox({
  imageAlt,
  imageUrl,
  text
}: {
  imageAlt: string;
  imageUrl: string;
  text: string;
}) {
  return (
    <Box imageAlt={imageAlt} imageUrl={imageUrl}>
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
    </Box>
    // <div className="box">
    //   <h3>
    //     <img src={imageUrl} alt={header} />
    //   </h3>
    //   <p>{text}</p>

    // </div>
  );
}
