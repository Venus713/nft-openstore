/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";

import Navbar from "../components/Navbar.js";
import Display from "../components/Display.js";

import TopWaveFooter from "../components/TopWaveFooter.js";

import Card from "../components/card.js";
import Team from "../components/Team.js";
import ItemView from "../components/ItemView.js";

import WaveFooter from "../components/WaveFooter.js";
import Footer from "../components/Footer.js";

export default function Home() {
  return (
    <div>
      <Script src="https://kit.fontawesome.com/a076d05399.js" />
      <Head>
        <title>Blockchain Based NFT Application</title>
        <meta name="description" content="Blockchain based NFT application" />
      </Head>
      <Display />
      <TopWaveFooter />
      <main>
        <div className="container">
          <h1 className="title-main text-center">
            <b>Products</b>
          </h1>
          <Card />
        </div>
        <Team />
      </main>
      <footer>
        <WaveFooter />
        <Footer />
        <Script
          src="https://code.jquery.com/jquery-3.3.1.js"
          integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
          crossorigin="anonymous"
        ></Script>
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js"
          integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut"
          crossorigin="anonymous"
        ></Script>
        <Script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js"
          integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k"
          crossorigin="anonymous"
        ></Script>
      </footer>
    </div>
  );
}
