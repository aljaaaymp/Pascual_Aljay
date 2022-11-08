import Spline from "@splinetool/react-spline";
import { useEffect, useState } from "react";
import { animate, motion, transform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { DiJava } from "react-icons/di";
import { IoLogoCss3 } from "react-icons/io";
import { FaNetworkWired } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import { AiFillCloseCircle } from "react-icons/ai";



function App() {
   const [isClick, setIsClick] = useState(false);
   const [isClick2, setIsClick2] = useState(false);
   const [backEnd, setBackEnd] = useState(false);
   const [frontEnd, setFrontEnd] = useState(false);
   const [network, setNetwork] = useState(false);
   const [computer, setComputer] = useState(false);

  const control = useAnimation();

  const boxVariant = {
    visible: { x: 0, opacity: 1, scale: 1, transition: { duration: 1.5 } },
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

  const [ref, inView] = useInView({ threshold: 0.2 });
  const [ref2, inView2] = useInView({threshold: 0.2});
  const [ref3, inView3] = useInView({ threshold: 0.2 });

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
    }
  }, [control, inView2]);

  useEffect(() => {
    if (inView3) {
      control.start("visible3");
    } else {
      control.start("hidden3");
    }
  }, [control, inView3]);

 


  return (
    <div className="h-screen w-screen snap-y snap-mandatory overflow-scroll scrollbar-hide">
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
          id="skills"
        >
          <Spline
            className="hover:cursor-pointer"
            scene="https://prod.spline.design/vBs4ZVL7rLdAaaal/scene.splinecode"
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
            An ambitious and self-motivated web developer with a considerable
            technical skill who possesses self-discipline and ability to work
            with minimum of supervision. Able to play a key role in website
            development to ensure maximum accessibility, user experience and
            usability. A quick learner who can absorb new ideas and can
            communicate clearly and effectively.
          </p>
        </div>
      </div>

      <div
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
          id="skills"
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
                    ? "h-40 w-40 border-white border-2  border-opacity-10 flex flex-col justify-center rounded-xl hover:cursor-w-resize animate-entrance2"
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
                    ? "h-40 w-40 border-white border-2  border-opacity-10 flex flex-col rounded-xl justify-center hover:cursor-w-resize animate-entrance2 "
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
                    ? "h-40 w-40 border-white border-2  border-opacity-10 flex flex-col justify-center rounded-xl hover:cursor-w-resize animate-entrance2"
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
                    ? "h-40 w-40 border-white border-2  border-opacity-10 flex flex-col rounded-xl justify-center hover:cursor-w-resize animate-entrance2"
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
        ref={ref3}
        className={
          isClick2
            ? "bg-black flex w-screen h-auto md:h-screen md:flex-row flex-col -mt-20 md:mt-0  items-center justify-center snap-start"
            : "flex w-screen h-screen md:flex-row flex-col  items-center justify-center  bg-black snap-start "
        }
      >
        <motion.div
          animate={control}
          variants={boxVariant3}
          initial="hidden3"
          onClick={() => setIsClick2(true)}
          className="h-5/6 w-screen md:w-3/6 bg-black  "
          id="skills"
        >
          <Spline
            className="hover:cursor-pointer"
            scene="https://prod.spline.design/9xFfPUCBHI8P3HIZ/scene.splinecode"
          />
        </motion.div>
        <div
          className={
            isClick2
              ? "text-white flex gap-5 px-5 md:px-20 flex-col w-screen md:w-1/2"
              : "hidden"
          }
        >
          <span
            className="text-5xl font-bold "
            onClick={() => setIsClick2(false)}
          >
            Aljay Pascual
          </span>
          <p className="font-semibold text-xl">Software Engineer</p>
          <p className="tracking-widest">
            An ambitious and self-motivated web developer with a considerable
            technical skill who possesses self- discipline and ability to work
            with minimum of supervision. Able to play a key role in website
            development to ensure maximum accessibility, user experience and
            usability. A quick learner who can absorb new ideas and can
            communicate clearly and effectively.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
