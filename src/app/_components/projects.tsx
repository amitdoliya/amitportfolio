"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaEye } from "react-icons/fa";

interface Project {
  image: string;
  title: string;
  link: string;
  description: string;
  techStack: string[];
}

const Projects: React.FC = () => {
  const projectData: Project[] = [
    {
      image: "/image/meyas.png",
      title: "Meyas Art",
      description:
        "Meya's art is a leading Manufacturer of Marble Gods Murti and Idols, Hindu Gods, Buddhism Statues, Jain Gods Statues Marble Handicrafts, Fountains, Roman ...",
      techStack: ["Html", "Custom CSS", "JavaScript"],
      link: "https://meyasstone.netlify.app/",
    },
    {
      image: "/image/softfutura.png",
      title: "Soft Futura",
      description:
        "Complete Web and Mobile App Development Solutions for design, development, testing, launching, and marketing of your website and mobile apps.",
      techStack: ["React", "Node.js", "MongoDB", "Express"],
      link: "https://softfutura.com",
    },
    {
      image: "/image/eventlane.png",
      title: "Eventlane",
      description:
        "Discover events, anywhere, anytime! Join a vibrant world of events curated just for you. Let's celebrate life together on Eventlane.",
      techStack: ["Html", "css", "Javascript"],
      link: "https://eventlane.app",
    },
      {
  image: "/image/shipUp1.png",
  title: "ShipUp",
  description:
    "ShipUP is a modern logistics and warehousing solutions provider, offering quick, reliable, and scalable supply chain services tailored to meet diverse business needs. From managing global shipments to offering secure warehousing, ShipUP combines cutting-edge technology with customer-centric service to deliver an unmatched logistics experience.",
  techStack: ["Html", "Custom CSS", "JavaScript"],
  link: "https://meyasstone.netlify.app/",
},

    {
      image: "/image/travel.png",
      title: "Travel",
      description:
        "Discover and book breathtaking beach getaways, tropical escapes, and exotic tours across the globe. With stunning visuals, immersive video tours, and curated travel experiences, our platform helps you choose and plan your next adventure effortlessly. Whether it's Bali, Hawaii, or Bora Bora — we bring the world's most beautiful places to your screen.",
      techStack: ["React", "html", "css"],
      link: "https://softfutura.com",
    },
    {
      image: "/image/wheel.png",
      title: "Yaar Wheelsz",
      description:
        "This website is a modern, responsive template tailored for showcasing and facilitating pre-owned two-wheeler loans. It features a clean navigation bar with links to Home, About, Calculator, and Contact pages. The homepage opens with an image carousel, followed by a call-to-action section promoting the service. A detailed section outlines the benefits of IDFC First Bank’s two-wheeler loans, highlighting interest rates by vehicle segment.",
      techStack: ["Html", "css", "Javascript"],
      link: "https://yaarawheelsz.com/",
    },
        {
      image: "/image/jewellers.png",
      title: "Jaipur Empuriam Jewellers",
      description:
        "Their designs are both classic and contemporary, appealing to a wide range of tastes. The purity of the polki stones and the craftsmanship are truly commendable ...",
      techStack: ["Html", "css", "Javascript"],
      link: "https://jaipuremporiumjewellers.com/",
    },
         {
      image: "/image/movishow1.png",
      title: "MovisShow",
      description:
        ' "MoviShow" is a platform that offers all types of movies and shows—including Bollywood, Hollywood, old classics, and new releases. It features powerful filters by genres, language, and release year. Users can explore trailers, get tailored recommendations, and enjoy content across all categories—from action to romance, thriller to comedy, and beyond.',
      techStack: ["React" ,"Tailwinds", "TMDI","Redux","Html", "css", "Material UI", "Javascript"],
      link: "https://movishow.netlify.app",
    },
     {
  image: "/image/flipKart.png",
  title: "Flipkart Cloning",
  description:
    "A fully responsive Flipkart clone built to replicate the core features of India's leading e-commerce platform. This project includes user authentication, product listings, filtering, cart management, and a seamless checkout flow. Designed with a modern UI and optimized for performance, it offers a real-time shopping experience powered by React, Redux, Node.js, Express, and MongoDB.",
  techStack: ["React", "Tailwind", "Vite", "Redux", "HTML", "CSS", "Node.js", "Express", "MongoDB"],
  link: "https://your-flipkart-clone-link.com",
}

  ];

  return (
    <section className="py-16 px-6 sm:px-12 text-center bg-gradient-to-r from-blue-200 via-blue-300 to-blue-500">
      <h2 className="text-4xl text-blue-700 font-bold mb-10 font-[cursive] px-2 py-4 rounded-xl animate-pulse">
        My Work & Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="w-[350px] object-cover rounded-lg shadow-md border border-gray-200 bg-white"
          >
          <Image
  src={project.image}
  alt={project.title}
  width={500} // Set appropriate width
  height={300} // Set appropriate height
  className="w-full object-cover rounded-t-lg"
/>
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <Link href={project.link} target="_blank">
                  <span className="text-sm text-white bg-blue-700 w-6 h-6 rounded-md flex items-center justify-center">
                    <FaEye />
                  </span>
                </Link>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-600 text-white px-2 py-1 rounded text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
