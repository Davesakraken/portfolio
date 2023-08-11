interface TagProps {
  width: String;
  colour: String;
  text: String;
}

const CardTag = ({ width, colour, text }: TagProps) => {
  return <div className={`text-slate-900 ${colour} ${width} rounded-md p-1 font-medium`}>{text}</div>;
};

type Technology = "html" | "css" | "js" | "ts" | "react" | "tailwind";

const Tags: Record<Technology, JSX.Element> = {
  html: <CardTag key={"html"} width="w-16" colour="bg-red-400" text="HTML" />,
  css: <CardTag key={"css"} width="w-12" colour="bg-blue-400" text="CSS" />,
  js: <CardTag key={"js"} width="w-9" colour="bg-yellow-400" text="JS" />,
  ts: <CardTag key={"ts"} width="w-9" colour="bg-blue-500" text="TS" />,
  react: <CardTag key={"react"} width="w-14" colour="bg-blue-300" text="React" />,
  tailwind: <CardTag key={"tailwind"} width="w-20" colour="bg-blue-200" text="tailwind" />,
};

export default Tags;
