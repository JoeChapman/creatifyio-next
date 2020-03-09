import Layout from "../../components/Layout";
import Banner from "../../components/Banner";
import Section from "../../components/Section";
import Box from "../../components/Box";

export default function Index() {
  return (
    <Layout>
      <main>
        <Banner imageUrl="/images/cre-illustrations-1.svg">
          <h1>Our cookie Policy</h1>
          <p>
            www.creatify.io puts small files (known as ‘cookies’) <br />
            onto your computer to collect information about how you <br />{" "}
            browse the site. <br />
            Find out more about the cookies we use, what they’re for <br /> and
            when they expire.
          </p>
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
        <section>
          <style jsx>{`
            section {
              background-color: #fff;
              padding: 40px 0 100px;
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
              <h2>Cookies that measure website use</h2>
              <p>
                We use Google Analytics software (Universal Analytics) to
                collect anonymised information about how you use creatify.io. We
                do this to help make sure the site is meeting the needs of its
                users and to help us make improvements to the site.
              </p>
            </div>
            <div className="row">
              <h2>Google Analytics stores information about:</h2>
            </div>
            <div className="row">
              <ul>
                <li>how you got to the site</li>
                <li>
                  the pages you visit on creatify.io and how long you spend on
                  them
                </li>
                <li>what you click on while you’re visiting the site</li>
                Google Analytics sets the following cookies.
              </ul>
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
        </section>
      </main>
    </Layout>
  );
}
