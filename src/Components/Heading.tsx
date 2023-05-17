import selfie from "../../public/selfie.png";
import Image from "next/image";

export default function Heading() {
  return (
    <section className="pb-10">
      <div className="text-center p-5 select-none">
        <h1 className="text-7xl pt-12 py-3 font-medium bg-gradient-to-b from-cyan-500 to-teal-600 bg-clip-text text-transparent">
          David Bell
        </h1>
        <h3 className="text-3xl py-2 text-gray-800 ">Frontend Developer.</h3>
      </div>
      <div className="relative mx-auto max-w-sm mt-20 select-none">
        <Image src={selfie} alt="selfie image" />
      </div>
    </section>
  );
}
