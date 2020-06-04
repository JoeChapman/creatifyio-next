import Layout from "../../components/Layout";
import Banner from "../../components/Banner";
import Section from "../../components/Section";

export default function Index() {
  return (
    <Layout>
      <main>
        <Section>
          <style jsx>{`
            section {
              background-color: #fff;
              padding: 40px 0 100px;
            }
            h1 {
              font-weight: 700;
              font-size: 3.2rem;
              line-height: 1.2;
              letter-spacing: -0.1rem;
              margin: 0.67em 0;
            }
            h2 {
              color: #1e3246;
              font-size: 2.6rem;
              text-align: center;
              margin-bottom: 0;
            }
            h3 {
              color: #1e3246;
              font-size: 2rem;
              text-align: center;
              margin-top: 0;
              margin-bottom: 40px;
            }
          `}</style>
          <div className="column">
            <div className="row">
              <h1>Terms & conditions</h1>
              <p>
                www.creatify.io puts small files (known as ‘cookies’) onto your
                computer to collect information about how you browse the site.
                Find out more about the cookies we use, what they’re for and
                when they expire.
              </p>
            </div>
          </div>
        </Section>
      </main>
    </Layout>
  );
}
