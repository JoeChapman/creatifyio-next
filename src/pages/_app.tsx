import Head from "next/head";

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  return (
    <>
      <Head>
        <title>
          Creatify - Agile Web development, solutions design, and cloud platform
          engineering
        </title>
      </Head>
      <Component {...pageProps} />
      <style jsx global>{`
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

        p {
          color: black;
          font-size: 1.12rem;
          line-height: 1.7;
        }
        main {
          margin-top: 85px;
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
        .three {
          width: 25%;
        }
      `}</style>
    </>
  );
}

export default MyApp;
