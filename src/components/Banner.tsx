const Banner = ({
  imageUrl,
  id,
  children,
}: {
  imageUrl: string;
  id?: string;
  children: JSX.Element[];
}) => (
  <section id={id} className="banner">
    <div className="content">{children}</div>
    <style jsx>{`
      .banner {
        background-image: url(${imageUrl});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: right 200px top 0;
        background-blend-mode: multiply;
        background-color: #1e3246;
        color: white;
        padding: 110px 0;
      }
    `}</style>
  </section>
);

export default Banner;
