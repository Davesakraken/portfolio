import Card from "./Card/Card";
import { CardData } from "./Card/CardData";

export default function MyProjects() {
  return (
    <section id="Projects" className="text-center mt-52">
      <h2>My Projects 🚀</h2>
      <div className="flex flex-row flex-wrap justify-center mt-20 gap-5 p-10">
        {CardData.map((card) => (
          <Card key={card.title} title={card.title} desc={card.desc} btnText={card.btnText} btnHref={card.btnHref} imgSrc={card.imgSrc} />
        ))}
      </div>
    </section>
  );
}
