import Head from "next/head";
// Components
import Header from "../components/Header/Header";
import MyTechnologies from "../components/Technologies";
import MyProjects from "../components/MyProjects";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Davids Portfolio</title>
      </Head>
      <Header />
      <main>
        <MyTechnologies />
        <MyProjects />
      </main>
      <Footer />
    </>
  );
}
