import Image, { StaticImageData } from "next/image";
import { BsGithub } from "react-icons/bs";
import ArrowIcon from "./ArrowIcon";

interface Props {
  title: string;
  desc: string;
  cardTags: JSX.Element[];
  btnText: string;
  btnHref: string;
  gitHref: string;
  imgSrc: StaticImageData;
}

export default function Card({ title, desc, cardTags, btnText, btnHref, gitHref, imgSrc }: Props) {
  return (
    <div className="flex flex-wrap flex-col justify-center">
      <div className="card-dark-mode hover:-translate-y-2 hover:scale-105 transition-all ease-in-out duration-300 max-w-sm rounded-lg shadow-md">
        {/* Heading Image */}
        <Image className="rounded-t-lg" src={imgSrc} alt="card-image" width={400} height={400} />

        {/* Card Tags */}
        <div className="p-6">
          <div className="tags flex gap-4 text-center pb-6 select-none">{cardTags}</div>

          {/* Title and Description */}
          <div className="text-left">
            <h5 className="card-dark-mode mb-3 text-2xl font-bold tracking-tight text-slate-700">{title}</h5>
            <p className="card-dark-mode mb-6 font-normal text-gray-800 dark:text-gray-400">{desc}</p>

            {/* Buttons */}
            <div className="flex justify-between items-center pt-2">
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

              <a href={gitHref} target="_blank" rel="noreferrer" className="slate-200 text-4xl cursor-pointer">
                <BsGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
