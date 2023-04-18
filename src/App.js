
import Navbar from "../src/components/Navbar";
import Home from '../src/components/Home';
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import { Link } from "react-scroll";
import { useState } from "react";

import { FaBars, FaTimes } from "react-icons/fa";
import HeroImage from './assets/heroImage.png-removebg.jpg'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import restaurant from './assets/southindia.PNG';
import landingpage from './assets/LandingPage.PNG';
import keeperapp from './assets/southindia.PNG';
import calculator from './assets/calculator.png';
import html from "./assets/html.png";
import css from "./assets/css.png";
import javascript from "./assets/javascript.png";
import reactImage from "./assets/react.png";
import nextjs from "./assets/nextjs.png";
import graphql from "./assets/graphql.png";
import github from "./assets/github.png";
import tailwind from "./assets/tailwind.png";
import Bootstrap from "./assets/bootstrap.png"
import Java from "./assets/java.png"
import project from './assets/project.png'


function App() {

  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  const linkss = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: 'https://www.linkedin.com/in/afiya-zannuba-jaleel/',
      style: 'rounded-tr-md'
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: 'https://github.com/AfiyaZannuba',

    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: 'mailto:afiyazannubaa@gmail.com',

    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: '/resume.pdf',
      style: 'rounded-br-lg',
      download: true,
    },
  ]

  const portfolios = [
    {
      id: 1,
      src: project,
      href: 'https://intenshalalandingpagebyafiya.netlify.app/',
      name: "Landing Page"
    },
    {
      id: 2,
      src: project,
      href: 'https://south-india-eats.netlify.app/',
      name: "Restaurant Website"
    },
    {
      id: 3,
      src: project,
      href: 'https://calculator-app-afiyaa.netlify.app/',
      name: "Calculator App"
    },
    // {
    //   id: 4,
    //   src: restaurant,
    //   href: "https://car-animation-byafiya.netlify.app/",
    //   name: "Car Animation"
    // },
    // {
    //   id: 5,
    //   src: restaurant,
    //   href: "",
    //   name: ""
    // },
    // {
    //   id: 6,
    //   src: restaurant,
    //   href: "",
    //   name: ""
    // },
    
    
  ];

  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 7,
      src: Bootstrap,
      title: "Bootstrap",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: Java,
      title: "Java",
      style: "shadow-red-400",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];
 
  return (
    // <>
    //   <Navbar />
    //   <Home />
    //   <SocialLinks />
    //   <About />
    //   <Portfolio />
    //   <Experience />
    //   <Contact />

    // </>
    <>
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      <div>
        <h1 className="text-5xl font-signature ml-2">Afiya</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>

    <div name="home" className="h-screen  w-full bg-gradient-to-b from-black via-black to-gray-800">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-4xl sm:text-7xl font-bold text-white">
              I'm a MERN Stack Developer
            </h2>
            <p className="text-gray-500 py-4 max-w-md">I love to work on web applications using technologies like React.js, Tailwind, Express.js, MongoDB and Mongoose. I'm looking forward to join a workspace to utilise and develop my skills. </p>
            <div>
              <button className=" group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer ">
                Portfolio <span className="group-hover:rotate-90 duration-300 "><MdOutlineKeyboardArrowRight size={25} className="ml-1" /></span>
              </button>
            </div>
          </div>
          <div>
            <img src={HeroImage} alt="my-profile" className="rounded-2xl mx-auto w-2/3 md:w-full" />
          </div>
        </div>
      </div>

      <div className=" hidden lg:flex flex-col top-[35%] left-0 fixed ">
    <ul>
      {linkss.map(({id, child, href, style, download}) => (
        <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300" + " " +style}>
          <a className="flex justify-between items-center 
 w-full text-white" href={href} download={download} target='_blank' rel="noreferrer"><>{child}</></a></li>
      ))}


    </ul>
  </div>

  <div name="about" 
    className=" w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
    <div className="max-w-screen-lg p-4 mx-auto flex-col justify-center w-full h-full">
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
      </div>
      <p className="text-xl mt-20">I'm looking for front-end or back-end developer roles and is an immediate joiner. I've been working as a Software Engineer at DCKAP Technologies right after my college. Have been trained on HTML, CSS, JavaScript, React.js, Node.js, mongoDB and mongoose. Have developed website frontend code using the figma mockup designs and added functionalities. Also have been assisting server side running of a product developing for an e-commerce distributor in US.

        I completed my B-Tech in Production Engineering from Government Engineering College, Thrissur, Kerala in 2022. After my college I joined DCKAP through placement. Recently I have completed a Software Testing course and I'm skilled to do automation testing in Java and Selenium too.

        I am looking for a working environment where I can utilize my full potential, learn, unlearn, strengthen my core skills, and acquire leadership roles.
      </p>
      <br />
      <p className="text-xl mb-20 ">
        <li>Name: Afiya Zannuba Jaleel</li>
        <li>Designation: Software Engineer</li>
        <li> Work Experience: Software Engineer at DCKAP</li>
        <li> Education: B-Tech (2022 passed out)</li>
      </p>
    </div>
  </div>

  <div
    name="portfolio"
    className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
  >
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          Portfolio
        </p>
        <p className="py-6">Check out some of my work right here</p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
        {portfolios.map(({ id, src, href, name }) => (
          <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={src}
              alt=""
              className=" w-50 h-50 rounded-md duration-200 hover:scale-105"
            />
            <div className="flex items-center justify-center">
              <a href={href} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</a>
              <a href="#"  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                {name} </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>

  <div
      name="experience"
      className="bg-gradient-to-b  from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl  font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div
    name="contact"
    className="w-full mt-[-7] h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
  >
    <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          Contact
        </p>
        <p className="py-6">Submit the form below to get in touch with me</p>
      </div>

      <div className=" flex justify-center items-center">
        <form
          action="https://getform.io/f/61c99527-2b15-42cf-9b55-ad37d2f7daa6"
          method="POST"
          className=" flex flex-col w-full md:w-1/2"
        >
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
          />
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Enter your message"
            rows="10"
            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
          ></textarea>

          <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
            Let's talk
          </button>
        </form>
      </div>
    </div>
  </div>
    </>
   

  );
}

export default App;
