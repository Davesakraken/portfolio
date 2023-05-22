import { SiCss3, SiHtml5, SiJavascript, SiReact, SiTailwindcss, SiNextdotjs, SiTypescript } from "react-icons/si";

export default function MyTechnologies() {
  return (
    <section className="text-center">
      <div>
        <h2>Technologies I use ✨</h2>
        <div className=" mt-20 text-6xl flex justify-center flex-wrap sm:gap-7 md:gap-15">
          <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank">
            <SiHtml5 className="transition-all-02 transform-scale-hover text-orange-600 m-5 cursor-pointer" />
          </a>

          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">
            <SiCss3 className="transition-all-02 transform-scale-hover text-blue-700 m-5" />
          </a>

          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
            <SiJavascript className="transition-all-02 transform-scale-hover text-yellow-400 m-5" />
          </a>

          <a href="https://www.typescriptlang.org/" target="_blank">
            <SiTypescript className="transition-all-02 transform-scale-hover text-blue-700 m-5" />
          </a>

          <a href="https://react.dev/" target="_blank">
            <SiReact className="transition-all-02 transform-scale-hover text-blue-400 m-5" />
          </a>

          <a href="https://nextjs.org/" target="_blank">
            <SiNextdotjs className="transition-all-02 transform-scale-hover text-slate-800-400 m-5" />
          </a>

          <a href="https://tailwindcss.com/" target="_blank">
            <SiTailwindcss className="transition-all-02 transform-scale-hover text-blue-400 m-5" />
          </a>
        </div>
      </div>
    </section>
  );
}