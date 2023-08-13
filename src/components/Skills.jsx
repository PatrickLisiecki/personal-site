/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */

// Skills & Tools
const frontEndSkills = [
  {
    title: "JavaScript",
    icon: <i className="devicon-javascript-plain colored text-3xl"></i>,
  },
  {
    title: "React.JS",
    icon: <i className="devicon-react-original colored text-3xl"></i>,
  },
  {
    title: "TailwindCSS",
    icon: <i className="devicon-tailwindcss-plain colored text-3xl"></i>,
  },
];

const backEndSkills = [
  {
    title: "Node.JS",
    icon: <i className="devicon-nodejs-plain colored text-3xl"></i>,
  },
  {
    title: "Express.JS",
    icon: <i className="devicon-express-original colored text-3xl"></i>,
  },
  {
    title: "PostgreSQL",
    icon: <i className="devicon-postgresql-plain colored text-3xl"></i>,
  },
];

const tools = [
  {
    title: "Git",
    icon: <i className="devicon-git-plain colored text-3xl"></i>,
  },
  {
    title: "GitHub",
    icon: <i className="devicon-github-original colored text-3xl"></i>,
  },
  {
    title: "VS Code",
    icon: <i className="devicon-vscode-plain colored text-3xl"></i>,
  },
  // {
  //     title: "Windows",
  //     icon: <FontAwesomeIcon icon={faFire} className="mx-2" />,
  // },
  // {
  //     title: "Postman",
  //     icon: <FontAwesomeIcon icon={faFire} className="mx-2" />,
  // },
];

export default function Skills() {
  return (
    <section className="section bg-gray-100" id="skills">
      <div className="container mx-auto">
        <div className="flex w-full flex-col items-center justify-center">
          {/* Header */}
          <div className="mb-4 flex flex-col items-center justify-center text-center xl:w-[35vw]">
            <div className="flex w-full items-center justify-center">
              <img
                src="/tools.png"
                alt="Tools"
                className="max-h-[75px] max-w-[75px] md:max-h-[100px] md:max-w-[100px]"
              />
            </div>
            <span className="h2 mb-4 capitalize">My Tech Stack</span>
          </div>

          {/* Front-End Skills */}
          <div className="flex w-full flex-col items-center justify-evenly gap-x-4 gap-y-4 lg:flex-row">
            <div className="min-h-[400px] min-w-[350px] rounded-[10px] bg-gray-300 p-10 transition-all duration-300 hover:-translate-y-2 md:min-h-[450px] lg:min-w-[300px] xl:min-w-[350px]">
              <div className="flex h-full flex-col items-center justify-center">
                <div className="flex w-full items-center justify-center">
                  <img
                    src="/bucket.png"
                    alt="Front-End"
                    className="max-h-[75px] max-w-[75px] md:max-h-[100px] md:max-w-[100px]"
                  />
                </div>
                <span className="h3 mb-4">Front-End</span>
                <ul className="flex w-full flex-col items-start justify-center gap-y-2">
                  {frontEndSkills.map((skill, index) => {
                    return (
                      <li
                        key={index}
                        className="ml-[20%] flex flex-row items-center justify-start gap-x-2"
                      >
                        <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white p-4 shadow-bs">
                          {skill.icon}
                        </div>
                        <span className="text-xl">{skill.title}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            {/* Back-End Skills */}
            <div className="min-h-[400px] min-w-[350px] rounded-[10px] bg-gray-300 p-10 transition-all duration-300 hover:-translate-y-2 md:min-h-[450px] lg:min-w-[300px] xl:min-w-[350px]">
              <div className="flex h-full flex-col items-center justify-center">
                <div className="flex w-full items-center justify-center">
                  <img
                    src="/safe.png"
                    alt="Back-End"
                    className="max-h-[75px] max-w-[75px] md:max-h-[100px] md:max-w-[100px]"
                  />
                </div>
                <span className="h3 mb-4">Back-End</span>
                <ul className="flex w-full flex-col items-start justify-center gap-y-2">
                  {backEndSkills.map((skill, index) => {
                    return (
                      <li
                        key={index}
                        className="ml-[20%] flex flex-row items-center justify-start gap-x-2"
                      >
                        <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white p-4 shadow-bs">
                          {skill.icon}
                        </div>
                        <span className="text-xl">{skill.title}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            {/* Tools */}
            <div className="min-h-[400px] min-w-[350px] rounded-[10px] bg-gray-300 p-10 transition-all duration-300 hover:-translate-y-2 md:min-h-[450px] lg:min-w-[300px] xl:min-w-[350px]">
              <div className="flex h-full flex-col items-center justify-center">
                <div className="flex w-full items-center justify-center">
                  <img
                    src="/setting.png"
                    alt="Tools"
                    className="max-h-[75px] max-w-[75px] md:max-h-[100px] md:max-w-[100px]"
                  />
                </div>
                <span className="h3 mb-4">Tools</span>
                <ul className="flex w-full flex-col items-start justify-center gap-y-2">
                  {tools.map((skill, index) => {
                    return (
                      <li
                        key={index}
                        className="ml-[20%] flex flex-row items-center justify-start gap-x-2"
                      >
                        <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white p-4 shadow-bs">
                          {skill.icon}
                        </div>
                        <span className="text-xl">{skill.title}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
