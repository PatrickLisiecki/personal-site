/* eslint-disable react/jsx-key */

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Projects data
const projectsData = [
  {
    title: "Book Review Forum",
    description:
      "A functional dynamic forum that gives users the option to create, edit, and delete forums, as well as a thread creation feature.",
    link: "https://github.com/PatrickLisiecki/book-review-forum",
    image: "/project-1.png",
    demo: "#",
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
    demo: "#",
    image: "/project-2.png",
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
    image: "/project-3.png",
    tech: [
      <i className="devicon-nextjs-original colored"></i>,
      <i className="devicon-react-original colored"></i>,
      <i className="devicon-tailwindcss-plain colored"></i>,
    ],
  },
];

export default function Projects() {
  return (
    <div className="flex items-center py-[115px] lg:min-h-screen" id="projects">
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
                  className="flex min-h-[300px] w-full flex-col gap-x-8 rounded-[2rem] p-5 shadow-bs md:min-h-[350px] lg:flex-row lg:items-center lg:justify-center"
                >
                  {/* Project Image */}
                  <div className="mb-2 flex h-full min-w-[90%] items-center justify-center overflow-hidden rounded-lg shadow-bs lg:min-w-[60%] xl:mb-0">
                    <img
                      src={item.image}
                      alt="Project Image"
                      className="object-fit h-full w-full rounded-lg transition-all duration-500 hover:scale-125"
                    />
                  </div>

                  {/* Project Info */}
                  <div className="mx-auto flex h-full w-full flex-col items-center justify-center">
                    {/* Project Title */}
                    <span className="h3 mb-2">{item.title}</span>

                    {/* Project Description */}
                    <p className="mb-4 max-w-[400px] text-center leading-tight text-secondary">
                      {item.description}
                    </p>

                    {/* Project Tech */}
                    <div className="mb-8 flex w-[50%] items-center justify-evenly gap-x-4">
                      {item.tech.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="flex h-[50px] w-[50px] items-center justify-center rounded-full p-4 text-3xl shadow-bs"
                          >
                            {item}
                          </div>
                        );
                      })}
                    </div>

                    {/* Project Links */}
                    <div className="flex w-full items-center justify-center gap-x-8">
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
                      {item.demo ? (
                        <button className="group flex min-w-[120px] max-w-[140px] items-center justify-center overflow-hidden border border-primary bg-none px-4 py-3 transition-all duration-300 md:max-w-[160px]">
                          <a href={item.demo} target="_blank" rel="noreferrer">
                            <span className="text-primary transition-all duration-500 group-hover:-translate-y-[120%] group-hover:opacity-0">
                              Demo
                            </span>
                            <FontAwesomeIcon
                              icon="fa-solid fa-right-long"
                              className="absolute -translate-y-[120%] text-[22px] text-primary opacity-0 transition-all duration-300 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100"
                            />
                          </a>
                        </button>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
