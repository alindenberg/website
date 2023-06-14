import "globals.css";
import type { AppProps } from "next/app";
import Layout from "./layout";

function MyApp({ pageProps }: AppProps) {
  return (
    <Layout>
      {...pageProps}
    </Layout>
  );
}

export default MyApp;
