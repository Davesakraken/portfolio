import Head from "next/head";
// Components
import Header from "@/components/header/header";
import About from "@/components/about/About";
import Technologies from "@/components/technologies";
import Projects from "@/components/projects";
import Footer from "@/components/footer";

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
