import {HERO_CONTENT} from "../constants"
import profilePic from "../assets/hero.png"
import { motion } from "framer-motion"
import resume from "../assets/resume/resume.pdf"
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaSquareXTwitter} from "react-icons/fa6"
import {FaInstagram} from "react-icons/fa"
import { FiDownload } from 'react-icons/fi';


const Hero = () => {
  const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay },
    },
  });

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 md:py-4 sm:py-4">
          <div className="flex flex-col items-center lg:items-start xs:py-6">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Bogdan Blagojević
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-cyan-300 via-slate-500 to-cyan-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Frontend Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tight"
            >
              {HERO_CONTENT}
            </motion.p>

            <motion.div
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              className="flex items-center justify-center gap-4 text-2xl cursor-pointer xs:text-sm"
            >
              <a
                href={resume}
                download="Resume.pdf"
                className="flex items-center px-7 py-3 bg-cyan-500 rounded-full text-white shadow-[0_0_5px_cyan,0_0_25px_cyan] hover:shadow-[0_0_5px_cyan,0_0_25px_cyan,0_0_50px_cyan,0_0_100px_cyan,0_0_200px_cyan]"
              >
                Resume <FiDownload className="ml-2" />
              </a>
              <a
                className="inline-flex items-center justify-center w-10 h-10 bg-transparent border-2 border-cyan-500 rounded-full text-2xl text-cyan-500 no-underline hover:bg-cyan-500 hover:text-white hover:shadow-[0_0_20px_cyan]"
                href="https://www.linkedin.com/in/bogdan-blagojevi%C4%87-379062243/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
              <a
                className="inline-flex items-center justify-center w-10 h-10 bg-transparent border-2 border-cyan-500 rounded-full text-2xl text-cyan-500 no-underline hover:bg-cyan-500 hover:text-white hover:shadow-[0_0_20px_cyan]"
                href="https://github.com/BogdanBlagojevic"
                target="_blank"
              >
                <FaGithub />
              </a>
              <a
                className="inline-flex items-center justify-center w-10 h-10 bg-transparent border-2 border-cyan-500 rounded-full text-2xl text-cyan-500 no-underline hover:bg-cyan-500 hover:text-white hover:shadow-[0_0_20px_cyan]"
                href="https://www.instagram.com/bogdan_blagojevic/"
                target="_blank"
              >
                <FaInstagram />
              </a>
              <a
                className="inline-flex items-center justify-center w-10 h-10 bg-transparent border-2 border-cyan-500 rounded-full text-2xl text-cyan-500 no-underline hover:bg-cyan-500 hover:text-white hover:shadow-[0_0_20px_cyan]"
                href="https://x.com/Bogdansrb1"
                target="_blank"
              >
                <FaSquareXTwitter />
              </a>
            </motion.div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:p-8 lg:m-0 md:m-10 sm:m-10 xs:m-10">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="mt-[-75px]"
              src={profilePic}
              alt="profilePicture"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;





