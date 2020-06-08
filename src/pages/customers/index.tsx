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
              Lead the development of a Mobile App and Web App for a work-based
              social network. Architected and provisioned the infrastructure for
              multiple services using containerisation in the Cloud and
              integrated the system with Datadog to monitor logs and
              performance.
            </p>
          </ClientBox>
          <ClientBox
            imageAlt="Home Office"
            imageUrl="/images/logos/home-office.png"
          >
            <p>
              Lead a development team in the delivery of multiple digital
              services through GDS service assessments, embedded in a
              multi-disicplinary Agile team. Open-sourced design-patterns and
              developed reused Web forms framework.
            </p>
          </ClientBox>
          <ClientBox
            imageAlt="Old Mutual"
            imageUrl="/images/logos/old-mutual.png"
          >
            <p>
              Engaged with senior stakeholders to transform elements of their
              business, leading to developing and productionising a
              content-discovery Chatbot and internal Lead Tracker service.
            </p>
          </ClientBox>
          <ClientBox
            imageAlt="British Gas"
            imageUrl="/images/logos/british-gas.png"
          >
            <p>
              Helped British Gas develop and release the first edition of the
              Web App for Hive home thermostat. Created an accessible online
              thermostat control, brochure site and pyament portal integration.
            </p>
          </ClientBox>
        </Section>
      </main>
    </Layout>
  );
}
