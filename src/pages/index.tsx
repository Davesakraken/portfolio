import Head from "next/head";
import { ThemeProvider } from "next-themes";
// Components
import Navbar from "../Components/Navbar";
import Heading from "../Components/Heading";
import MyTechnologies from "../Components/MyTechnologies";
import Projects from "../Components/Projects";
import Background from "../Components/Background";

export default function Home() {
  return (
    <ThemeProvider>
      <>
        <Head>
          <title>Davids Portfolio</title>
        </Head>
        <main className="mx-10">
          {/* Landing Section */}
          <Navbar />
          <Heading />
          {/* Mid Section */}
          <MyTechnologies />
          {/* Bottom Section */}
          <Projects />
        </main>
        <Background />
      </>
    </ThemeProvider>
  );
}
