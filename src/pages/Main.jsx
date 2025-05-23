import { Link } from "react-router-dom";
import { RiExternalLinkLine } from "react-icons/ri";
import { projects } from "src/constants/projects";

const Main = () => {
  return (
    <main className="w-5/6 flex flex-col mt-24 mb-16">
      <section className="flex items-center pt-3 pb-5 min-h-[430px] md:min-h-[550px]">
        <div>
          <p className="text-2xl mb-2 md:text-4xl font-medium dark:text-white">
            Hi, Welcome
          </p>
          <h1 className="text-4xl mb-2 md:text-7xl font-semibold dark:text-white">
            I&apos;m <span className="text-rose-500">Alexis Olán!</span>
          </h1>
          <h2 className="text-xl mb-6 md:text-4xl font-medium md:font-light dark:text-white">
            I&apos;m a Freelancer Web Developer, Photographer and A Trip Lover
          </h2>
          <button className="rounded-full border-[3px] border-rose-500 text-rose-500 py-3 md:py-4 px-7 md:px-8 md:text-xl font-semibold hover:text-white hover:bg-rose-600 transition-colors delay-75 ease-in-out">
            Watch this
          </button>
        </div>
      </section>
      <section>
        <h2 className="text-3xl md:text-4xl font-semibold dark:text-white">
          Featured Post
        </h2>
        <div className="mt-6 grid grid-cols-[repeat(auto-fit,_minmax(245px,1fr))] gap-12">
          {projects.map((project) => (
            <div key={project.id} className="relative z-0">
              <img
                src={project.image}
                alt={project.title}
                className={`w-full rounded-lg bg-center bg-cover bg-no-repeat`}
              />
              <div className="w-full bg-black/45 rounded-b-lg absolute bottom-0">
                <Link
                  target="_blank"
                  to={project.link}
                  className="h-14 flex items-center justify-center gap-4 text-white"
                >
                  <span>{project.title}</span>
                  <RiExternalLinkLine className="text-xl" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Main;
