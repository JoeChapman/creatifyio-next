const Banner = ({
  imageUrl,
  id,
  children,
}: {
  imageUrl: string;
  id?: string;
  children: JSX.Element | JSX.Element[];
}) => (
  <section id={id} className="banner">
    <div className="content">{children}</div>
    <style jsx>{`
      .banner {
        background-image: url(${imageUrl});
        background-size: 35em;
        background-repeat: no-repeat;
        background-position: right 20% top 20%;
        background-blend-mode: multiply;
        padding: 110px 0;
      }
    `}</style>
  </section>
);

export default Banner;
