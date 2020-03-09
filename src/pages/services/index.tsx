import Layout from "../../components/Layout";
import Banner from "../../components/Banner";

export default function Services() {
  return (
    <Layout>
      <main>
        <Banner imageUrl="/images/cre-illustrations-1.svg">
          <h1>Services</h1>
          <style jsx>{`
            h1 {
              font-weight: 700;
              font-size: 3.2rem;
              line-height: 1.2;
              letter-spacing: -0.1rem;
              margin: 0.67em 0;
            }

            p {
              color: white;
              text-align: left;
              margin: 0 0 2rem;
              font-size: 1.7rem;
            }
          `}</style>
        </Banner>
      </main>
    </Layout>
  );
}
