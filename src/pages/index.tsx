import Head from "next/head";
// Components
import Header from "../components/Header";
import MyTechnologies from "../components/Technologies";
import Background from "../components/Background";
import Card from "../components/CardComponents/Card";
import { CardData } from "../components/CardComponents/CardData";

export default function Home() {
  return (
    <>
      <Head>
        <title>Davids Portfolio</title>
      </Head>
      <main className="grid grid-rows-[100vh] mx-10">
        <Header />
        <MyTechnologies />
        <section>
          <h2 className=" pt-40">My Projects 🚀</h2>
          <div className="flex flex-row flex-wrap justify-center mt-20 gap-5 p-10">
            {CardData.map((card) => (
              <Card
                key={card.title}
                title={card.title}
                desc={card.desc}
                btnText={card.btnText}
                btnHref={card.btnHref}
                imgSrc={card.imgSrc}
              />
            ))}
          </div>
        </section>
      </main>
      <Background />
    </>
  );
}
