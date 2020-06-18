import Head from "next/head";
import { useAnalytics } from "../hooks/useAnalytics";
import { useEffect } from "react";
import { Router } from "next/router";

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  const { init, trackPageViewed } = useAnalytics();
  useEffect(() => {
    init(process.env.GA_ID!);
    trackPageViewed();
    Router.events.on("routeChangeComplete", () => {
      trackPageViewed();
    });
  }, []);

  return (
    <>
      <Head>
        <title>
          Creatify - Agile software developers delivering valuable outcomes
        </title>
      </Head>
      <Component {...pageProps} />
      <style jsx global>{`
        @font-face {
          font-family: oxygen-regular;
          src: url(/fonts/oxygen/light.ttf);
        }
        @font-face {
          font-family: oxygen-bold;
          src: url(/fonts/oxygen/bold.ttf);
        }
        html,
        body,
        body > div,
        body > div > div {
          height: 100%;
        }
        body {
          margin: 0;
          padding: 0;
          font-family: "Raleway", "HelveticaNeue", "Helvetica Neue", Helvetica,
            Arial, sans-serif;
          font-size: 100%;
          font-weight: 400;
          -webkit-font-smoothing: antialiased;
          line-height: 1.6;
        }
        h1,
        h2,
        h3 {
          font-family: oxygen-bold;
        }
        p,
        li,
        input,
        textarea,
        label,
        button,
        select,
        td {
          color: black;
          font-size: 1.12rem;
          line-height: 1.7;
          font-family: oxygen-regular;
        }
        main {
          margin: 85px 0;
        }
        .row {
          flex-flow: row wrap;
          display: flex;
          justify-content: space-between;
        }
        .content {
          width: 65%;
          margin: 0 auto;
        }
        .half {
          width: 45%;
        }
        .three {
          width: 25%;
        }
        a:link,
        a:active,
        a:visited {
          color: #00aaff;
        }
      `}</style>
    </>
  );
}

export default MyApp;
