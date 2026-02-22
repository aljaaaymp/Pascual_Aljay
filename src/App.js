import Spline from "@splinetool/react-spline";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { DiJava } from "react-icons/di";
import { IoLogoCss3 } from "react-icons/io";
import { FaNetworkWired, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import { CiLocationOn } from "react-icons/ci";
import resume from "../src/images/Pascual, Aljay_Java Developer.pdf";
import {
  AiFillCloseCircle,
  AiOutlinePhone,
  AiOutlineMail,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import PacmanLoader from "react-spinners/HashLoader";

// IMAGES IMPORT
import jchag from "../src/images/jchag.PNG";
import isbn from "../src/images/ISBN.PNG";
import nocoin from "../src/images/nocoin.png";
import chicken from "../src/images/chicken.png";
import lovester from "../src/images/lovester.png";
import alien from "../src/images/alien.png";
import claude from "../src/images/claude.png";

// --- CONFIGURATION ---
const PROJECTS = [
  { id: 1, img: claude, url: "https://www.claudemetahunter.online/", title: "Claude AI" },
  { id: 2, img: alien, url: "https://www.neilarmstrong.fun/", title: "Alien Token" },
  { id: 3, img: nocoin, url: "https://www.nocoin.ink/", title: "Nocoin" },
  { id: 4, img: chicken, url: "https://www.r3tardedchicken.com/", title: "Chicken" },
  { id: 5, img: lovester, url: "https://www.lovester.xyz/", title: "Lovester" },
  { id: 6, img: jchag, url: "https://aljaaaymp.github.io/jchag/", title: "Church Website" },
  { id: 7, img: isbn, url: "https://aljaaaymp.github.io/isbn/", title: "ISBN Tool" },
];

function App() {
  const [isClick, setIsClick] = useState(false);
  const [isClick2, setIsClick2] = useState(false);
  const [isClick3, setIsClick3] = useState(false);
  const [isClick4, setIsClick4] = useState(false);

  const [backEnd, setBackEnd] = useState(false);
  const [frontEnd, setFrontEnd] = useState(false);
  const [network, setNetwork] = useState(false);
  const [computer, setComputer] = useState(false);
  
  const [loading, setLoading] = useState(true);
  const [currAngle, setCurrAngle] = useState(0);
  const [dynamicRadius, setDynamicRadius] = useState(300);

  // Responsive Radius Fix
  useEffect(() => {
    const handleResize = () => {
      setDynamicRadius(window.innerWidth < 768 ? 160 : 300);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const rotateCarousel = (direction) => {
    const theta = 360 / PROJECTS.length;
    setCurrAngle(direction === "next" ? currAngle - theta : currAngle + theta);
  };

  const contentVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div className="h-[100dvh] w-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll scrollbar-hide font-kanit relative bg-black text-white">
      
      {/* LOADER */}
      {loading && (
        <div className="fixed inset-0 z-[999] flex flex-col justify-center items-center bg-black">
          <PacmanLoader color="#36d7b7" size={100} />
          <p className="text-white mt-10 animate-pulse tracking-widest uppercase">ALJAY PASCUAL</p>
        </div>
      )}

      {/* --- SECTION 1: ABOUT ME --- */}
      <div id="aboutme" className="h-[100dvh] w-screen snap-start relative overflow-hidden">
        <div className={`absolute inset-0 w-full h-full transition-transform duration-700 ease-in-out z-0 ${isClick ? "-translate-x-full md:-translate-x-[25%]" : "translate-x-0"}`}>
          <Spline scene="https://prod.spline.design/SBV9rDJLX3pIFpkC/scene.splinecode" onLoad={() => setLoading(false)} />
          {!isClick && (
            <div className="absolute inset-0 z-10 cursor-pointer" onClick={() => setIsClick(true)} />
          )}
          {!isClick && !loading && (
            <div className="absolute bottom-20 left-0 right-0 text-center pointer-events-none animate-bounce z-20">
              <p className="text-xl font-bold tracking-widest uppercase opacity-70">Tap to Explore</p>
            </div>
          )}
        </div>

        <AnimatePresence>
          {isClick && (
            <motion.div initial="hidden" animate="visible" exit="hidden" variants={contentVariants}
              className="absolute top-0 right-0 h-full w-full md:w-1/2 bg-black/90 backdrop-blur-sm z-30 flex flex-col justify-center p-10 md:p-20 shadow-2xl overflow-y-auto">
              <div className="flex justify-between items-start mb-5">
                <h1 className="text-5xl font-bold">Aljay Pascual</h1>
                <AiFillCloseCircle size={40} className="cursor-pointer hover:text-red-500 transition-colors" onClick={() => setIsClick(false)} />
              </div>
              <p className="text-xl font-semibold text-gray-400 mb-5">Software Engineer</p>
              <p className="tracking-wide text-gray-300 mb-8 leading-relaxed">
                Results-oriented software engineer with practical knowledge of Java and Spring Boot. Strong cloud and container orchestration skills are demonstrated by the Kubernetes Application Developer (CKAD) and Microsoft Azure Fundamentals (AZ-900) certifications. competent in scalable application design, development, and deployment with an emphasis on best practices and clean code. eager to work with dynamic development teams and offer technological skills.
              </p>
              <a href={resume} download="Pascual_Aljay_Java_Developer" target="_blank" rel="noreferrer">
                <button className="border border-white/20 hover:bg-white/10 px-8 py-3 rounded-full text-lg transition-all">Get Resume</button>
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* --- SECTION 2: SKILLS --- */}
      <div id="skills" className="h-[100dvh] w-screen snap-start relative overflow-hidden">
        <div className={`absolute inset-0 w-full h-full transition-transform duration-700 ease-in-out z-0 ${isClick2 ? "-translate-x-full md:-translate-x-[25%]" : "translate-x-0"}`}>
          <Spline scene="https://prod.spline.design/F9v0bKaC-QNOR-V7/scene.splinecode" />
          {!isClick2 && <div className="absolute inset-0 z-10 cursor-pointer" onClick={() => setIsClick2(true)} />}
        </div>

        <AnimatePresence>
          {isClick2 && (
            <motion.div initial="hidden" animate="visible" exit="hidden" variants={contentVariants}
              className="absolute top-0 right-0 h-full w-full md:w-1/2 bg-black/95 backdrop-blur-md z-30 flex flex-col justify-center p-5 md:p-20 shadow-2xl overflow-y-auto">
              <div className="flex justify-between items-center mb-10">
                <span className="text-4xl md:text-5xl font-bold">My Skills</span>
                <AiFillCloseCircle size={40} className="cursor-pointer hover:text-red-500" onClick={() => setIsClick2(false)} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <div onClick={() => setBackEnd(!backEnd)} className={`p-4 rounded-xl border border-white/10 cursor-pointer flex flex-col items-center ${backEnd ? 'bg-white/10' : ''}`}>
                    <DiJava className="text-fuchsia-700 mb-2" size={40} />
                    <span className="font-semibold">Back End</span>
                  </div>
                  {backEnd && <div className="p-3 text-sm text-gray-300 border-l-2 border-fuchsia-700">Java, Springboot, Maven, JUnit</div>}
                </div>
                <div className="flex flex-col gap-2">
                  <div onClick={() => setFrontEnd(!frontEnd)} className={`p-4 rounded-xl border border-white/10 cursor-pointer flex flex-col items-center ${frontEnd ? 'bg-white/10' : ''}`}>
                    <IoLogoCss3 className="text-blue-500 mb-2" size={40} />
                    <span className="font-semibold">Front End</span>
                  </div>
                  {frontEnd && <div className="p-3 text-sm text-gray-300 border-l-2 border-blue-500">React, Tailwind, CSS, HTML</div>}
                </div>
                <div className="flex flex-col gap-2">
                  <div onClick={() => setNetwork(!network)} className={`p-4 rounded-xl border border-white/10 cursor-pointer flex flex-col items-center ${network ? 'bg-white/10' : ''}`}>
                    <FaNetworkWired className="text-green-500 mb-2" size={40} />
                    <span className="font-semibold">DevOps / Tools</span>
                  </div>
                  {network && <div className="p-3 text-sm text-gray-300 border-l-2 border-green-500">Azure DevOps, Oracle SQL, Kibana</div>}
                </div>
                <div className="flex flex-col gap-2">
                  <div onClick={() => setComputer(!computer)} className={`p-4 rounded-xl border border-white/10 cursor-pointer flex flex-col items-center ${computer ? 'bg-white/10' : ''}`}>
                    <RiComputerLine className="text-yellow-500 mb-2" size={40} />
                    <span className="font-semibold">Certifications</span>
                  </div>
                  {computer && <div className="p-3 text-sm text-gray-300 border-l-2 border-yellow-500">AZ-900, CKAD</div>}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* --- SECTION 3: SAMPLE WORKS --- */}
      <div id="works" className="h-[100dvh] w-screen snap-start relative overflow-hidden bg-black">
        <div className={`absolute inset-0 w-full h-full transition-transform duration-700 ease-in-out z-0 ${isClick3 ? "-translate-x-full md:-translate-x-[20%]" : "translate-x-0"}`}>
          <Spline scene="https://prod.spline.design/pM2pK3ckYG7I8mCw/scene.splinecode" />
          {!isClick3 && <div className="absolute inset-0 z-10 cursor-pointer" onClick={() => setIsClick3(true)} />}
          {!isClick3 && (
            <div className="absolute top-20 left-0 right-0 text-center pointer-events-none">
              <h2 className="text-5xl font-bold text-white drop-shadow-lg">Sample Works</h2>
              <p className="text-gray-400 mt-2 animate-pulse">Tap Ironman to Open</p>
            </div>
          )}
        </div>

        <AnimatePresence>
          {isClick3 && (
            <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 100 }}
              className="absolute top-0 right-0 h-full w-full md:w-[60%] z-40 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm">
              <AiFillCloseCircle size={50} className="absolute top-10 right-10 cursor-pointer z-50 hover:text-red-500" onClick={() => setIsClick3(false)} />
              <div className="relative w-full h-[400px] md:h-[600px] flex items-center justify-center" style={{ perspective: "1000px" }}>
                <div className="relative w-full h-full flex items-center justify-center" style={{ transformStyle: "preserve-3d", transform: `rotateY(${currAngle}deg)`, transition: "transform 1s ease" }}>
                  {PROJECTS.map((project, index) => (
                    <div key={project.id} className="absolute bg-white/10 border border-white/20 p-4 rounded-xl backdrop-blur-md w-[160px] md:w-[240px] h-[140px] md:h-[200px]"
                         style={{ transform: `rotateY(${(360 / PROJECTS.length) * index}deg) translateZ(${dynamicRadius}px)` }}>
                      <a href={project.url} target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center h-full">
                        <img src={project.img} alt={project.title} className="h-16 md:h-24 object-contain mb-4" />
                        <span className="font-bold text-sm md:text-xl text-center">{project.title}</span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex gap-8 mt-5">
                <button onClick={() => rotateCarousel("prev")} className="bg-white/10 p-4 rounded-full"><FaChevronLeft /></button>
                <button onClick={() => rotateCarousel("next")} className="bg-white/10 p-4 rounded-full"><FaChevronRight /></button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* --- SECTION 4: CONTACT --- */}
      <div id="contact" className="h-[100dvh] w-screen snap-start relative overflow-hidden">
        <div className={`absolute inset-0 w-full h-full transition-transform duration-700 ease-in-out z-0 ${isClick4 ? "-translate-x-full md:-translate-x-[25%]" : "translate-x-0"}`}>
          <Spline scene="https://prod.spline.design/vBs4ZVL7rLdAaaal/scene.splinecode" />
          {!isClick4 && <div className="absolute inset-0 z-10 cursor-pointer" onClick={() => setIsClick4(true)} />}
        </div>

        <AnimatePresence>
          {isClick4 && (
            <motion.div initial="hidden" animate="visible" exit="hidden" variants={contentVariants}
              className="absolute top-0 right-0 h-full w-full md:w-1/2 bg-black/90 backdrop-blur-sm z-30 flex flex-col justify-center p-10 md:p-20 shadow-2xl overflow-y-auto">
              <div className="flex justify-between items-center mb-10">
                <span className="text-4xl md:text-5xl font-bold">Contact Me</span>
                <AiFillCloseCircle size={40} className="cursor-pointer hover:text-red-500" onClick={() => setIsClick4(false)} />
              </div>
              <div className="space-y-8">
                <div className="flex items-center gap-5 p-5 bg-white/5 rounded-xl border border-white/5">
                  <AiOutlinePhone size={30} className="text-blue-400" />
                  <div><p className="text-sm text-gray-400">Phone</p><p className="text-lg font-medium">0945 801 9502</p></div>
                </div>
                <div className="flex items-center gap-5 p-5 bg-white/5 rounded-xl border border-white/5">
                  <AiOutlineMail size={30} className="text-blue-400" />
                  <div><p className="text-sm text-gray-400">Email</p><p className="text-lg font-medium">pascualaljay@gmail.com</p></div>
                </div>
                <div className="flex items-center gap-5 p-5 bg-white/5 rounded-xl border border-white/5">
                  <CiLocationOn size={30} className="text-blue-400" />
                  <div><p className="text-sm text-gray-400">Address</p><p className="text-lg font-medium">Bacoor Cavite, Philippines</p></div>
                </div>
                <div className="flex gap-4 mt-5">
                  <a href="https://www.linkedin.com/in/aljay-pascual-54524717b/" target="_blank" rel="noreferrer" className="bg-white/10 p-4 rounded-full hover:bg-blue-600 transition-all"><AiFillLinkedin size={30} /></a>
                  <a href="https://github.com/aljaaaymp" target="_blank" rel="noreferrer" className="bg-white/10 p-4 rounded-full hover:bg-gray-700 transition-all"><AiFillGithub size={30} /></a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;