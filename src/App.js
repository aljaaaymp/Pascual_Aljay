import Spline from "@splinetool/react-spline";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { DiJava } from "react-icons/di";
import { IoLogoCss3 } from "react-icons/io";
import { FaNetworkWired } from "react-icons/fa";
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
import jchag2 from "../src/images/jchag2.PNG";
import jchag from "../src/images/jchag.PNG";
import isbn from "../src/images/ISBN.PNG";
import nocoin from "../src/images/nocoin.png";
import pas from "../src/images/PAS.PNG";
import PacmanLoader from "react-spinners/HashLoader";
import chicken from "../src/images/chicken.png";
import lovester from "../src/images/lovester.png";



function App() {
  const [isClick, setIsClick] = useState(false);
  const [isClick2, setIsClick2] = useState(false);
  const [isClick3, setIsClick3] = useState(false);
  const [isClick4, setIsClick4] = useState(false);

  const [backEnd, setBackEnd] = useState(false);
  const [frontEnd, setFrontEnd] = useState(false);
  const [network, setNetwork] = useState(false);
  const [computer, setComputer] = useState(false);
  
  // Set loading to true initially; no timer used
  const [loading, setLoading] = useState(true);
  const control = useAnimation();

  // Animation Variants
  const boxVariant = {
    visible: { x: 0, opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { x: -1000, opacity: 0, scale: 1, transition: { duration: 0.1 } },
  };

  const boxVariant2 = {
    visible2: { x: 0, opacity: 1, scale: 1, transition: { duration: 1.5 } },
    hidden2: { x: -1000, opacity: 0, scale: 1, transition: { duration: 0.1 } },
  };

  const boxVariant3 = {
    visible3: { x: 0, opacity: 1, scale: 1, transition: { duration: 1.5 } },
    hidden3: { x: -1000, opacity: 0, scale: 1, transition: { duration: 0.1 } },
  };
  const boxVariant4 = {
    visible4: { x: 0, opacity: 1, scale: 1, transition: { duration: 1.5 } },
    hidden4: { x: -1000, opacity: 0, scale: 1, transition: { duration: 0.1 } },
  };

  const [ref, inView] = useInView({ threshold: 0.2 });
  const [ref2, inView2] = useInView({ threshold: 0.2 });
  const [ref3, inView3] = useInView({ threshold: 0.2 });
  const [ref4, inView4] = useInView({ threshold: 0.2 });

  // Intersection Observers
  useEffect(() => {
    if (inView) control.start("visible");
    else { control.start("hidden"); setIsClick(false); }
  }, [control, inView]);

  useEffect(() => {
    if (inView2) control.start("visible2");
    else {
      control.start("hidden2");
      setIsClick2(false);
      setBackEnd(false); setFrontEnd(false); setComputer(false); setNetwork(false);
    }
  }, [control, inView2]);

  useEffect(() => {
    if (inView3) control.start("visible3");
    else { control.start("hidden3"); setIsClick3(false); }
  }, [control, inView3]);

  useEffect(() => {
    if (inView4) control.start("visible4");
    else { control.start("hidden4"); setIsClick4(false); }
  }, [control, inView4]);

  return (
    <div className="h-screen w-screen snap-y snap-mandatory overflow-scroll scrollbar-hide font-kanit relative">
      
      {/* GLOBAL LOADER OVERLAY: Driven by Spline onLoad */}
      {loading && (
        <div className="fixed inset-0 z-[999] flex flex-col justify-center items-center bg-black">
          <PacmanLoader color="#36d7b7" size={100} />
          <p className="text-white mt-10 animate-pulse tracking-widest uppercase">ALJAY PASCUAL</p>
        </div>
      )}

      <div className="flex flex-col justify-center items-center bg-black">
        
        {/* ABOUT ME SECTION */}
        <div id="aboutme" ref={ref} className={isClick ? "bg-black flex w-screen h-auto md:h-screen md:flex-row flex-col -mt-20 md:mt-0 items-center justify-start snap-start" : "flex w-screen h-screen md:flex-row flex-col items-center justify-center bg-black snap-start"}>
          <motion.div
            variants={boxVariant}
            initial="hidden"
            animate={control}
            onClick={() => setIsClick(true)}
            className="h-5/6 w-screen md:w-3/6 bg-black mt-5 md:mt-20 cursor-pointer"
          >
            <Spline
              className="cursor-pointer"
              scene="https://prod.spline.design/SBV9rDJLX3pIFpkC/scene.splinecode"
              onLoad={() => setLoading(false)}
            />
          </motion.div>
          <div className={isClick ? "text-white flex gap-5 px-5 md:px-20 flex-col w-screen md:w-1/2 animate-entrance" : "hidden"}>
            <div className="flex justify-between">
              <div><span className="text-5xl font-bold">Aljay Pascual</span></div>
              <div onClick={() => setIsClick(false)} className="-mt-10 hover:cursor-pointer hover:animate-close"><AiFillCloseCircle size={80} /></div>
            </div>
            <p className="font-semibold text-xl">Software Engineer</p>
            <p className="tracking-widest z-10">
              Results-oriented software engineer with practical knowledge of Java and Spring Boot. Strong cloud and container orchestration skills are demonstrated by the Kubernetes Application Developer (CKAD) and Microsoft Azure Fundamentals (AZ-900) certifications. competent in scalable application design, development, and deployment with an emphasis on best practices and clean code. eager to work with dynamic development teams and offer technological skills. 
            </p>
            <a href={resume} download="Pascual_Aljay_Java_Developer" target="_blank" rel="noreferrer">
              <div className="pt-10"><span className="bg-white bg-opacity-10 p-3 px-7 rounded-3xl text-xl">get resume</span></div>
            </a>
          </div>
        </div>

        {/* SKILLS SECTION*/}
        <div id="skills" ref={ref2} className={isClick2 ? "bg-black flex w-screen h-auto md:h-screen md:flex-row flex-col -mt-20 md:mt-0 items-center justify-center snap-start" : "flex w-screen h-screen md:flex-row flex-col items-center justify-center bg-black snap-start"}>
          <motion.div variants={boxVariant2} initial="hidden2" animate={control} onClick={() => setIsClick2(true)} className="h-5/6 w-screen md:w-3/6 bg-black mt-5 md:mt-20">
            <Spline className="hover:cursor-pointer" scene="https://prod.spline.design/F9v0bKaC-QNOR-V7/scene.splinecode" />
          </motion.div>
          <div className={isClick2 ? "text-white flex gap-2 px-5 md:px-20 flex-col w-screen md:w-1/2 animate-entrance" : "hidden"}>
            <div className="flex justify-between">
              <div><span className="text-5xl font-bold">My Skills</span></div>
              <div onClick={() => setIsClick2(false)} className="-mt-10 hover:cursor-pointer hover:animate-close"><AiFillCloseCircle size={80} /></div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-2">
              <div className="flex gap-2">
                <div onClick={() => setBackEnd(true)} className="h-40 w-40 bg-white bg-opacity-10 flex flex-col justify-center items-center text-center rounded-xl hover:cursor-pointer">
                  <span><DiJava className="text-fuchsia-700" size={50} /></span>
                  <span className="font-semibold">Back End Development</span>
                </div>
                <div onClick={() => setBackEnd(false)} className={backEnd ? "h-40 w-40 border-white border-2 p-2 border-opacity-10 flex flex-col justify-center rounded-xl animate-entrance2" : "hidden"}>
                  <span>Java</span><span>Springboot</span><span>Maven</span><span>Junit</span>
                </div>
              </div>
              <div className="flex gap-2">
                <div onClick={() => setFrontEnd(true)} className="h-40 w-40 bg-white bg-opacity-10 flex flex-col justify-center items-center text-center rounded-xl hover:cursor-pointer">
                  <span><IoLogoCss3 className="text-fuchsia-700" size={50} /></span>
                  <span className="font-semibold">Front End Development</span>
                </div>
                <div onClick={() => setFrontEnd(false)} className={frontEnd ? "h-40 w-40 border-white border-2 p-2 border-opacity-10 flex flex-col rounded-xl justify-center animate-entrance2 " : "hidden"}>
                  <span>CSS</span><span>HTML</span><span>React JS</span><span>Tailwind</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-2">
              <div className="flex gap-2">
                <div onClick={() => setNetwork(true)} className="h-40 w-40 bg-white bg-opacity-10 flex flex-col justify-center items-center text-center rounded-xl hover:cursor-pointer">
                  <span><FaNetworkWired className="text-fuchsia-700" size={50} /></span>
                  <span className="font-semibold">Other Tech</span>
                </div>
                <div onClick={() => setNetwork(false)} className={network ? "h-40 w-40 border-white border-2 p-2 border-opacity-10 flex flex-col justify-center rounded-xl animate-entrance2" : "hidden"}>
                  <span>Azure DevOps</span><span>Oracle SQL</span><span>Azure Devops</span><span>Kibana</span>
                </div>
              </div>
              <div className="flex gap-2">
                <div onClick={() => setComputer(true)} className="h-40 w-40 bg-white bg-opacity-10 flex flex-col justify-center items-center text-center rounded-xl hover:cursor-pointer">
                  <span><RiComputerLine className="text-fuchsia-700" size={50} /></span>
                  <span className="font-semibold">Certification</span>
                </div>
                <div onClick={() => setComputer(false)} className={computer ? "h-40 w-40 border-white border-2 p-2 border-opacity-10 flex flex-col rounded-xl justify-center animate-entrance2" : "hidden"}>
                  <span>AZ-900</span><span>CKAD</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SAMPLE WORKS SECTION*/}
        <div id="works" ref={ref3} className={isClick3 ? "bg-black flex w-screen h-auto md:h-screen md:flex-row flex-col -mt-20 md:mt-0 items-center justify-center snap-start" : "flex w-screen h-screen md:flex-row flex-col items-center justify-center bg-black snap-start"}>
          <motion.div animate={control} variants={boxVariant3} initial="hidden3" onClick={() => setIsClick3(true)} className="h-5/6 w-screen md:w-3/6 bg-black">
            <Spline className="hover:cursor-pointer" scene="https://prod.spline.design/pM2pK3ckYG7I8mCw/scene.splinecode" />
          </motion.div>
          <div className={isClick3 ? "text-white flex gap-2 md:px-20 flex-col w-screen md:w-1/2 animate-entrance" : "hidden"}>
            <div className="flex justify-between">
              <div><span className="text-5xl font-bold">Sample Works</span></div>
              <div onClick={() => setIsClick3(false)} className="-mt-10 hover:cursor-pointer hover:animate-close"><AiFillCloseCircle size={80} /></div>
            </div>

            <div className="flex flex-col gap-10 py-5 h-[450px] overflow-y-auto scrollbar-hide mt-5">
              
              <div className="flex gap-2 md:gap-10">
                <div className="h-52 w-52 bg-white bg-opacity-10 flex justify-center items-center rounded-xl hover:cursor-pointer">
                  <a href="https://www.nocoin.ink/" target="_blank" rel="noreferrer">
                    <img src={nocoin} alt="Nocoin" className="h-full w-full p-5 hover:animate-scale-center" />
                  </a>
                </div>
                <div className="h-52 w-52 bg-white bg-opacity-10 flex justify-center items-center rounded-xl hover:cursor-pointer">
                  <a href="https://www.r3tardedchicken.com/" target="_blank" rel="noreferrer">
                    <img src={chicken} alt="Retarded Chicken" className="h-full w-full p-5 hover:animate-scale-center" />
                  </a>
                </div>
              </div>

              <div className="flex gap-2 md:gap-10">
                <div className="h-52 w-52 bg-white bg-opacity-10 flex justify-center items-center rounded-xl hover:cursor-pointer">
                  <a href="https://www.lovester.xyz/" target="_blank" rel="noreferrer">
                    <img src={lovester} alt="Lovester" className="h-full w-full p-5 hover:animate-scale-center" />
                  </a>
                </div>
                <div className="h-52 w-52 bg-white bg-opacity-10 flex justify-center items-center rounded-xl hover:cursor-pointer">
                  <a href="https://www.jchagm.org" target="_blank" rel="noreferrer">
                    <img src={jchag2} alt="jchag2" className="h-full w-full p-5 hover:animate-scale-center" />
                  </a>
                </div>
              </div>

              <div className="flex gap-2 md:gap-10">
                <div className="h-52 w-52 bg-white bg-opacity-10 flex justify-center items-center rounded-xl hover:cursor-pointer">
                  <a href="https://aljaaaymp.github.io/jchag/" target="_blank" rel="noreferrer">
                    <img src={jchag} alt="movie" className="h-full w-full p-5 hover:animate-scale-center" />
                  </a>
                </div>
                <div className="h-52 w-52 bg-white bg-opacity-10 flex justify-center items-center rounded-xl hover:cursor-pointer">
                  <a href="https://aljaaaymp.github.io/isbn/" target="_blank" rel="noreferrer">
                    <img src={isbn} alt="isbn" className="h-full w-full p-5 hover:animate-scale-center" />
                  </a>
                </div>
              </div>

              <div className="flex gap-2 md:gap-10">
                <div className="h-52 w-52 bg-white bg-opacity-10 flex justify-center items-center rounded-xl hover:cursor-pointer">
                  <a href="https://aljaaaymp.github.io/PolicyAdministrationSystem/" target="_blank" rel="noreferrer">
                    <img src={pas} alt="pas" className="h-full w-full p-5 hover:animate-scale-center" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* CONTACT SECTION */}
        <div id="contact" ref={ref4} className={isClick4 ? "bg-black flex w-screen h-auto md:h-screen md:flex-row flex-col -mt-20 md:mt-0 items-center justify-center snap-start" : "flex w-screen h-screen md:flex-row flex-col items-center justify-center bg-black snap-start"}>
          <motion.div animate={control} variants={boxVariant4} initial="hidden4" onClick={() => setIsClick4(true)} className="h-5/6 w-screen md:w-3/6 bg-black">
            <Spline className="hover:cursor-pointer" scene="https://prod.spline.design/vBs4ZVL7rLdAaaal/scene.splinecode" />
          </motion.div>
          <div className={isClick4 ? "text-white flex gap-2 px-5 md:px-20 flex-col w-screen md:w-2/3 animate-entrance" : "hidden"}>
            <div className="flex justify-between">
              <div><span className="text-5xl font-bold">Contact Me</span></div>
              <div onClick={() => setIsClick4(false)} className="-mt-10 hover:cursor-pointer hover:animate-close"><AiFillCloseCircle size={80} /></div>
            </div>
            <div className="flex flex-col gap-2 md:gap-10 py-5">
              <div className="flex md:flex-row flex-col gap-2 md:gap-10">
                <div className="h-32 w-96 bg-white bg-opacity-5 flex justify-start px-10 items-center rounded-xl">
                  <div className="bg-white bg-opacity-10 rounded-full"><span><AiOutlinePhone size={50} className="p-1 text-blue-300" /></span></div>
                  <div className="px-5 flex flex-col"><span>Contact on Phone</span><span className="text-opacity-80">0945 801 9502</span></div>
                </div>
                <div className="bg-white bg-opacity-5 h-32 w-96 flex flex-row items-center px-5 rounded-lg">
                  <div className="bg-white bg-opacity-10 rounded-full"><span><AiOutlineMail size={50} className="p-1 text-blue-300" /></span></div>
                  <div className="px-5 flex flex-col"><span>Contact on Email</span><span className="text-opacity-80">pascualaljay@gmail.com</span></div>
                </div>
              </div>
              <div className="flex md:flex-row flex-col gap-2 md:gap-10">
                <div className="bg-white bg-opacity-5 h-32 w-96 flex flex-row items-center px-5 rounded-lg">
                  <div className="bg-white bg-opacity-10 rounded-full"><span><CiLocationOn size={50} className="p-1 text-blue-300" /></span></div>
                  <div className="px-5 flex flex-col"><span>Contact Address</span><span className="text-opacity-80">Bacoor Cavite, Philippines</span></div>
                </div>
                <div className="bg-white bg-opacity-5 h-32 w-96 flex justify-center items-center gap-2 text-white flex-col">
                  <div><span>Social Media</span></div>
                  <div className="flex gap-5">
                    <div className="bg-white bg-opacity-10 rounded-full"><a href="https://www.linkedin.com/in/aljay-pascual-54524717b/" target="_blank" rel="noreferrer"><AiFillLinkedin size={50} className="p-2 text-blue-300" /></a></div>
                    <div className="bg-white bg-opacity-10 rounded-full"><a href="https://github.com/aljaaaymp" target="_blank" rel="noreferrer"><AiFillGithub size={50} className="p-2 text-blue-300" /></a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;