import Image from "next/image";
import lackinListApp from "../../public/lackin-list-app.jpg";

export default function Projects() {
  return (
    <section className="text-center mt-48 mb-20">
      <div>
        <h2 className="text-3xl text-gray-600 py-1">Projects.</h2>
        {/* Project Container */}
        <div className="flex justify-center flex-wrap sm:gap-7 md:gap-15 mt-16">
          {/* Lackin List App Container */}
          <div className="p-5 shadow-2xl rounded-xl">
            <h3 className="text-3xl py-2 text-gray-600">Lackin List Maker App</h3>
            <p className="pt-5 py-3 max-w-md m-auto">
              Made with HTML, CSS and JS this project uses no additional libraries. This project taught me alot about DOM manipulation and
              even introduced new concepts as I was developing such as local storage in order to save users list items for future sessions!
            </p>
            <Image src={lackinListApp} alt="screenshot" width={"500"} height={"500"} className="p-5 rounded-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
