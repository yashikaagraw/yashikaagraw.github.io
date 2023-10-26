import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../images/bluefly.png";
import project2 from "../images/flipkart.png";
import project3 from "../images/Online-medical-store.jpeg";
import project4 from "../images/Portfolio-img.jpeg"
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Projects = () => {
  const projects = [
    {
      img: project1,
      name: "Bluefly.com",
      github_link: "https://github.com/Mzsalmani02/bluefly_clone",
      live_link: "https://jocular-moonbeam-a47e5c.netlify.app//",
      about:'Your one-stop online fashion and lifestyle destination, offering a seamless shopping experience and a diverse range of products for the style-conscious shopper.'
    },
    {
      img: project2,
      name: "Flipkart.com",
      github_link: "https://github.com/Abidkhan263187/Project-FlipKart-Website-Clone",
      live_link: "https://flipkartclone-black.vercel.app/index.html",
      about:'Indias Leading Online Shopping Destination. Shop from the comfort of your home with Flipkarts user-friendly interface'

    },
    {
      img: project3,
      name: "Online Medical Store",
      github_link: "https://github.com/yashikaagraw/Telemedicine-clone",
      live_link: "https://telemedicine-mu.vercel.app/",
      about:'Online Medical Store.com It is a Online Pharmacy, ayurvedic store and Health Store.'

    },
    {
      img: project4,
      name: "My Portfolio",
      github_link: "https://github.com/yashikaagraw/yashikaagraw.github.io",
      live_link: "yashikaagraw.github.io",
      about:'A showcase of my skills and achievements, my portfolio provides a glimpse into my professional journey. Explore my work and experience in a concise and visually appealing format'

    },
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        {/* <p className="text-gray-400 mt-3 text-lg">My awesome works</p> */}
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="w-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 4,
              },
            }}
            loop={false}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="project-card h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="project-title text-xl my-4">{project_info.name}</h3>
                  <p className="project-description">{project_info.about}</p>
                  <p className="project-tech-stack">
                    <span className="text-orange-400">Tech Stack: </span>HTML, CSS, JS, ReactJS
                  </p>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="blank"
                      className="project-github-link text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="blank"
                      className="project-deployed-link text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* <div className="lg:block hidden">
          <img src={project_person} alt="" />
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
