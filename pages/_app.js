import '../styles/globals.css'
import Layout from "../components/Layout";
import Head from "next/head";
import {ParallaxProvider} from "react-scroll-parallax";

function MyApp({ Component, pageProps }) {
  return (
      <>
          <Head>

              <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
              <title>{Component.title}</title>
              {Component.keywords &&
                  <meta className="keywords" content={Component.keywords}/>
              }
              {/*<link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.1/dist/leaflet.css" />*/}

          </Head>

          <ParallaxProvider>
            <Layout>
                  <Component {...pageProps} />
            </Layout>
        </ParallaxProvider>
      </>
  )
}

export default MyApp
