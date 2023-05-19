import { SiCss3, SiHtml5, SiJavascript, SiReact, SiTailwindcss } from "react-icons/si";

export default function MyTechnologies() {
  return (
    <section className="text-center">
      <div>
        <h2 className="text-3xl text-slate-600">Technologies I use ✨</h2>
        <div className="mt-20 text-6xl flex justify-center flex-wrap sm:gap-7 md:gap-15">
          <SiHtml5 className=" text-orange-600 m-5" />
          <SiCss3 className="text-blue-700 m-5" />
          <SiJavascript className="text-yellow-400 m-5" />
          <SiReact className="text-blue-400 m-5" />
          <SiTailwindcss className="text-blue-400 m-5" />
        </div>
      </div>
    </section>
  );
}
