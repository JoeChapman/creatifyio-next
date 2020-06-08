import Layout from "../../components/Layout";
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
            th {
              text-align: left;
            }
            td {
              padding: 10px 60px 10px 0;
            }
          `}</style>
          <div className="column">
            <div className="row">
              <h1>Cookies</h1>
              <p>
                Cookies are small files we put onto your browser to collect
                information about how you browse the site. Find out more about
                the cookies we use, what they’re for and when they expire.
              </p>
            </div>
            <div className="row">
              <p>
                <strong>Cookies that measure website use</strong>
              </p>
              <p>
                We use Google Analytics software (Universal Analytics) to
                collect anonymised information about how you use this website.
                We do this to help make sure the site is meeting the needs of
                its users and to help us make improvements to the site.
              </p>
            </div>
            <div className="row">
              <p>
                <strong>Google Analytics stores information about:</strong>
              </p>
            </div>
            <div className="row">
              <ul>
                <li>how you got to the site</li>
                <li>
                  the pages you visit on creatify.io and how long you spend on
                  them
                </li>
                <li>what you click on while you’re visiting the site</li>
              </ul>
            </div>
            <div className="row">
              <p>
                <strong>Google Analytics sets the following cookies</strong>
              </p>
            </div>
            <div className="row">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Purpose</th>
                    <th>Expires</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>_ga</td>
                    <td>
                      These help us count how many people visit creatify.io by
                      tracking if you’ve visited before
                    </td>
                    <td>2 years</td>
                  </tr>
                  <tr>
                    <td>_gid</td>
                    <td>
                      These help us count how many people visit creatify.io by
                      tracking if you’ve visited before
                    </td>
                    <td>24 hours</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Section>
      </main>
    </Layout>
  );
}
