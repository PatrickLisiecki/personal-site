/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */

export default function About() {
  return (
    <section className="section dark:bg-dark/90 dark:text-white" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col justify-between gap-y-10">
          <div className="flex w-full flex-col items-center justify-evenly gap-x-4 gap-y-4 lg:flex-row">
            {/* Image */}
            <div className="max-h-[300px] max-w-[300px] overflow-hidden lg:max-h-[325px] lg:max-w-[350px] xl:max-h-[425px] xl:max-w-[450px]">
              <img
                src="/camera.png"
                alt="About Image"
                className="h-auto max-w-full"
              />
            </div>

            {/* Text */}
            <div className="flex max-w-[400px] flex-col md:items-center md:justify-center lg:items-start lg:justify-start xl:max-w-[700px]">
              {/* Title */}
              <span className="h3 mb-0 text-center uppercase">About Me</span>
              <span className="mb-2 py-0 text-center text-[20px] font-semibold uppercase leading-tight text-accent lg:mb-0 lg:py-2 lg:text-left">
                CS Student and Developer Based in New York
              </span>

              {/* Description */}
              <p className="font-[16px] text-secondary dark:text-white">
                Greetings! My name is Patrick and I'm an upper-junior computer science student at
                the City University of New York-College of Staten Island and a current resident of the
                NYC Tech Talent Pipeline Program. When I'm not working on a project or schoolwork,
                you can find me at the gym, where I push myself to
                reach new heights both physically and mentally. In my downtime,
                I enjoy watching movies and shows. At this moment, my favorite
                movie is Parasite and my favorite show of all time is Breaking
                Bad. Moreover, I find enjoyment in assembling and fixing
                computers, which led me to choose computer science as my
                academic pursuit. Through this platform, I aim to share my
                experiences, projects, and insights, as well as connect with
                others who share my passion for all things tech and beyond.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
