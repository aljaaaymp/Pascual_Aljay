import Spline from "@splinetool/react-spline";
import { useEffect, useState } from "react";
import { animate, motion, transform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
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
  AiFillFacebook,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import jchag2 from "../src/images/jchag2.PNG";
import jchag from "../src/images/jchag.PNG";
import isbn from "../src/images/ISBN.PNG";
import pas from "../src/images/PAS.PNG";



function App() {
   const [isClick, setIsClick] = useState(false);
   const [isClick2, setIsClick2] = useState(false);
   const [isClick3, setIsClick3] = useState(false);
   const [isClick4, setIsClick4] = useState(false);

   const [backEnd, setBackEnd] = useState(false);
   const [frontEnd, setFrontEnd] = useState(false);
   const [network, setNetwork] = useState(false);
   const [computer, setComputer] = useState(false);

  const control = useAnimation();

  const boxVariant = {
    visible: { x: 0, opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: {
      x: -1000,
      opacity: 0,
      scale: 1,
      transition: { duration: 0.1 },
    },
  };

  const boxVariant2 = {
    visible2: { x: 0, opacity: 1, scale: 1, transition: { duration: 1.5 } },
    hidden2: {
      x: -1000,
      opacity: 0,
      scale: 1,
      transition: { duration: 0.1 },
    },
  };

  const boxVariant3 = {
    visible3: { x: 0, opacity: 1, scale: 1, transition: { duration: 1.5 } },
    hidden3: {
      x: -1000,
      opacity: 0,
      scale: 1,
      transition: { duration: 0.1 },
    },
  };
  const boxVariant4 = {
    visible4: { x: 0, opacity: 1, scale: 1, transition: { duration: 1.5 } },
    hidden4: {
      x: -1000,
      opacity: 0,
      scale: 1,
      transition: { duration: 0.1 },
    },
  };

  const [ref, inView] = useInView({ threshold: 0.2 });
  const [ref2, inView2] = useInView({threshold: 0.2});
  const [ref3, inView3] = useInView({ threshold: 0.2 });
  const [ref4, inView4] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
      setIsClick(false);
    }
  }, [control, inView]);

  useEffect(() => {
    if (inView2) {
      control.start("visible2");
    } else {
      control.start("hidden2");
      setIsClick2(false);
      setBackEnd(false);
      setFrontEnd(false);
      setComputer(false);
      setNetwork(false);
    }
  }, [control, inView2]);

  useEffect(() => {
    if (inView3) {
      control.start("visible3");
    } else {
      control.start("hidden3");
      setIsClick3(false);
    }
  }, [control, inView3]);

   useEffect(() => {
     if (inView4) {
       control.start("visible4");
     } else {
      control.start("hidden4");
      setIsClick4(false);
     }
   }, [control, inView4]);



  return (
    <div className="h-screen w-screen snap-y snap-mandatory overflow-scroll scrollbar-hide font-kanit">
      <div
        id="aboutme"
        ref={ref}
        className={
          isClick
            ? "bg-black flex w-screen h-auto md:h-screen md:flex-row flex-col -mt-20 md:mt-0  items-center justify-start snap-start "
            : "flex w-screen h-screen md:flex-row flex-col  items-center justify-center  bg-black snap-start "
        }
      >
        <motion.div
          variants={boxVariant}
          initial="hidden"
          animate={control}
          onClick={() => setIsClick(true)}
          className="h-5/6 w-screen md:w-3/6 bg-black    mt-5 md:mt-20 "
        >
          <Spline
            className="hover:cursor-pointer"
            scene="https://prod.spline.design/SBV9rDJLX3pIFpkC/scene.splinecode"
          />
        </motion.div>
        <div
          className={
            isClick
              ? "text-white flex gap-5  px-5 md:px-20 flex-col w-screen md:w-1/2 animate-entrance "
              : "hidden"
          }
        >
          <div className="flex justify-between">
            <div>
              <span className="text-5xl font-bold ">Aljay Pascual</span>
            </div>
            <div
              onClick={() => setIsClick(false)}
              className="-mt-10 hover:cursor-pointer hover:animate-close"
            >
              <AiFillCloseCircle size={80} />
            </div>
          </div>
          <p className="font-semibold text-xl">Software Engineer</p>
          <p className="tracking-widest z-10">
            An ambitious and self-motivated software engineer with a
            considerable technical skill who possesses self-discipline and
            ability to work with minimum of supervision. Able to play a key role
            in website development to ensure maximum accessibility, user
            experience and usability. A quick learner who can absorb new ideas
            and can communicate clearly and effectively.
          </p>
          <a
            href={resume}
            download="Pascual_Aljay_CV"
            target="_blank"
            rel="noreferrer"
          >
            <div className="pt-10">
              <span className="bg-white bg-opacity-10 p-3 px-7 rounded-3xl text-xl">
                get resume
              </span>
            </div>
          </a>
        </div>
      </div>

      <div
        id="skills"
        ref={ref2}
        className={
          isClick2
            ? "bg-black flex w-screen h-auto md:h-screen md:flex-row flex-col -mt-20 md:mt-0  items-center justify-center snap-start"
            : "flex w-screen h-screen md:flex-row flex-col  items-center justify-center  bg-black snap-start "
        }
      >
        <motion.div
          variants={boxVariant2}
          initial="hidden2"
          animate={control}
          onClick={() => setIsClick2(true)}
          className="h-5/6 w-screen md:w-3/6 bg-black    mt-5 md:mt-20 "
        >
          <Spline
            className="hover:cursor-pointer "
            scene="https://prod.spline.design/F9v0bKaC-QNOR-V7/scene.splinecode"
          />
        </motion.div>
        <div
          className={
            isClick2
              ? "text-white flex gap-2 px-5 md:px-20 flex-col w-screen md:w-1/2 animate-entrance "
              : "hidden"
          }
        >
          <div className="flex justify-between">
            <div>
              <span className="text-5xl font-bold ">My Skills</span>
            </div>
            <div
              onClick={() => setIsClick2(false)}
              className="-mt-10 hover:cursor-pointer hover:animate-close"
            >
              <AiFillCloseCircle size={80} />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-2">
            <div className="flex gap-2">
              <div
                onClick={() => setBackEnd(true)}
                className="h-40 w-40 bg-white bg-opacity-10 flex flex-col  justify-center items-center text-center rounded-xl hover:cursor-pointer"
              >
                <span>
                  <DiJava className="text-fuchsia-700" size={50} />
                </span>
                <span className="font-semibold">Back End Development</span>
              </div>
              <div
                onClick={() => setBackEnd(false)}
                className={
                  backEnd
                    ? "h-40 w-40 border-white border-2 p-2 border-opacity-10 flex flex-col justify-center rounded-xl hover:cursor-w-resize animate-entrance2"
                    : "hidden"
                }
              >
                <span>Java</span>
                <span>Spring Framework</span>
                <span>MySQL</span>
              </div>
            </div>
            <div className="flex gap-2">
              <div
                onClick={() => setFrontEnd(true)}
                className="h-40 w-40 bg-white bg-opacity-10  flex flex-col  justify-center items-center text-center rounded-xl hover:cursor-pointer"
              >
                <span>
                  <IoLogoCss3 className="text-fuchsia-700" size={50} />{" "}
                </span>
                <span className="font-semibold">Front End Development</span>
              </div>
              <div
                onClick={() => setFrontEnd(false)}
                className={
                  frontEnd
                    ? "h-40 w-40 border-white border-2 p-2  border-opacity-10 flex flex-col rounded-xl justify-center hover:cursor-w-resize animate-entrance2 "
                    : "hidden"
                }
              >
                <span>CSS</span>
                <span>HTML</span>
                <span>React JS</span>
                <span>Tailwind</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-2">
            <div className="flex gap-2">
              <div
                onClick={() => setNetwork(true)}
                className="h-40 w-40 bg-white bg-opacity-10 flex flex-col  justify-center items-center text-center rounded-xl hover:cursor-pointer"
              >
                <span>
                  <FaNetworkWired className="text-fuchsia-700" size={50} />
                </span>
                <span className="font-semibold">Network Configuration</span>
              </div>
              <div
                onClick={() => setNetwork(false)}
                className={
                  network
                    ? "h-40 w-40 border-white border-2 p-2  border-opacity-10 flex flex-col justify-center rounded-xl hover:cursor-w-resize animate-entrance2"
                    : "hidden"
                }
              >
                <span>CISCO Basic</span>
                <span>Network Configuration</span>
                <span>Routing and Switching</span>
              </div>
            </div>
            <div className="flex gap-2">
              <div
                onClick={() => setComputer(true)}
                className="h-40 w-40 bg-white bg-opacity-10  flex flex-col  justify-center items-center text-center rounded-xl hover:cursor-pointer"
              >
                <span>
                  <RiComputerLine className="text-fuchsia-700" size={50} />{" "}
                </span>
                <span className="font-semibold">Computer Troubleshooting</span>
              </div>
              <div
                onClick={() => setComputer(false)}
                className={
                  computer
                    ? "h-40 w-40 border-white border-2 p-2 border-opacity-10 flex flex-col rounded-xl justify-center hover:cursor-w-resize animate-entrance2"
                    : "hidden"
                }
              >
                <span>Active Directory</span>
                <span>Computer Setup</span>
                <span>LAN Setup</span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="works"
        ref={ref3}
        className={
          isClick3
            ? "bg-black flex w-screen h-auto md:h-screen md:flex-row flex-col -mt-20 md:mt-0  items-center justify-center snap-start"
            : "flex w-screen h-screen md:flex-row flex-col  items-center justify-center  bg-black snap-start "
        }
      >
        <motion.div
          animate={control}
          variants={boxVariant3}
          initial="hidden3"
          onClick={() => setIsClick3(true)}
          className="h-5/6 w-screen md:w-3/6 bg-black  "
        >
          <Spline
            className="hover:cursor-pointer"
            scene="https://prod.spline.design/pM2pK3ckYG7I8mCw/scene.splinecode"
          />
        </motion.div>
        <div
          className={
            isClick3
              ? "text-white flex gap-2  md:px-20 flex-col w-screen md:w-1/2 animate-entrance "
              : "hidden"
          }
        >
          <div className="flex justify-between">
            <div>
              <span className="text-5xl font-bold  ">Sample Works</span>
            </div>
            <div
              onClick={() => setIsClick3(false)}
              className="-mt-10 hover:cursor-pointer hover:animate-close"
            >
              <AiFillCloseCircle size={80} />
            </div>
          </div>
          <div className="flex flex-col  gap-10 py-5">
            <div className="flex gap-2 md:gap-10">
              <div className="h-52 w-52 bg-white bg-opacity-10 flex flex-col  justify-center items-center text-center rounded-xl hover:cursor-pointer">
                <a
                  href="https://www.jchagm.org"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className=" h-52 w-52  ">
                    <img
                      src={jchag2}
                      alt="jchag2"
                      className="h-full w-full p-5 hover:animate-scale-center"
                    />
                  </div>
                </a>
              </div>
              <div className="h-52 w-52 bg-white bg-opacity-10 flex flex-col  justify-center items-center text-center rounded-xl hover:cursor-pointer">
                <a
                  href="https://aljaaaymp.github.io/jchag/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className=" h-52 w-52  ">
                    <span>
                      <img
                        src={jchag}
                        alt="movie"
                        className="h-full w-full p-5 hover:animate-scale-center"
                      />
                    </span>
                  </div>
                </a>
              </div>
            </div>
            <div className="flex gap-2 md:gap-10">
              <div className="h-52 w-52 bg-white bg-opacity-10 flex flex-col  justify-center items-center text-center rounded-xl hover:cursor-pointer">
                <a
                  href="https://aljaaaymp.github.io/isbn/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className=" h-52 w-52  ">
                    <img
                      src={isbn}
                      alt="isbn"
                      className="h-full w-full p-5 hover:animate-scale-center"
                    />
                  </div>
                </a>
              </div>
              <div className="h-52 w-52 bg-white bg-opacity-10 flex flex-col  justify-center items-center text-center rounded-xl hover:cursor-pointer">
                <a
                  href="https://aljaaaymp.github.io/PolicyAdministrationSystem/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className=" h-52 w-52  ">
                    <img
                      src={pas}
                      alt="pas"
                      className="h-full w-full p-5 hover:animate-scale-center"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="contact"
        ref={ref4}
        className={
          isClick4
            ? "bg-black flex w-screen h-auto md:h-screen md:flex-row flex-col -mt-20 md:mt-0  items-center justify-center snap-start"
            : "flex w-screen h-screen md:flex-row flex-col  items-center justify-center  bg-black snap-start "
        }
      >
        <motion.div
          animate={control}
          variants={boxVariant4}
          initial="hidden4"
          onClick={() => setIsClick4(true)}
          className="h-5/6 w-screen md:w-3/6 bg-black  "
        >
          <Spline
            className="hover:cursor-pointer"
            scene="https://prod.spline.design/vBs4ZVL7rLdAaaal/scene.splinecode"
          />
        </motion.div>
        <div
          className={
            isClick4
              ? "text-white flex gap-2 px-5 md:px-20 flex-col w-screen md:w-2/3 animate-entrance "
              : "hidden"
          }
        >
          <div className="flex justify-between">
            <div>
              <span className="text-5xl font-bold  ">Contact Me</span>
            </div>
            <div
              onClick={() => setIsClick4(false)}
              className="-mt-10 hover:cursor-pointer hover:animate-close"
            >
              <AiFillCloseCircle size={80} />
            </div>
          </div>
          <div className="flex flex-col gap-2 md:gap-10 py-5">
            <div className="flex md:flex-row flex-col gap-2 md:gap-10">
              <div className="h-32 w-96 bg-white bg-opacity-5 flex  justify-start px-10 items-center text-center rounded-xl">
                <div className="bg-white bg-opacity-10 rounded-full">
                  <span>
                    <AiOutlinePhone size={50} className="p-1 text-blue-300" />
                  </span>
                </div>
                <div className="px-5 flex flex-col text-white">
                  <span>Contact on Phone</span>
                  <span className="text-white text-opacity-80">
                    0945 801 9502
                  </span>
                </div>
              </div>
              <div className="bg-white bg-opacity-5 h-32 w-96 flex flex-row items-center px-5 rounded-lg">
                <div className="bg-white bg-opacity-10 rounded-full">
                  <span>
                    <AiOutlineMail size={50} className="p-1 text-blue-300" />
                  </span>
                </div>
                <div className="px-5 flex flex-col text-white">
                  <span>Contact on Email</span>
                  <span className="text-white text-opacity-80">
                    pascualaljay@gmail.com
                  </span>
                </div>
              </div>
            </div>
            <div className="flex md:flex-row flex-col gap-2 md:gap-10">
              <div className="bg-white bg-opacity-5 h-32 w-96 flex flex-row items-center px-5 rounded-lg">
                <div className="bg-white bg-opacity-10 rounded-full">
                  <span>
                    <CiLocationOn size={50} className="p-1 text-blue-300" />
                  </span>
                </div>
                <div className="px-5 flex flex-col text-white">
                  <span>Contact Address</span>
                  <span className="text-white text-opacity-80">
                    Morning Glory St. Queens Row West Bacoor City, Cavite 4102
                  </span>
                </div>
              </div>
              <div className="bg-white bg-opacity-5 h-32 w-96 flex justify-center items-center gap-2 text-white flex-col">
                <div>
                  <span>Social Media</span>
                </div>
                <div className="flex gap-5">
                  <div className="bg-white bg-opacity-10 rounded-full">
                    <a
                      href="https://www.facebook.com/ljymrnpscl"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>
                        <AiFillFacebook
                          size={50}
                          className="p-2 text-blue-300"
                        />
                      </span>
                    </a>
                  </div>
                  <div className="bg-white bg-opacity-10 rounded-full">
                    <a
                      href="https://www.linkedin.com/in/aljay-pascual-54524717b/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>
                        <AiFillLinkedin
                          size={50}
                          className="p-2 text-blue-300"
                        />
                      </span>
                    </a>
                  </div>
                  <div className="bg-white bg-opacity-10 rounded-full">
                    <a
                      href="https://github.com/aljaaaymp"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>
                        <AiFillGithub size={50} className="p-2 text-blue-300" />
                      </span>
                    </a>
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
