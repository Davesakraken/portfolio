import selfie from "../../public/selfie.png";
import Image from "next/image";

export default function Heading() {
  return (
    <section>
      <div className="text-center sm:p-5 select-none">
        <h1 className="text-4xl md:text-7xl pt-12 py-3 font-medium bg-gradient-to-b from-cyan-500 to-teal-600 bg-clip-text text-transparent">
          David Bell
        </h1>
        <h3 className="text-3xl py-2 text-gray-800 ">Frontend Developer.</h3>
      </div>
      <div className="mt-20 m-auto select-none w-60 md:w-96">
        <Image src={selfie} alt="selfie image" className="" />
      </div>
    </section>
  );
}
