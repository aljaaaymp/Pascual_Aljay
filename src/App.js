import Spline from "@splinetool/react-spline";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
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
import jchag2 from "../src/images/jchag2.PNG";
import jchag from "../src/images/jchag.PNG";
import isbn from "../src/images/ISBN.PNG";
import nocoin from "../src/images/nocoin.png";
import pas from "../src/images/PAS.PNG";
import chicken from "../src/images/chicken.png";
import lovester from "../src/images/lovester.png";
import alien from "../src/images/lovester.png";
import claude from "../src/images/lovester.png";

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

  // Tech Stack States
  const [backEnd, setBackEnd] = useState(false);
  const [frontEnd, setFrontEnd] = useState(false);
  const [network, setNetwork] = useState(false);
  const [computer, setComputer] = useState(false);
  
  const [loading, setLoading] = useState(true);
  const control = useAnimation();

  // --- CAROUSEL STATE ---
  const [currAngle, setCurrAngle] = useState(0);
  const radius = 300; 

  const rotateCarousel = (direction) => {
    const theta = 360 / PROJECTS.length;
    if (direction === "next") {
      setCurrAngle(currAngle - theta);
    } else {
      setCurrAngle(currAngle + theta);
    }
  };

  // Simple Fade Animation for Content
  const contentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } },
  };

  // Intersection Observers
  const [ref, inView] = useInView({ threshold: 0.2 });
  const [ref2, inView2] = useInView({ threshold: 0.2 });
  const [ref3, inView3] = useInView({ threshold: 0.2 });
  const [ref4, inView4] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) control.start("visible");
  }, [control, inView]);

  return (
    <div className="h-screen w-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll scrollbar-hide font-kanit relative bg-black text-white">
      
      {/* LOADER */}
      {loading && (
        <div className="fixed inset-0 z-[999] flex flex-col justify-center items-center bg-black">
          <PacmanLoader color="#36d7b7" size={100} />
          <p className="text-white mt-10 animate-pulse tracking-widest uppercase">ALJAY PASCUAL</p>
        </div>
      )}

      {/* --- SECTION 1: ABOUT ME --- */}
      <div id="aboutme" ref={ref} className="h-screen w-screen snap-start relative overflow-hidden">
        
        {/* 3D BACKGROUND LAYER (Always Full Screen, Shifts Left on Click) */}
        <div className={`absolute inset-0 w-full h-full transition-transform duration-700 ease-in-out z-0 ${isClick ? "-translate-x-[25%]" : "translate-x-0"}`}>
            <div className="w-full h-full cursor-pointer" onClick={() => setIsClick(true)}>
                <Spline 
                    scene="https://prod.spline.design/SBV9rDJLX3pIFpkC/scene.splinecode"
                    onLoad={() => setLoading(false)}
                />
            </div>
            {/* Hint Text */}
            {!isClick && !loading && (
                <div className="absolute bottom-20 left-0 right-0 text-center pointer-events-none animate-bounce">
                    <p className="text-xl font-bold tracking-widest uppercase opacity-70">Click to Explore</p>
                </div>
            )}
        </div>

        {/* CONTENT LAYER (Right Side Overlay) */}
        {isClick && (
            <motion.div 
                initial="hidden" animate="visible" variants={contentVariants}
                className="absolute top-0 right-0 h-full w-full md:w-1/2 bg-black/90 backdrop-blur-sm z-10 flex flex-col justify-center p-10 md:p-20 shadow-2xl"
            >
                <div className="flex justify-between items-start mb-5">
                    <h1 className="text-5xl font-bold">Aljay Pascual</h1>
                    <AiFillCloseCircle size={40} className="cursor-pointer hover:text-red-500 transition-colors" onClick={() => setIsClick(false)} />
                </div>
                <p className="text-xl font-semibold text-gray-400 mb-5">Software Engineer</p>
                <p className="tracking-wide text-gray-300 mb-8 leading-relaxed">
                     Results-oriented software engineer with practical knowledge of Java and Spring Boot. Strong cloud and container orchestration skills are demonstrated by the Kubernetes Application Developer (CKAD) and Microsoft Azure Fundamentals (AZ-900) certifications. competent in scalable application design, development, and deployment with an emphasis on best practices and clean code. eager to work with dynamic development teams and offer technological skills.
                </p>
                <a href={resume} download="Pascual_Aljay_Java_Developer" target="_blank" rel="noreferrer">
                    <button className="border border-white/20 hover:bg-white/10 px-8 py-3 rounded-full text-lg transition-all">
                        Get Resume
                    </button>
                </a>
            </motion.div>
        )}
      </div>


      {/* --- SECTION 2: SKILLS --- */}
      <div id="skills" ref={ref2} className="h-screen w-screen snap-start relative overflow-hidden">
         {/* 3D BACKGROUND (Slides Left) */}
         <div className={`absolute inset-0 w-full h-full transition-transform duration-700 ease-in-out z-0 ${isClick2 ? "-translate-x-[25%]" : "translate-x-0"}`}>
             <div className="w-full h-full cursor-pointer" onClick={() => setIsClick2(true)}>
                <Spline scene="https://prod.spline.design/F9v0bKaC-QNOR-V7/scene.splinecode" />
             </div>
         </div>

         {/* CONTENT LAYER */}
         {isClick2 && (
            <motion.div 
                initial="hidden" animate="visible" variants={contentVariants}
                className="absolute top-0 right-0 h-full w-full md:w-1/2 bg-black/95 backdrop-blur-md z-10 flex flex-col justify-center p-5 md:p-20 shadow-2xl overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-10">
                <span className="text-4xl md:text-5xl font-bold">My Skills</span>
                <AiFillCloseCircle size={40} className="cursor-pointer hover:text-red-500" onClick={() => setIsClick2(false)} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* BackEnd */}
                <div className="flex flex-col gap-2">
                   <div onClick={() => setBackEnd(!backEnd)} className={`p-4 rounded-xl border border-white/10 cursor-pointer hover:bg-white/5 transition-all flex flex-col items-center ${backEnd ? 'bg-white/10' : ''}`}>
                      <DiJava className="text-fuchsia-700 mb-2" size={40} />
                      <span className="font-semibold">Back End</span>
                   </div>
                   {backEnd && <div className="p-3 text-sm text-gray-300 border-l-2 border-fuchsia-700 animate-fadeIn">Java, Springboot, Maven, JUnit</div>}
                </div>

                {/* FrontEnd */}
                <div className="flex flex-col gap-2">
                   <div onClick={() => setFrontEnd(!frontEnd)} className={`p-4 rounded-xl border border-white/10 cursor-pointer hover:bg-white/5 transition-all flex flex-col items-center ${frontEnd ? 'bg-white/10' : ''}`}>
                      <IoLogoCss3 className="text-blue-500 mb-2" size={40} />
                      <span className="font-semibold">Front End</span>
                   </div>
                   {frontEnd && <div className="p-3 text-sm text-gray-300 border-l-2 border-blue-500 animate-fadeIn">React, Tailwind, CSS, HTML</div>}
                </div>

                {/* Network */}
                <div className="flex flex-col gap-2">
                   <div onClick={() => setNetwork(!network)} className={`p-4 rounded-xl border border-white/10 cursor-pointer hover:bg-white/5 transition-all flex flex-col items-center ${network ? 'bg-white/10' : ''}`}>
                      <FaNetworkWired className="text-green-500 mb-2" size={40} />
                      <span className="font-semibold">DevOps / Tools</span>
                   </div>
                   {network && <div className="p-3 text-sm text-gray-300 border-l-2 border-green-500 animate-fadeIn">Azure DevOps, Oracle SQL, Kibana</div>}
                </div>

                {/* Certs */}
                <div className="flex flex-col gap-2">
                   <div onClick={() => setComputer(!computer)} className={`p-4 rounded-xl border border-white/10 cursor-pointer hover:bg-white/5 transition-all flex flex-col items-center ${computer ? 'bg-white/10' : ''}`}>
                      <RiComputerLine className="text-yellow-500 mb-2" size={40} />
                      <span className="font-semibold">Certifications</span>
                   </div>
                   {computer && <div className="p-3 text-sm text-gray-300 border-l-2 border-yellow-500 animate-fadeIn">AZ-900, CKAD</div>}
                </div>
              </div>
            </motion.div>
         )}
      </div>


      {/* --- SECTION 3: SAMPLE WORKS (THE FIX) --- */}
      <div id="works" ref={ref3} className="h-screen w-screen snap-start relative overflow-hidden bg-black">
        
        {/* 3D LAYER - SLIDES LEFT, NEVER SHRINKS */}
        <div className={`absolute inset-0 w-full h-full transition-transform duration-700 ease-in-out z-0 ${isClick3 ? "-translate-x-[20%]" : "translate-x-0"}`}>
            <div className="w-full h-full cursor-pointer flex items-center justify-center" onClick={() => !isClick3 && setIsClick3(true)}>
                <Spline scene="https://prod.spline.design/pM2pK3ckYG7I8mCw/scene.splinecode" />
            </div>
            
             {/* Title when inactive */}
             {!isClick3 && (
                <div className="absolute top-20 left-0 right-0 text-center pointer-events-none">
                     <h2 className="text-5xl font-bold text-white drop-shadow-lg">Sample Works</h2>
                     <p className="text-gray-400 mt-2 animate-pulse">Click Ironman to Open</p>
                </div>
             )}
        </div>

        {/* CAROUSEL LAYER (Overlay on the Right) */}
        {isClick3 && (
            <motion.div 
                initial={{ opacity: 0, x: 100 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.7 }}
                className="absolute top-0 right-0 h-full w-full md:w-[60%] z-10 flex flex-col items-center justify-center perspective-container"
            >
                {/* Close Button */}
                <div className="absolute top-10 right-10 z-[60] cursor-pointer hover:text-red-500 transition-colors" onClick={() => setIsClick3(false)}>
                    <AiFillCloseCircle size={50} />
                </div>

                {/* 3D Carousel Ring */}
                <div className="relative w-full h-[600px] flex items-center justify-center" style={{ perspective: "1000px" }}>
                    <div 
                        className="absolute w-full h-full flex items-center justify-center"
                        style={{
                            transformStyle: "preserve-3d",
                            transform: `rotateY(${currAngle}deg)`,
                            transition: "transform 1s cubic-bezier(0.25, 1, 0.5, 1)"
                        }}
                    >
                        {PROJECTS.map((project, index) => {
                             const theta = (360 / PROJECTS.length) * index;
                             return (
                               <div
                                 key={project.id}
                                 className="absolute bg-white/10 border border-white/20 p-4 rounded-xl backdrop-blur-md hover:bg-white/20 hover:border-blue-400 transition-all group cursor-pointer shadow-lg"
                                 style={{
                                   width: "240px",
                                   height: "200px",
                                   // Rotate to position in circle, push out by radius
                                   transform: `rotateY(${theta}deg) translateZ(${radius}px)`,
                                 }}
                               >
                                 <a href={project.url} target="_blank" rel="noreferrer" className="w-full h-full flex flex-col items-center justify-center">
                                    <img src={project.img} alt={project.title} className="h-24 object-contain mb-4 group-hover:scale-110 transition-transform" />
                                    <span className="font-bold text-xl tracking-wide">{project.title}</span>
                                    <span className="text-xs text-blue-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Visit Site</span>
                                 </a>
                               </div>
                             );
                        })}
                    </div>
                </div>

                {/* Controls */}
                <div className="absolute bottom-20 flex gap-8 z-50">
                   <button onClick={() => rotateCarousel("prev")} className="bg-white/10 hover:bg-blue-500/50 text-white p-4 rounded-full backdrop-blur-md border border-white/20 transition-all">
                      <FaChevronLeft size={24} />
                   </button>
                   <button onClick={() => rotateCarousel("next")} className="bg-white/10 hover:bg-blue-500/50 text-white p-4 rounded-full backdrop-blur-md border border-white/20 transition-all">
                      <FaChevronRight size={24} />
                   </button>
                </div>
            </motion.div>
        )}
      </div>


      {/* --- SECTION 4: CONTACT --- */}
      <div id="contact" ref={ref4} className="h-screen w-screen snap-start relative overflow-hidden">
         <div className={`absolute inset-0 w-full h-full transition-transform duration-700 ease-in-out z-0 ${isClick4 ? "-translate-x-[25%]" : "translate-x-0"}`}>
             <div className="w-full h-full cursor-pointer" onClick={() => setIsClick4(true)}>
                <Spline scene="https://prod.spline.design/vBs4ZVL7rLdAaaal/scene.splinecode" />
             </div>
         </div>

         {isClick4 && (
             <motion.div 
                initial="hidden" animate="visible" variants={contentVariants}
                className="absolute top-0 right-0 h-full w-full md:w-1/2 bg-black/90 backdrop-blur-sm z-10 flex flex-col justify-center p-10 md:p-20 shadow-2xl"
             >
                <div className="flex justify-between items-center mb-10">
                  <span className="text-4xl md:text-5xl font-bold">Contact Me</span>
                  <AiFillCloseCircle size={40} className="cursor-pointer hover:text-red-500" onClick={() => setIsClick4(false)} />
                </div>
                
                <div className="space-y-8">
                   <div className="flex items-center gap-5 p-5 bg-white/5 rounded-xl border border-white/5 hover:border-blue-400/30 transition-colors">
                      <AiOutlinePhone size={30} className="text-blue-400" />
                      <div>
                        <p className="text-sm text-gray-400">Phone</p>
                        <p className="text-lg font-medium">0945 801 9502</p>
                      </div>
                   </div>
                   <div className="flex items-center gap-5 p-5 bg-white/5 rounded-xl border border-white/5 hover:border-blue-400/30 transition-colors">
                      <AiOutlineMail size={30} className="text-blue-400" />
                      <div>
                        <p className="text-sm text-gray-400">Email</p>
                        <p className="text-lg font-medium">pascualaljay@gmail.com</p>
                      </div>
                   </div>
                   <div className="flex items-center gap-5 p-5 bg-white/5 rounded-xl border border-white/5 hover:border-blue-400/30 transition-colors">
                      <CiLocationOn size={30} className="text-blue-400" />
                      <div>
                        <p className="text-sm text-gray-400">Address</p>
                        <p className="text-lg font-medium">Bacoor Cavite, Philippines</p>
                      </div>
                   </div>
                   <div className="flex gap-4 mt-5">
                      <a href="https://www.linkedin.com/in/aljay-pascual-54524717b/" target="_blank" rel="noreferrer" className="bg-white/10 p-4 rounded-full hover:bg-blue-600 transition-all">
                        <AiFillLinkedin size={30} />
                      </a>
                      <a href="https://github.com/aljaaaymp" target="_blank" rel="noreferrer" className="bg-white/10 p-4 rounded-full hover:bg-gray-700 transition-all">
                        <AiFillGithub size={30} />
                      </a>
                   </div>
                </div>
             </motion.div>
         )}
      </div>

    </div>
  );
}

export default App;