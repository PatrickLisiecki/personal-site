/* eslint-disable react/no-unescaped-entities */

// Contact Info
const contactInfo = [
  {
    title: "Location",
    text: "New York, NY",
    link: "",
    icon: "/pin.png",
    alt: "Location",
  },
  {
    title: "Email",
    text: "impatricklisiecki@gmail.com",
    link: "mailto:impatricklisiecki@gmail.com",
    icon: "/at.png",
    alt: "Email",
  },
  {
    title: "LinkedIn",
    text: "linkedin.com/in/patricklisiecki",
    link: "https://www.linkedin.com/in/patricklisiecki/",
    icon: "/chat.png",
    alt: "Chat Bubble",
  },
];

export default function Contact() {
  return (
    <div className="section bg-gray-100" id="contact">
      <div className="container mx-auto flex items-center justify-center text-center">
        <div className=" flex w-full flex-col">
          {/* Heading */}
          <div className="flex w-full items-center justify-center">
            <img
              src="/chat-bubbles.png"
              alt="Chat Bubbles"
              className="max-h-[75px] max-w-[75px] md:max-h-[125px] md:max-w-[125px]"
            />
          </div>
          <span className="h2 mb-6 text-center lg:mb-12">
            Let's <span className="text-accent">connect.</span>
          </span>

          {/* Contact Info */}
          <div className="flex w-full flex-col justify-evenly lg:flex-row">
            {contactInfo.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex min-w-[200px] flex-col items-center gap-x-4 gap-y-2 p-4 xl:flex-row"
                >
                  <div className="flex h-[100px] w-[100px] items-center justify-center rounded-full bg-white p-4 shadow-bs">
                    <img
                      src={item.icon}
                      alt={item.alt}
                      className="h-auto max-w-full"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center gap-y-[4px] lg:items-start lg:justify-start lg:gap-y-[0px]">
                    <span className="text-2xl font-semibold">{item.title}</span>
                    <span className="cursor-pointer text-xl text-secondary hover:text-accent">
                      {item.link ? (
                        <a href={item.link} target="_blank" rel="noreferrer">
                          {item.text}
                        </a>
                      ) : (
                        item.text
                      )}
                    </span>
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
