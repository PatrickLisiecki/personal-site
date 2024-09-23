/* eslint-disable react/jsx-key */

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Projects data
const projectsData = [
  {
    title: "Word Lab",
    description:
      "Word Lab is a study assistant for expanding language vocabulary with randomly generated games.",
    link: "https://github.com/PatrickLisiecki/spelling-bee-app",
    image: "/word-lab.png",
    demo: "https://github.com/PatrickLisiecki/spelling-bee-app",
    tech: [
      <i className="devicon-react-original colored"></i>,
      <i className="devicon-tailwindcss-plain colored"></i>,
      <i className="devicon-nodejs-plain colored"></i>,
      <i className="devicon-express-original colored"></i>,
      <i className="devicon-sqlite-plain colored"></i>,
    ],
  },
  {
    title: "Flex Fusion",
    description:
      "Flex Fusion is a fitness application designed to provide users with a comprehensive and personalized fitness experience.",
    link: "https://github.com/PatrickLisiecki/flex-fusion",
    image: "/flex.png",
    demo: "https://flexfusion.xyz/",
    tech: [
      <i className="devicon-react-original colored"></i>,
      <i className="devicon-tailwindcss-plain colored"></i>,
      <i className="devicon-nodejs-plain colored"></i>,
      <i className="devicon-express-original colored"></i>,
      <i className="devicon-postgresql-plain colored"></i>,
    ],
  },
  {
    title: "Novel Opinions",
    description:
      "A functional dynamic forum that gives users the option to create, edit, and delete forums, as well as a thread creation feature.",
    link: "https://github.com/PatrickLisiecki/book-review-forum",
    image: "/novel.png",
    demo: "",
    tech: [
      <i className="devicon-html5-plain colored"></i>,
      <i className="devicon-react-original colored"></i>,
      <i className="devicon-tailwindcss-plain colored"></i>,
    ],
  },
  {
    title: "Flashcard Creator",
    description:
      "A user-friendly and interactive application for effective learning with digital flashcards.",
    link: "https://github.com/PatrickLisiecki/flashcard-creator",
    demo: "",
    image: "/flashcard.png",
    tech: [
      <i className="devicon-mongodb-plain colored"></i>,
      <i className="devicon-express-original colored"></i>,
      <i className="devicon-react-original colored"></i>,
      <i className="devicon-nodejs-plain colored"></i>,
    ],
  },
  {
    title: "Portfolio Website",
    description: "An interactive portfolio website for a developer.",
    link: "https://github.com/PatrickLisiecki/portfolio",
    demo: "https://portfolio-patricklisiecki.vercel.app/",
    image: "/dev.png",
    tech: [
      <i className="devicon-nextjs-original colored"></i>,
      <i className="devicon-react-original colored"></i>,
      <i className="devicon-tailwindcss-plain colored"></i>,
    ],
  },
];

export default function Projects() {
  return (
    <section
      className="flex items-center py-[115px] dark:bg-dark/90 dark:text-white lg:min-h-screen"
      id="projects"
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-4 flex flex-col items-center justify-center text-center xl:w-[35vw]">
            <div className="flex w-full items-center justify-center">
              <img
                src="/computer.png"
                alt="Computer"
                className="max-h-[75px] max-w-[75px] md:max-h-[100px] md:max-w-[100px]"
              />
            </div>
            <span className="h2 mb-4 capitalize">My Latest Work</span>
          </div>

          {/* Projects */}
          <div className="grid h-auto w-full grid-cols-1 gap-10">
            {projectsData.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex min-h-[300px] w-full flex-col gap-x-8 rounded-[2rem] bg-white p-5 shadow-bs dark:bg-dark md:min-h-[350px] lg:flex-row lg:items-center lg:justify-center"
                >
                  {/* Project Image */}
                  <div className="mb-2 flex h-full min-w-[90%] items-center justify-center overflow-hidden rounded-lg shadow-lg hover:shadow-xl lg:min-w-[60%] xl:mb-0">
                    <img
                      src={item.image}
                      alt="Project Image"
                      className="object-fit h-full w-full rounded-lg transition-all duration-500"
                    />
                  </div>

                  {/* Project Info */}
                  <div className="mx-auto flex h-full w-full flex-col items-center justify-center">
                    {/* Project Title */}
                    <span className="h3 mb-2">{item.title}</span>

                    {/* Project Description */}
                    <p className="mb-4 max-w-[400px] text-center leading-tight text-secondary dark:text-[#f2f2f2]">
                      {item.description}
                    </p>

                    {/* Project Tech */}
                    <div className="mx-auto mb-8 flex items-center justify-evenly gap-x-4">
                      {item.tech.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white p-4 text-3xl shadow-bs"
                          >
                            {item}
                          </div>
                        );
                      })}
                    </div>

                    {/* Project Links */}
                    <div className="flex w-full items-center justify-center gap-x-8">
                      {/* GitHub link */}
                      <a href={item.link} target="_blank" rel="noreferrer">
                        <button className="group flex min-w-[120px] max-w-[140px] items-center justify-center overflow-hidden border border-accent bg-accent px-4 py-3 transition-all duration-300 md:max-w-[160px]">
                          <span className="text-white transition-all duration-500 group-hover:-translate-y-[120%] group-hover:opacity-0">
                            Code
                          </span>
                          <FontAwesomeIcon
                            icon="fa-solid fa-right-long"
                            className="absolute -translate-y-[120%] text-[22px] text-white opacity-0 transition-all duration-300 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100"
                          />
                        </button>
                      </a>

                      {/* Demo link */}
                      <a
                        href={item.demo !== "" ? item.demo : undefined}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button
                          disabled={item.demo === ""}
                          className="group flex min-w-[120px] max-w-[140px] items-center justify-center overflow-hidden border border-primary bg-none px-4 py-3 transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50 dark:border-white md:max-w-[160px]"
                        >
                          <span className="transition-all duration-500 group-hover:-translate-y-[120%] group-hover:opacity-0 dark:text-white">
                            Demo
                          </span>
                          <FontAwesomeIcon
                            icon="fa-solid fa-right-long"
                            className="absolute -translate-y-[120%] text-[22px] opacity-0 transition-all duration-300 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 dark:text-white"
                          />
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
