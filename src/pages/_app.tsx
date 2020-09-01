import { AppProps } from 'next/app';
import 'normalize.css';
import '../assets/css/common.scss';
import Head from 'next/head';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Femable</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
