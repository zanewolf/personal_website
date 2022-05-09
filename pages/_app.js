import '../styles/globals.css'
import Layout from "../components/Layout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
      <>
          <Head>
              <title>{Component.title}</title>
              {Component.keywords &&
                  <meta className="keywords" content={Component.keywords}/>
              }
          </Head>
          <Layout>
              <Component {...pageProps} />
          </Layout>
      </>
  )
}

export default MyApp
