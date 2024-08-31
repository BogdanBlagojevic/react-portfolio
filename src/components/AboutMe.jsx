import { useState, useEffect, useRef } from "react";
import { ABOUT_ME } from "../constants";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; 
import { motion } from "framer-motion";

const AboutMe = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);


  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % ABOUT_ME.sections.length);
  };


  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? ABOUT_ME.sections.length - 1 : prevIndex - 1
    );
  };


  const goToSlide = (index) => {
    setCurrentIndex(index);
  };


  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 5000); 

    return () => {
      clearInterval(intervalRef.current); 
    };
  }, []);


  const handleButtonClick = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null; 
  };

  return (
    <div className="border-b border-neutral-900 pb-4">
            <motion.h1
                whileInView={{opacity:1, y:0}}
                initial={{opacity:0, y:-100}}
                transition={{duration:1.5}}
                className="my-20 text-center text-4xl"> About me</motion.h1>
      <div className="container mx-auto">
        <div className="flex flex-wrap lg:justify-center items-center">
          <div className="w-full lg:w-3/4 text-left">
            <motion.div
              key={currentIndex} 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }} 
              transition={{ duration: 1.5 }}
            >
              <h2 className="mb-2 text-2xl font-semibold text-cyan-500 ">
                {ABOUT_ME.sections[currentIndex].heading}
              </h2>
              <p className="mb-4 text-neutral-400">
                {ABOUT_ME.sections[currentIndex].content}
              </p>
            </motion.div>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <button
            onClick={() => { handleButtonClick(); prevSlide(); }}
            className="px-4 py-2 bg-cyan-500 text-white rounded flex items-center mr-2 hover:bg-cyan-400 hover:text-white hover:shadow-[0_0_20px_cyan]"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={() => { handleButtonClick(); nextSlide(); }}
            className="px-4 py-2 bg-cyan-500 text-white rounded flex items-center ml-2 hover:bg-cyan-400 hover:text-white hover:shadow-[0_0_20px_cyan]"
          >
            <FaArrowRight />
          </button>
        </div>
        <div className="flex justify-center mt-4">
          {ABOUT_ME.sections.map((_, index) => (
            <button
              key={index}
              onClick={() => { handleButtonClick(); goToSlide(index); }}
              className={`w-3 h-3 rounded-full mx-1 ${
                index === currentIndex ? 'bg-cyan-500' : 'bg-neutral-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
