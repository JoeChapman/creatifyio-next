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
    </>
  );
}

export default MyApp;
