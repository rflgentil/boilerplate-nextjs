import { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyles from 'styles/global';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NextJS - Boilerplate</title>
        <link rel="shortcut icon" href="/img/icon-code-javascript-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-code-javascript-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="Lorem ipsum" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default App;
