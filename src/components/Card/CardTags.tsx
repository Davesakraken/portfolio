interface TagProps {
  width: String;
  colour: String;
  text: String;
}

const CardTag = ({ width, colour, text }: TagProps) => {
  return <div className={`text-slate-900 ${colour} ${width} rounded-md p-1 font-medium`}>{text}</div>;
};

type Technology = "html" | "css" | "js";

const Tags: Record<Technology, JSX.Element> = {
  html: <CardTag width="w-14" colour="bg-red-400" text="HTML" />,
  css: <CardTag width="w-12" colour="bg-blue-400" text="CSS" />,
  js: <CardTag width="w-9" colour="bg-yellow-400" text="JS" />,
};

export default Tags;
