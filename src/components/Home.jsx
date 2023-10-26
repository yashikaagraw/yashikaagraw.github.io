import React from "react";
import Typewriter from "typewriter-effect";
import photo from "../images/Yashika-Profile-photo.jpeg";
const Home = () => {
  const social_media = [
    { logo:"logo-github", link: "https://github.com/yashikaagraw" },
    { logo:"logo-linkedin", link: "https://www.linkedin.com/in/yashikareact/" }
  ];
  return (
    <section
      id="home"
      className=" md:mt-4 flex py-5 md:flex-row flex-col items-center"
    >
      <div className="flex items-center justify-center">
        <img src={photo} alt="" className="rounded-full  w-2/5 flex gap-5 mt-10" />
      </div>
      <div className="">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello👋
              <br />
            </span>
            My Name is <span id="user-detail-name" className="text-orange-400">YASHIKA AGRAWAL</span>
          </h1>

          <div className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            <Typewriter
              options={{
                loop: true,
              }}

              onInit={(typewriter) => {
                typewriter
                  .typeString("MERN Stack Developer")
                  .pause(2000)
                  .deleteAll()
                   .start();
              }}
            />
          </div>

          <a href="#contact"><button className="btn-primary mt-5">Contact Me</button></a>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((icon) => (
              <div
                key={icon}
                className="text-gray-600 hover:text-white cursor-pointer "
              >
                <a href={icon.link} target="_blank" rel="noreferrer">
                  <ion-icon name={icon.logo} ></ion-icon>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
//home page

export default Home;