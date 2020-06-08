import Layout from "../../components/Layout";
import Section from "../../components/Section";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const [inputs, setInputs] = useState({
    email: "",
    message: "",
    interest: "",
  });

  const handleResponse = (status: number, msg: any) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg },
      });
      setInputs({
        email: "",
        message: "",
        interest: "",
      });
    } else {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg },
      });
    }
  };

  const handleOnChange = (e: any) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  const handleOnSubmit = async (e: any) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    const res = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    });
    const text = await res.text();
    handleResponse(res.status, text);
  };
  return (
    <Layout>
      <main>
        <Section
          background="/images/cre-illustrations-2.svg"
          header="We want to hear from you"
        >
          <div className="column half">
            <h2>Say hello</h2>
            <div className="row">
              <p>
                Our office is in Tunbridge Wells, Kent, UK, a short commute from
                London by train. If you're nearby, please give us a call, we'd
                love to talk shop!
              </p>
              <p>
                Email <a href="mailto:hello@creatify.io">hello@creatify.io</a>{" "}
                or phone <a href="tel:+441892740196">01892 740196</a>
              </p>
            </div>
          </div>
          <div className="column half">
            <h2>Send a message</h2>
            <p>All fields are required</p>
            <form onSubmit={handleOnSubmit}>
              {status.info.error && (
                <p className="error">Error: {status.info.msg}</p>
              )}
              {!status.info.error && status.info.msg && (
                <p className="success">{status.info.msg}</p>
              )}
              <div className="formRow">
                <label htmlFor="email">Your email</label>
                <input
                  id="email"
                  type="email"
                  onChange={handleOnChange}
                  required
                  value={inputs.email}
                />
              </div>
              <div className="formRow">
                <label htmlFor="message">Your message</label>
                <textarea
                  id="message"
                  onChange={handleOnChange}
                  required
                  value={inputs.message}
                />
              </div>
              <div className="formRow">
                <label htmlFor="interest">Your interests</label>
                <select id="interest" required onChange={handleOnChange}>
                  <option value="product">Product management</option>
                  <option value="software">Software engineering</option>
                  <option value="design">Service design</option>
                  <option value="research">User research</option>
                  <option value="devops">DevOps & cloud</option>
                </select>
              </div>
              <div className="formRow">
                <button type="submit" disabled={status.submitting}>
                  {!status.submitting
                    ? !status.submitted
                      ? "Send"
                      : "Sending"
                    : "Sent..."}
                </button>
              </div>
              <style jsx>{`
                .error {
                  color: red;
                }
                .success {
                  color: green;
                }
                .formRow {
                  margin-bottom: 20px;
                }
                .formRow label {
                  display: block;
                  font-size: 120%;
                }
                input,
                select,
                textarea {
                  border: none;
                  background-color: rgb(245, 247, 249);
                  padding: 10px;
                  box-shadow: #1f3346 2px 2px 3px;
                  outline: none;
                  width: 20rem;
                }
                input:focus,
                select:focus,
                textarea:focus {
                  background-color: rgb(240, 245, 249);
                  box-shadow: #1f3346 2px 2px 0px;
                }
                select {
                  cursor: pointer;
                }
                button {
                  font-size: 120%;
                  padding: 10px;
                  color: white;
                  text-shadow: #1f3346 1px 1px 1px;
                  border: none;
                  cursor: pointer;
                  background-color: #00aaff;
                }
              `}</style>
            </form>
          </div>
        </Section>
      </main>
    </Layout>
  );
}
