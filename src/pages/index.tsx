import Head from "next/head";
// Components
import Navbar from "../components/navigation/Navbar";
import Heading from "../components/Heading";
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
        {/* Landing Section */}
        <section>
          <Navbar />
          <Heading />
        </section>
        {/* Mid Section */}
        <MyTechnologies />
        {/* Bottom Section */}
        <Projects />
      </main>
      <Background />
    </>
  );
}
