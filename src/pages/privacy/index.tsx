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
            ol,
            ol li ol li {
              padding: 0;
              margin: 0;
              list-style-position: inside;
            }
            ol > li {
              font-weight: bold;
            }
            ol li ol li {
              font-weight: normal;
              list-style: lower-roman;
              padding: 10px;
              list-style-position: inside;
            }
          `}</style>
          <div className="column">
            <div className="row">
              <h1>Privacy</h1>
            </div>
            <div className="row">
              <ol>
                <li>
                  Introduction
                  <ol>
                    <li>
                      We are committed to safeguarding the privacy of our
                      website visitors and service users.
                    </li>
                    <li>
                      This policy applies where we are acting as a data
                      controller with respect to the personal data of [our
                      website visitors and service users]; in other words, where
                      we determine the purposes and means of the processing of
                      that personal data.
                    </li>
                    <li>
                      We use cookies on our website. Insofar as those cookies
                      are not strictly necessary for the provision of [our
                      website and services], we will ask you to consent to our
                      use of cookies when you first visit our website.
                    </li>
                    <li>
                      Our website incorporates privacy controls which affect how
                      we will process your personal data. By using the privacy
                      controls, you can [specify whether you would like to
                      receive direct marketing communications and limit the
                      publication of your information]. You can access the
                      privacy controls via [URL].
                    </li>
                  </ol>
                </li>
              </ol>
            </div>
          </div>
        </Section>
      </main>
    </Layout>
  );
}
