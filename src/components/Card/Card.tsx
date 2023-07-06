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
    <div className="flex flex-wrap flex-col justify-center">
      <div className="card-dark-mode max-w-sm rounded-lg shadow-md">
        <Image className="rounded-t-lg" src={imgSrc} alt="card-image" width={400} height={400} />
        <div className="p-6">
          <div className="tags flex gap-4 text-center pb-3">
            <p className="bg-red-400 text-slate-900 rounded-md p-1 w-14">HTML</p>
            <p className="bg-blue-400 text-slate-900 rounded-md p-1 w-12">CSS</p>
            <p className="bg-yellow-400 text-slate-900 rounded-md p-1 w-10">JS</p>
          </div>
          <div className="text-left">
            <h5 className="card-dark-mode mb-3 text-3xl font-bold tracking-tight text-slate-700">{title}</h5>
            <p className="card-dark-mode mb-6 font-normal text-gray-800 dark:text-gray-400">{desc}</p>
            <a
              href={btnHref}
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg
             hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-800 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {btnText}
              <ArrowIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
