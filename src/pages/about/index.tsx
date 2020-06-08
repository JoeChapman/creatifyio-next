import Layout from "../../components/Layout";
import Section from "../../components/Section";

export default function About() {
  return (
    <Layout>
      <main>
        <Section header="Who we are" background="rgb(245, 247, 249)">
          <div className="column">
            <div className="row">
              <p>
                We a re a digital consultancy working with the public and
                private sector to research, design, build, digital
                transformation, and develop services.
              </p>
            </div>
          </div>
        </Section>
      </main>
    </Layout>
  );
}
