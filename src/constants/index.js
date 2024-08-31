import projekat1 from "../assets/projects/Projekat1.png";
import projekat2 from "../assets/projects/Projekat2.png";
import projekat3 from "../assets/projects/Projekat3.png";
import projekat4 from "../assets/projects/Projekat4.png";
import { FaCar } from "react-icons/fa"; 
import { FaTicketAlt } from "react-icons/fa"; 
import { RxCrop,RxDesktop} from "react-icons/rx";


export const ServiceData = [

  {
    icon: FaCar,
    title: "Rent a Car",
    content: "This is a web application designed for managing car rentals, allowing users to browse, reserve, and rent vehicles easily and efficiently.",
    href:"https://github.com/BogdanBlagojevic/Rent-a-car",
    backgroundImage: projekat1,
  },
 
  {
    icon: FaTicketAlt,
    title: "E-Commerce Website",
    content: "A fully functional e-commerce website for selling online tickets for charity concerts.",
    href:"https://github.com/BogdanBlagojevic/ecommerce-aspnet-mvc-app",
    backgroundImage: projekat2,
  },
  {
    icon: RxDesktop,
    title: "Portfolio Website",
    content: "This is a portfolio website where I showcase my expertise in creating responsive web designs using React and Tailwind CSS.",
    href:"https://github.com/BogdanBlagojevic?tab=repositories",
    backgroundImage: projekat3,
  },
  
  {
    icon: RxCrop,
    title: "Car advertisements",
    content: "A mini application for posting car advertisements, allowing users to easily create and manage listings for vehicles.",
    href:"https://github.com/BogdanBlagojevic/Auto-Oglas-JavaScript",
    backgroundImage: projekat4,
  },
 
];

export const HERO_CONTENT = `"I am a passionate front-end developer with a strong focus on React. With 1 year of experience, I excel in creating dynamic and responsive user interfaces that enhance user experiences. My expertise in React, coupled with knowledge of modern web technologies, enables me to build efficient, maintainable, and scalable applications. Although I am relatively new to this field, my goal is to acquire as much knowledge and skill as possible to advance my career as a front-end developer. With each project, I aim to make progressive strides, continually improving and expanding my expertise.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EDUCATION = [
  {
    year: "2022 - 2024",
    degree: "Master information technologies and systems",
    school: "The Higher Education Technical School of Professional Studies in Novi Sad.",
    description: `The study program ensures the acquisition of advanced knowledge of the application of modern technologies for the planning, development and testing of desktop, web, and mobile applications of a higher level`,
    technologies: ["Javascript", "React.js", "Node.js", "mongoDB","Less.js"],
  },
  {
    year: "2019 - 2022",
    degree: "Information technologies and system",
    school: "The Higher Education Technical School of Professional Studies in Novi Sad.",
    description: `The goal of the study program is the education of staff who will be able to apply the acquired knowledge and actively participate in performing tasks related to the design, exploitation, and maintenance of hardware and software components of computer and information systems.`,
    technologies: ["HTML", "CSS", "C#", "SQL", "PHP", "CorelDraw", "Adobe Premier"],
  },
  {
    year: "2015 - 2019",
    degree: "Electrical technician of computers",
    school: `Secondary Technical School "Nikola Tesla" in Sremska Mitrovica.`,
    description: `Educational programs aim to educate technicians to work on hardware and software, that is, electrical technicians who deal with the maintenance of the computer's electronics or the implementation of programs on the computer. Students work on the practical application of theoretical knowledge to train them to perform the following tasks: Working with programming languages ​​(C, C#, C++) Working with databases (SQL) Work in programs for simulating the operation of electrical circuits and systems (Electronic, Workbench)`,
    technologies: ["C", "C++", "C#", "HTML","PhotoShop"],
  },
 
];

export const PROJECTS = [

  {
    title: "Rent a Car",
    image: projekat1,
    description:
      "This is a web application designed for managing car rentals, allowing users to browse, reserve, and rent vehicles easily and efficiently.",
    technologies: ["HTML", "CSS", "React", ".NET", "mySQL"],
  },
  {
    title: "E-Commerce Website",
    image: projekat2,
    description:
      "A fully functional e-commerce website for selling online tickets for cherity concerts.",
    technologies: ["MVC", "C#", "ASP.NET", "SQL", "Bootstrap"],
  },
  {
    title: "Portfolio Website",
    image: projekat3,
    description:
      "This is a portfolio website where I showcase my expertise in creating responsive web designs using React and Tailwind CSS.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
  },

  {
    title: "Car advertisements",
    image: projekat4,
    description:
      "A mini application for posting car advertisements, allowing users to easily create and manage listings for vehicles.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

export const CONTACT = {
  address: "Sremska Mitrovica,Serbia ",
  phoneNo: "+381 644 911 628 ",
  email: "bogdanblagojevic23@gmail.com",
};



export const ABOUT_ME = {
  title: "About Me",
  sections: [
    {
      heading: "Passionate Front-End Developer with a Focus on React",
      content: `Hello! My name is Bogdan Blagojevic, a dedicated front-end developer specializing in creating dynamic and responsive user interfaces with a strong focus on React. My journey in web development began with a fascination for crafting engaging and functional digital experiences, and this passion has driven me to delve deeply into the world of front-end technologies.`,
    },
    
    {
      heading: "My Approach",
      content: `My approach to front-end development is centered around creating seamless user experiences. I strive to stay updated with the latest trends and best practices in web development, ensuring that the applications I build are not only functional but also visually appealing and responsive across all devices. Whether it’s a small interactive component or a comprehensive web application, I am committed to producing results that exceed expectations.`,
    },
    {
      heading: "Continuous Learning and Growth",
      content: `Although I am relatively new to this field, I am driven by a desire to continuously learn and grow. My goal is to acquire as much knowledge and skill as possible to advance my career as a front-end developer. Each project I undertake is an opportunity to refine my craft, tackle new challenges, and expand my expertise. I am eager to embrace new technologies and methodologies, always seeking ways to improve and innovate.`,
    },
    {
      heading: "Looking Ahead",
      content: `As I continue to progress in my career, I am excited about the possibilities that lie ahead. I am enthusiastic about collaborating on diverse projects and contributing to impactful web solutions. With each new endeavor, I aim to make meaningful strides in my professional journey, building on my experiences and advancing my skills.`,
    },
    {
      heading: "Get in Touch",
      content: `Thank you for visiting my page. If you have any questions, opportunities for collaboration, or just want to connect, feel free to reach out. I look forward to the possibility of working together and contributing to exciting new projects!`,
    },
  ],
};
