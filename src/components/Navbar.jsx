import React, { useEffect, useState } from "react";
// import { saveAs } from 'file-saver';
import { Link } from "react-router-dom"

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const menuLinks = [
    { name: "HOME", link: "#home", class: "nav-link home" },
    { name: "ABOUT", link: "#about", class: "nav-link about" },
    { name: "SKILLS", link: "#skills", class: "nav-link skills" },
    { name: "PROJECTS", link: "#projects", class: "nav-link projects" },
    { name: "CONTACT", link: "#contact", class: "nav-link contact" }
  ];


 


  const handleDownload = () => {
    return window.open("https://drive.google.com/file/d/1RQrBs59oGvBx5TDvjtaRrwgin-Y9pHC1/view?usp=sharing");
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);
  return (
    <div
      id="nav-menu"
      className={`fixed w-full left-0 top-0 z-[999] ${sticky ? "bg-white  text-gray-900" : "text-white"
        }`}
    >
      <div className="flex items-center justify-between">
        <div className="mx-7">
          <h4 className="text-4xl uppercase font-bold text-lg">
            Yashika Agrawal<span className="text-cyan-600"></span>
          </h4>
        </div>
        <div
          className={` ${sticky ? "md:bg-white/0 bg-white" : "bg-white"
            } text-gray-900 md:block hidden px-7 py-2 font-medium  rounded-bl-full`}
        >
          <ul className="flex items-center gap-1 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li key={i} className={`${menu.class} px-6 hover:text-cyan-600`}>
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
            <li className="nav-link resume px-6 hover:text-cyan-600">
              <Link id="resume-link-1" 
                target="_blank"
                rel="noreferrer"
                class="nav-link resume"
                onClick={handleDownload} 
                download={'Yashika-resume-pdf'}
                href={"https://drive.google.com/file/d/1RQrBs59oGvBx5TDvjtaRrwgin-Y9pHC1/view?usp=sharing"}
              >
                <button id="resume-button-1">
                  RESUME
                </button>
              </Link>
            </li>
          </ul>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className={`z-[999]  ${open ? "text-gray-900" : "text-gray-500"
            } text-3xl md:hidden m-5`}
        >
          <ion-icon name="menu"></ion-icon>
        </div>
        <div
          className={`md:hidden text-gray-900 absolute w-2/3 h-screen
      px-7 py-2 font-medium bg-white top-0 duration-300 ${open ? "right-0" : "right-[-100%]"
            }`}
        >
          <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li
                onClick={() => setOpen(false)}
                key={i}
                className="px-6 hover:text-cyan-600"
              >
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;