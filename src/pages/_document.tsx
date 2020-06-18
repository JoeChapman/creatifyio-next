import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/images/favicon.svg" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="Creatify is a community of experienced software consultants
            specialising in delivering value to our customers"
          />
          <meta
            name="keywords"
            content="web, develop, devops, design, software, agile, javascript, html, css, node.js, react, aws, cloud"
          />
          <meta name="author" content="creatify.io" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
