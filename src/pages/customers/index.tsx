import Layout from "../../components/Layout";
import ClientBox from "../../components/ClientBox";
import Section from "../../components/Section";

export default function Clients() {
  return (
    <Layout>
      <main>
        <Section header="Who we've helped">
          <ClientBox
            imageAlt="Savvy Property Technology"
            imageUrl="/images/logos/savvy.png"
          >
            <p>
              We redeveloped a Mobile App and Web App for a work-based social
              network, deployed multiple services to Kubernetes on AWS and
              integrated the pipeline with Datadog to monitor the logs and
              performance
            </p>
          </ClientBox>
          <ClientBox
            imageAlt="Home Office"
            imageUrl="/images/logos/home-office.png"
          >
            <p>
              Lead the development of multiple digital services through the GDS
              service assessments embedded in a multi-disicplinary Agile team.
              Open-sourced design-patterns and developed Home Office Forms
            </p>
          </ClientBox>
          <ClientBox
            imageAlt="Old Mutual"
            imageUrl="/images/logos/old-mutual.png"
          >
            <p>
              Engaged with senior stakeholders to transform elements of their
              business, leading to developing and productionising a
              content-discovery Chatbot and internal Lead Tracker service
            </p>
          </ClientBox>
          <ClientBox
            imageAlt="British Gas"
            imageUrl="/images/logos/british-gas.png"
          >
            <p>
              Helped British Gas develop and release the first edition of the
              Web App for Hive home thermostat. Created an accessible online
              thermostat control, brochure site and pyament portal integration
            </p>
          </ClientBox>
        </Section>
      </main>
    </Layout>
  );
}
