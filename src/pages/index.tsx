import Head from "next/head";
// Components
import Header from "../components/Header";
import MyTechnologies from "../components/MyTechnologies";
import Projects from "../components/Projects";
import Background from "../components/Background";

export default function Home() {
  return (
    <>
      <Head>
        <title>Davids Portfolio</title>
      </Head>
      <main className="grid grid-rows-[100vh] mx-10">
        <Header />
        <MyTechnologies />
        <Projects />
      </main>
      <Background />
    </>
  );
}
