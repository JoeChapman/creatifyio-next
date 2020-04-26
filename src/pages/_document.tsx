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
            content="Creatify design and develop products for the web with high performance software
      to solve complex business problems"
          />
          <meta
            name="keywords"
            content="web, develop, design, software, agile, javascript, html, css, node.js, react, aws"
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
