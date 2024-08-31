import { motion } from "framer-motion";
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaSquareXTwitter} from "react-icons/fa6"
import {FaInstagram} from "react-icons/fa"
import { FiDownload } from 'react-icons/fi';


const Footer = () => {
  return (
    <footer className="border-b border-neutral-900 pb-20 text-white lg:px-48 px-4 py-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-12 text-center text-4xl"
      >
        Get in Touch
      </motion.h1>
      <div className="container mx-auto grid grid-cols-1  md:grid-cols-4 gap-8">
        <div className="mb-6 md:mb-0">
          <h2 className="text-[22px] font-semibold text-cyan-500 py-2 uppercase">Message</h2>
          <p className="text-[16px] my-6">
            If you are interested in hiring me or collaborating, please contact me.
          </p>
        </div>
        <div className="mb-6 md:mb-0">
          <h2 className="text-[22px] font-semibold text-cyan-500 py-2 uppercase">Technologies</h2>
          <ul className="text-[16px] my-6">
          <li className="my-3">Javascript</li>
            <li className="my-3">React</li>
            <li className="my-3">Tailwind CSS</li>
            <li className="my-3">Framer Motion</li>
            
          </ul>
        </div>
        <div className="mb-6 md:mb-0">
          <h2 className="text-[22px] font-semibold text-cyan-500 py-2 uppercase">Contact</h2>
          <p className="text-[16px] my-6">Email: bogdanblagojevic23@gmail.com</p>
          <p className="text-[16px] my-6">Phone: +381 644-911-628</p>
          <p className="text-[16px] my-6">Location: Sremska Mitrovica, Serbia</p>
        </div>
        <div className="mb-6 md:mb-0">
          <h2 className="text-[22px] font-semibold text-cyan-500 py-2 uppercase">Follow me</h2>
          <div className="flex space-x-6">
            <a className="text-white hover:text-cyan-500 transition-all duration-150 ease-in-out" href="https://github.com/BogdanBlagojevic">
              <FaGithub />
            </a>
            <a className="text-white hover:text-cyan-500 transition-all duration-150 ease-in-out" href="https://www.linkedin.com/in/bogdan-blagojevi%C4%87-379062243/">
              <FaLinkedin />
            </a>
            <a className="text-white hover:text-cyan-500 transition-all duration-150 ease-in-out" href="https://x.com/Bogdansrb1">
              <FaSquareXTwitter />
            </a>
            <a className="text-white hover:text-cyan-500 transition-all duration-150 ease-in-out" href="https://www.instagram.com/bogdan_blagojevic/">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-[14px] text-neutral-500">
          &copy; {new Date().getFullYear()} Bogdan Blagojević. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
