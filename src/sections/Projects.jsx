import { useState } from "react";
import dashboard from "../assets/dashboard-app.webp";
import ecommerce from "../assets/e-commerce-app.png";
import food from "../assets/food-app.jpg";
import travel from "../assets/travel-app.jpg";
import RevealOnScroll from "../Ui/RevealOnScroll";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

function Projects() {
  const [projects] = useState([
    {
      image: dashboard,
      name: "Dashboard App",
      brief:
        "Scalable Dashboard App with CRUD operations manages all the bookings, users, guests and services.",
      tech: ["React", "TailwindCSS", "Vercel"],
      link: "https://github.com/Kizatti",
      demo: "http://kiana-signature.vercel.app",
    },
    {
      image: ecommerce,
      name: "E-Commerce App",
      brief:
        "Scalable Dashboard App with CRUD operations manages all the bookings, users, guests and services.",
      tech: ["Vue", "Bootstrap", "Netlify"],
      link: "https://github.com/Kizatti",
      demo: "http://mytatechproject.netlify.app",
    },
    {
      image: food,
      name: "Food App",
      brief:
        "Scalable Dashboard App with CRUD operations manages all the bookings, users, guests and services.",
      tech: ["Angular", "CSS", "Firebase"],
      link: "https://github.com/Kizatti",
      demo: "http://kiana-signature.vercel.app",
    },
    {
      image: travel,
      name: "Travel App",
      brief:
        "Scalable Dashboard App with CRUD operations manages all the bookings, users, guests and services.",
      tech: ["Next.js", "TailwindCSS", "Vercel"],
      link: "https://github.com/Kizatti",
      demo: "http://mytatechproject.netlify.app",
    },
    {
      image: dashboard,
      name: "Portfolio Site",
      brief:
        "Personal portfolio website showcasing projects, blogs and contact information with responsive design.",
      tech: ["React", "TailwindCSS", "Vercel"],
      link: "https://github.com/Kizatti",
      demo: "http://kiana-signature.vercel.app",
    },
    {
      image: ecommerce,
      name: "Task Manager",
      brief:
        "A task management app with drag-and-drop, filtering, and persistent storage for productivity.",
      tech: ["React", "LocalStorage", "CSS"],
      link: "https://github.com/Kizatti",
      demo: "http://mytatechproject.netlify.app",
    },
  ]);
  return (
    <section
      id="projects"
      className="min-h-screen sm:min-h-0 flex items-center font-mono justify-center py-10 sm:py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="max-w-3xl text-4xl font-semibold mb-12 bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent text-center ">
            Features Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="p-4 sm:p-6 rounded-xl flex flex-col items-center text-center border-2 border-white/10 hover:border-blue-500/30 hover:shadow-[9_2px_8px_rgba(59,130,246,0.2)] hover:-translate-y-1 transition-all hover:bg-cyan-900 "
              >
                <h3 className="font-semibold text-xl mb-4">{project.name}</h3>
                <p className="text-gray-300 mb-3">{project.brief} </p>
                <div className="flex flex-wrap sm:items-center gap-2 mb-3">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-balance hover:bg-blue-500/20 hover:shadow-[9_2px_8px_rgba(59,130,22.46,0.2)] transition "
                    >
                      {tech}
                    </span>
                  ))}
                  <div className="flex flex-col text-center my-3 py-2 justify-center gap-2 border-2 border-white/10 hover:border-blue-500/30 hover:shadow-[9_2px_8px_rgba(59,130,22.46,0.2)] rounded-xl ">
                    <div className="px-2 py-2">
                      <img src={project.image} alt={`${project.name} Image`} className="w-full h-auto rounded-md" />
                    </div>
                    <div className="w-full flex items-center justify-center gap-10 px-0 sm:px-4">
                      <a
                        href={project.demo || project.link}
                        className="text-sm text-blue-400 hover:text-white font-semibold inline-flex items-center gap-1 mr-8"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FiExternalLink />
                        <span>Live</span>
                      </a>
                      <a
                        href={project.link}
                        className="text-sm text-blue-400 hover:text-white font-semibold inline-flex items-center gap-1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub />
                        <span>Github Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default Projects;


