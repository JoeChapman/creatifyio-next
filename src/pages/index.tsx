import Layout from "../components/Layout";
import Section from "../components/Section";
import Banner from "../components/Banner";
import ActiveLink from "../components/ActiveLink";

export default function Index() {
  return (
    <Layout>
      <main>
        <Section>
          <div id="words" className="column">
            <h1>
              Creatify is a community of experienced software consultants
              specialising in delivering value to our customers
            </h1>
            <p>
              We thrive on delivering digital services to the highest quality
              through user research, outcome validation, iterative Agile
              delivery and cooperative product management.
            </p>
            <ul>
              <li>
                Read more on how we{" "}
                <ActiveLink href="/services" activeClassName="selected">
                  <a>deliver digital services</a>
                </ActiveLink>{" "}
                to our customers
              </li>
              <li>
                Find out who{" "}
                <ActiveLink href="/customers" activeClassName="selected">
                  <a>who we've helped</a>
                </ActiveLink>{" "}
                to realise their goals
              </li>
              <li>
                Want to know how we could help you?{" "}
                <ActiveLink href="/contact" activeClassName="selected">
                  <a>Get in touch</a>
                </ActiveLink>{" "}
                and we can find out what your goals are
              </li>
            </ul>
            <style jsx>{`
              h1 {
                font-weight: 700;
                font-size: 3.2rem;
                line-height: 1.2;
                letter-spacing: -0.1rem;
                max-width: 700px;
              }
              #words {
                width: 50%;
              }
              @media only screen and (max-width: 1000px) {
                #words {
                  width: 100%;
                }
              }
            `}</style>
          </div>
          <div id="image" className="column ">
            <img src="/images/cre-illustrations-1.svg" />
            <style jsx>{`
              #image {
                width: 50%;
              }
              @media only screen and (max-width: 1000px) {
                #image {
                  display: none;
                  width: 0;
                }
              }
            `}</style>
          </div>
        </Section>
        <Section>
          <div className="column">
            <h2>We are a community</h2>
            <p>
              Our community is a network of experts in software and digital
              product development that scale as necessary to support each other
              and get results. We've spent our time in the trenches together and
              know what it takes to drive quality and standards that deliver
              high value outcomes. We are proud to be able to depend on each
              other to reach that goal.
            </p>
            <h2>We are experienced</h2>
            <p>
              Our experiences at all levels of software delivery provide us with
              a solid foundation of expertise to call upon. In short, we are
              greater than the sum of our parts. From software engineering,
              DevOps & Cloud, user research and service design, to product
              management and interaction design, we're confident in our
              capabilities.
            </p>
            <h2>We take leadership seriously</h2>
            <p>
              We understand that a team needs to pull together and move in the
              same direction to accomplish great things, and that individuals
              need to space and time to grow. We belive the best way to do this
              is by mapping the way and setting expectations, while coaching and
              nudging others along the way, to unlock their potential.
            </p>
          </div>
        </Section>
      </main>
    </Layout>
  );
}
