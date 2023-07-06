import Head from "next/head";
// Components
import Header from "../components/Header/Header";
import About from "../components/About/About";
import Technologies from "../components/Technologies";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Boxes from "../components/FloatingBoxes/Boxes";

export default function Home() {
  return (
    <>
      <Head>
        <title>Davids Portfolio</title>
      </Head>
      <Header />
      <main>
        <About />
        <Technologies />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
