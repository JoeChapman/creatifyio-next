import Layout from "../components/Layout";
import Section from "../components/Section";
import Box from "../components/Box";
import ClientBox from "../components/ClientBox";
import Banner from "../components/Banner";
import ToolBox from "../components/ToolBox";

export default function Index() {
  return (
    <Layout>
      <main>
        <Banner imageUrl="/images/cre-illustrations-1.svg">
          <h1>
            User focused digital solutions
            <br /> & product development
          </h1>
          <p>
            We build and support high performance software
            <br /> to solve complex business problems
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
        <Section
          header="Our Services"
          subheader="Skills and experience we bring"
        >
          <Box header="Web Development" imageUrl="/images/icons/develop-y.svg">
            <p>
              We have over 15 years' experience developing software for the Web,
              and the infrastructure and tooling to support it; including
              Content Management Systems (CMS), custom design, and eCommerce. We
              believe in the open-source community and benefit from all its
              advantages, support and learning.
            </p>
          </Box>
          <Box header="Cloud Engineering" imageUrl="/images/icons/cloud-y.svg">
            <p>
              As cloud engineers we evangelise DevOps best practices, with
              senior commercial experience covering everything from identity and
              access management, through container orchestration to service
              monitoring.
            </p>
          </Box>
          <Box header="Agile Delivery" imageUrl="/images/icons/user-y.svg">
            <p>
              Our goal is to understand your what your users need so you can
              give them what they want and keep them coming back. We believe
              through collaboration and iteratively testing and refining
              together we will develop the solution to your business needs. That
              could be more bums-on-seats, or the discovery of ways to employ
              the skills you already have.
            </p>
          </Box>
          <Box
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
          </Box>
        </Section>
        <Section
          header="Our Work"
          subheader="Clients we've helped"
          background="#d6dce2"
        >
          <ClientBox
            imageAlt="Savvy Property Technology"
            imageUrl="/images/logos/savvy.png"
            text="We redeveloped a Mobile App and Web App for a work-based social
            network, deployed multiple services to Kubernetes on AWS and
            integrated the pipeline with Datadog to monitor the logs and
            performance"
          />
          <ClientBox
            imageAlt="Home Office"
            imageUrl="/images/logos/home-office.png"
            text="Lead the development of multiple digital services through the GDS
            service assessments embedded in a multi-disicplinary Agile team. Open-sourced design-patterns and developed Home Office Forms"
          />
          <ClientBox
            imageAlt="Old Mutual"
            imageUrl="/images/logos/old-mutual.png"
            text="Engaged with senior stakeholders to transform elements of their
            business, leading to developing and productionising a
            content-discovery Chatbot and internal Lead Tracker service"
          />
          <ClientBox
            imageAlt="British Gas"
            imageUrl="/images/logos/british-gas.png"
            text="Helped British Gas develop and release the first edition of the Web App for Hive home thermostat. Created an accessible online thermostat control, brochure site and pyament portal integration"
          />
        </Section>
        <Section
          header="Our tools"
          subheader="Software, platforms and tools for online solutions"
        >
          <ToolBox header="AWS" imageUrl="/images/logos/aws.svg" />
          <ToolBox
            header="Kubernetes"
            imageUrl="/images/logos/kubernetes.svg"
          />
          <ToolBox header="Node.js" imageUrl="/images/logos/nodejs.svg" />
          <ToolBox header="ReactJS" imageUrl="/images/logos/react.svg" />
        </Section>
        <Banner imageUrl="/images/cre-illustrations-2.svg">
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
