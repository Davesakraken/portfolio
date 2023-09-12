interface TagProps {
  width: String;
  colour: String;
  text: String;
  textColor?: String;
}

const CardTag = ({ width, colour, text, textColor = "slate-900" }: TagProps) => {
  return <div className={`text-${textColor} ${colour} ${width} rounded-md p-1 text-sm font-medium h-7`}>{text}</div>;
};

type Technology = "html" | "css" | "js" | "ts" | "react" | "tailwind" | "next";

const Tags: Record<Technology, JSX.Element> = {
  html: <CardTag key={"html"} width="w-14" colour="bg-red-400" text="HTML" />,
  css: <CardTag key={"css"} width="w-12" colour="bg-blue-400" text="CSS" />,
  js: <CardTag key={"js"} width="w-9" colour="bg-yellow-400" text="JS" />,
  ts: <CardTag key={"ts"} width="w-9" colour="bg-blue-500" text="TS" />,
  react: <CardTag key={"react"} width="w-14" colour="bg-blue-300" text="React" />,
  tailwind: <CardTag key={"tailwind"} width="w-[4.3rem]" colour="bg-blue-200" text="Tailwind" />,
  next: <CardTag key={"next"} width="w-18" colour="bg-slate-500" textColor={"white"} text="Next.js" />,
};

export default Tags;
