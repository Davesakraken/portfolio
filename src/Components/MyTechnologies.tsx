import { SiCss3, SiHtml5, SiJavascript, SiReact, SiTailwindcss } from "react-icons/si";

export default function MyTechnologies() {
  return (
    <section className="text-center mt-52 mb-20">
      <div>
        <h2 className="text-3xl text-gray-600 py-1 ">Technologies I use.</h2>
        <div className="mt-16 text-6xl flex justify-center flex-wrap sm:gap-7 md:gap-15">
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
