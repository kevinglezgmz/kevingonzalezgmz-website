import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Header from "../components/layout/Header";
import styles from "../styles/App.module.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Header></Header>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
