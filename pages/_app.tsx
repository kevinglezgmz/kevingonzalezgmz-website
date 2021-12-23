import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import AppHeader from "../components/layout/header";
import styles from "../styles/App.module.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={styles["app-container"]}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <AppHeader></AppHeader>
      <div className={styles["main-content"]}>
        <Component {...pageProps} />;
      </div>
    </div>
  );
}

export default MyApp;
