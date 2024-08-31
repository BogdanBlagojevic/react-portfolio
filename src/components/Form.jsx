import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/mail.png';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaCheckCircle } from 'react-icons/fa'; 

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_6w24nbm',
                'template_0gf1lyx',
                form.current,
                'U5E34ChgIxz3-pGW3')
      .then(
        () => {
          toast.success(
            <div className="flex items-center">
              <FaCheckCircle className="mr-2 text-green-500" /> Your message has been sent successfully!
            </div>
          ); 
          form.current.reset(); 
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Contact Me
      </motion.h1>
      <div className="flex flex-wrap">
      
        <div className="w-full lg:w-1/2 lg:p-8 lg:m-0 md:m-10 sm:m-10 xs:m-10">
          <div className="flex flex-col items-center">
            <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
            >
            <h2 className='mb-4 text-cyan-500 text-2xl'>Get in Touch</h2>
            <p className="mb-4">Feel free to contact me about anything. I'd love if you reach out to me! I'm looking forward to your messages and I'm always here to help or answer any questions you may have.</p>
            </motion.div>
            
            <motion.img 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.5 }}
              className="w-[400px]"
              src={profilePic} 
              alt="profilePicture" 
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2 md:py-4 sm:py-4">
          <div className="flex flex-col items-center lg:items-start xs:py-6">
            <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-2 lg:w1/2'>
              <div className='lg:flex gap-6'>
                <motion.input 
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: 100 }}
                  transition={{ duration: 1.5 }}
                  className='w-full lg:my-3 my-4 rounded-lg bg-transparent p-4 border-[1px] border-cyan-500 text-xl text-cyan-200 font-thin' 
                  placeholder='Your Name' 
                  type="text" 
                  name="user_name"
                />
                <motion.input 
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: 100 }}
                  transition={{ duration: 1.5 }}
                  className='w-full lg:my-3 my-4 rounded-lg bg-transparent p-4 border-[1px] border-cyan-500 text-xl text-cyan-200 font-thin' 
                  placeholder='Your Email' 
                  type="email" 
                  name="user_email"
                />
              </div>
              <motion.textarea 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1.5 }}
                className='w-full my-3 rounded-lg bg-transparent p-4 border-[1px] border-cyan-500 text-xl text-cyan-200 font-thin' 
                placeholder='Your Message...' 
                cols="20" 
                rows="10"
                name="message"
              ></motion.textarea>
              <motion.button 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 1.5 }}
                className='shadow-xl text-white border-2 border-cyan-500 bg-cyan-500 hover:bg-cyan-400 hover:text-white hover:shadow-[0_0_20px_cyan] rounded-lg py-4 px-8 relative overflow-hidden text-xl my-6'
                value='Send' 
                type='submit'
              >
                Send
              </motion.button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Form;
