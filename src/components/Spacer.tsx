export default function Spacer({
  color,
  height,
  width
}: {
  color: string;
  height: string;
  width: string;
}) {
  return (
    <>
      <hr />
      <style jsx>{`
        hr {
          height: ${height};
          width: ${width};
          background: ${color};
          margin: 0;
          border: 0;
        }
      `}</style>
    </>
  );
}
