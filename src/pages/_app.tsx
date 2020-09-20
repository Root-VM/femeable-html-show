import { AppProps } from 'next/app';
import 'normalize.css';
import '../assets/css/common.scss';
import Head from 'next/head';

const isBrowser = typeof window !== 'undefined';

if (isBrowser) {
  const el = document.getElementsByTagName('body')[0];

  el.classList.add('loading');
  window.onload = () => el.classList.remove('loading');
  setTimeout(() => el.classList.remove('loading'), 15000);
}
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
