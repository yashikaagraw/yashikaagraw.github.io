import React from "react";

import { Link } from  "react-router-dom"

const About = () => {


  const handleDownload = () => {
    
    return window.open("https://drive.google.com/file/d/1RQrBs59oGvBx5TDvjtaRrwgin-Y9pHC1/view?usp=sharing");
  };


  return (
    <section id="about" className="about section py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p id="user-detail-intro" className="text-justify leading-7 w-11/12 mx-auto">
              As an aspiring web developer with a strong passion
              and a solid foundation in HTML, CSS, JavaScript,
              React.js, Redux, MongoDB, Express.js, and Node.js,
              my commitment to expanding my skills and staying up-to-date
              with the latest web development technologies is unwavering            </p>
              <Link id="resume-link-1" 
                target="_blank"
                rel="noreferrer"
                class="nav-link resume"
                onClick={handleDownload} 
                download={'Yashika-Resume.pdf'}
                href={"https://drive.google.com/file/d/1RQrBs59oGvBx5TDvjtaRrwgin-Y9pHC1/view?usp=sharing"}
              >
                <button className="btn-primary mt-10" id="resume-button-2">
                  Resume
                </button>
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
