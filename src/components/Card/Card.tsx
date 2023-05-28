import Image, { StaticImageData } from "next/image";
import ArrowIcon from "./ArrowIcon";

interface Props {
  title: string;
  desc: string;
  btnText: string;
  btnHref: string;
  imgSrc: StaticImageData;
}

export default function Card({ title, desc, btnText, btnHref, imgSrc }: Props) {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="card-dark-mode max-w-sm rounded-lg shadow-md ">
        <Image className="rounded-t-lg" src={imgSrc} alt="card-image" width={500} height={500} />
        <div className="p-7">
          <h5 className="card-dark-mode mb-2 text-2xl font-bold tracking-tight text-slate-700">{title}</h5>
          <p className="card-dark-mode mb-6 font-normal text-gray-700 dark:text-gray-400">{desc}</p>
          <a
            href={btnHref}
            target="_blank"
            className="cursor-pointer inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg
             hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {btnText}
            <ArrowIcon />
          </a>
        </div>
      </div>
    </div>
  );
}
