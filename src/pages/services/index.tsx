import Layout from "../../components/Layout";
import ServiceBox from "../../components/ServiceBox";
import Section from "../../components/Section";

export default function Services() {
  return (
    <Layout>
      <main>
        <Section header="What we do">
          <ServiceBox
            header="Agile software development"
            imageUrl="/images/icons/support-y.svg"
          >
            <p>
              We adopted Agile to create and respond to change. Understanding
              the environment that we're in today, identifying what
              uncertainties we're facing, and calculating how to adapt and
              progress.
            </p>
            <p>We use the following practices to adapt and progress;</p>
            <ul>
              <li>Developing small, incremental releases and iterating</li>
              <li>Deploying working software frequently</li>
              <li>Testing early and often</li>
              <li>Collaborating with all stakeholders</li>
              <li>
                Capturing requirements at a high level; lightweight & visual
              </li>
              <li>
                Harnessing change for the customer's competitive advantage
              </li>
              <li>Reflecting on previous work and behaviour</li>
            </ul>
          </ServiceBox>
          <ServiceBox
            header="Software engineering"
            imageUrl="/images/icons/develop-y.svg"
          >
            <p>
              We operate a DevOps model where development and operations teams
              are no longer "siloed". Engineers work across the entire
              application lifecycle, from development and test to deployment to
              operations, and develop a range of skills not limited to a single
              function.
            </p>
            <p>
              We use practices to automate processes that historically have been
              manual and slow. And we use technology stacks and tooling that
              help us operate and evolve applications quickly and reliably.
              These tools also help us independently accomplish tasks that would
              otherwise have required help from other teams.
            </p>
            <p>The benefits of this model are;</p>
            <ul>
              <li>Speed</li>
              <li>Rapid Delivery</li>
              <li>Reliability</li>
              <li>Scale</li>
              <li>Improved Collaboration</li>
              <li>Security</li>
            </ul>
          </ServiceBox>
          <ServiceBox
            header="DevOps & Cloud"
            imageUrl="/images/icons/cloud-y.svg"
          >
            <p>
              The following are the DevOps best practices we use to realise the
              benefits of a DevOps model
            </p>
            <ul>
              <li>
                <strong>Continuous Integration</strong> - find and address bugs
                quicker, improve software quality, and reduce the time it takes
                to validate and release new software updates.
              </li>
              <li>
                <strong>Continuous Delivery</strong> - expands upon continuous
                integration by deploying all code changes to a testing
                environment and/or a production environment after the build
                stage
              </li>
              <li>
                <strong>Microservices</strong> - built around business
                capabilities; each service is scoped to a single purpose.
              </li>
              <li>
                <strong>Infrastructure as Code</strong> - enables developers and
                system administrators to interact with infrastructure
                programmatically, and at scale, instead of needing to manually
                set up and configure resources.
              </li>
              <li>
                <strong>Monitoring and Logging</strong> - helps organizations
                more proactively monitor their services.
              </li>
              <li>
                <strong>Communication and Collaboration</strong> - speeding up
                communication across developers, operations, and even other
                teams like marketing or sales, allowing all parts of the
                organization to align more closely on goals and projects.
              </li>
            </ul>
          </ServiceBox>
          <ServiceBox
            header="Service design"
            imageUrl="/images/icons/design-y.svg"
          >
            <p></p>
          </ServiceBox>

          <ServiceBox
            header="User research"
            imageUrl="/images/icons/user-y.svg"
          >
            <p>
              We work closely with users, first identifying who they are, and
              then spending time with them to understand how they will use a
              system.
            </p>
            <p>
              We are advocates of a lean style of Agile, using the following
              methods to achieve this;
            </p>
            <ul>
              <li>Feature-based design & discovery</li>
              <li>Usability testing</li>
              <li>Match user needs with business objectives</li>
              <li>Work with legacy system constraints</li>
              <li>Rapid design sprints</li>
              <li>Users & stakeholders workshops</li>
            </ul>
          </ServiceBox>
        </Section>
      </main>
    </Layout>
  );
}
