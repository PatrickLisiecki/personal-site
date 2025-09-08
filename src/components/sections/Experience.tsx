import PropTypes from 'prop-types';

import { Briefcase } from 'lucide-react';

export default function Experience({ experienceData }) {
  return (
    <section
      className="section text-neutral-light-primary dark:bg-background dark:text-neutral-dark-primary"
      id="experience"
    >
      <div className="container mx-auto">
        <div className="mb-2 flex items-center gap-x-4">
          <Briefcase strokeWidth={3} size={26} />
          <h3 className="text-[26px] font-semibold uppercase leading-[46px]">My Experience</h3>
        </div>

        <p className="mb-8 text-neutral-light-secondary dark:text-neutral-dark-secondary">
          My software engineering experience so far.
        </p>

        <div className="flex flex-col gap-y-6">
          {experienceData.map((experience, index) => {
            return (
              <div key={index} className="rounded-xl border p-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={experience.img}
                      alt={experience.company}
                      className="h-[50px] w-[50px] rounded-md bg-white"
                    />
                    <div>
                      <h3 className="text-neutral-light-primary dark:text-neutral-dark-primary">
                        {experience.company}
                      </h3>
                      <span className="text-neutral-light-secondary dark:text-neutral-dark-secondary">
                        {experience.location}
                      </span>
                    </div>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="text-neutral-light-primary dark:text-neutral-dark-primary">
                      {experience.time}
                    </p>
                    <span className="text-neutral-light-secondary dark:text-neutral-dark-secondary">
                      {experience.mode}
                    </span>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="font-normal">{experience.role}</h3>
                  <p className="text-neutral-light-secondary dark:text-neutral-dark-secondary">
                    {experience.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

Experience.propTypes = {
  experienceData: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      mode: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
