import Card from "@/components/card/card";
import { cardData } from "@/components/card/cardData";

export default function MyProjects() {
  return (
    <section id="Projects" className="text-center mt-52">
      <h2>My Projects 🚀</h2>
      <div className="flex flex-row flex-wrap justify-center mt-20 gap-12 p-10">
        {cardData.map((card) => (
          <Card
            key={card.title}
            title={card.title}
            cardTags={card.cardTags}
            desc={card.desc}
            btnText={card.btnText}
            btnHref={card.btnHref}
            gitHref={card.gitHref}
            imgSrc={card.imgSrc}
          />
        ))}
      </div>
    </section>
  );
}
