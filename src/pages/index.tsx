import Layout from "../components/Layout";
import Section from "../components/Section";
import ServiceBox from "../components/ServiceBox";
import ClientBox from "../components/ClientBox";
import Banner from "../components/Banner";
import ToolBox from "../components/ToolBox";

export default function Index() {
  return (
    <Layout>
      <main>
        <Banner imageUrl="/images/cre-illustrations-1.svg">
          <h1>
            We design and develop high performance software to solve complex
            business problems
          </h1>
          <style jsx>{`
            h1 {
              font-weight: 700;
              font-size: 3.2rem;
              line-height: 1.2;
              letter-spacing: -0.1rem;
              margin: 0 0 3em;
              max-width: 700px;
            }
          `}</style>
        </Banner>
        <Section header="Our Services" subheader="What we do">
          <ServiceBox
            header="Web Development"
            imageUrl="/images/icons/develop-y.svg"
          >
            <p>
              We have over 15 years' experience developing software for the Web,
              and the infrastructure and tooling to support it; including
              Content Management Systems (CMS), custom design, and eCommerce. We
              believe in the open-source community and benefit from all its
              advantages, support and learning.
            </p>
          </ServiceBox>
          <ServiceBox
            header="Cloud Engineering"
            imageUrl="/images/icons/cloud-y.svg"
          >
            <p>
              As cloud engineers we evangelise DevOps best practices, with
              senior commercial experience covering everything from identity and
              access management, through container orchestration to service
              monitoring.
            </p>
          </ServiceBox>
          <ServiceBox
            header="Agile Delivery"
            imageUrl="/images/icons/user-y.svg"
          >
            <p>
              Our goal is to understand what your users need, so they'll want to
              keep them coming back. We believe with collaboration and
              iteratively testing and refining, we'll develop the product most
              appropriate for your requirements.
            </p>
          </ServiceBox>
          <ServiceBox
            header="Support & Maintenance"
            imageUrl="/images/icons/support-y.svg"
          >
            <p>
              We use Site Reliability Engineering techniques to define
              agreements with you that we implement and monitor for success,
              enabling us to respond rapidly to support production issues. We
              can maintain or migrate your legacy services and data to a new
              platform.
            </p>
          </ServiceBox>
        </Section>
        <Section
          header="Our Clients"
          subheader="Who we've helped"
          background="#d6dce2"
        >
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
        <Section header="The Tech Bit" subheader="Software we use">
          <ToolBox header="AWS" imageUrl="/images/logos/aws.svg">
            <p>
              Reliable, secure and cost-effective platform designed to be
              scalable and highly-performant.
            </p>
          </ToolBox>
          <ToolBox
            title="ReactJS"
            header="ReactJS"
            imageUrl="/images/logos/react.svg"
          >
            <p>
              We build build blazing-fast user interfaces in a highly-scalable
              style.
            </p>
          </ToolBox>
          <ToolBox header="Node.js" imageUrl="/images/logos/nodejs.svg">
            <p>We use Javascript on the Server and Client.</p>
          </ToolBox>

          <ToolBox
            title="Kubernetes"
            header="Kubernetes"
            imageUrl="/images/logos/kubernetes.svg"
          >
            <p>Scale resources and applications in real time.</p>
          </ToolBox>
        </Section>
        <Banner id="contact-us" imageUrl="/images/cre-illustrations-2.svg">
          <h2>Contact us</h2>
          <p>
            Email{" "}
            <a href="mailto:hello@creatify.io" title="opens new email">
              hello@creatify.io
            </a>{" "}
            or call{" "}
            <a href="tel:07846233761" title="phone creatify ltd">
              07864233761
            </a>{" "}
            to talk
          </p>
          <style jsx>{`
            h2 {
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
            a {
              color: white;
            }
          `}</style>
        </Banner>
      </main>
    </Layout>
  );
}
