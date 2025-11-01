import { useState } from "react";
import gaming from "../assets/gaming-app.jpg";
import quiz from "../assets/quiz-app.jpg";
import movies from "../assets/movie-app.jpg";
import slides from "../assets/slides.jpg";
import url from "../assets/url-app.jpg";
import weather from "../assets/weather-app.jpg";
import RevealOnScroll from "../Ui/RevealOnScroll";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

function Projects() {
  const [projects] = useState([
    {
      image: gaming,
      name: "3D Gaming App",
      brief:
        "I built an interactive 3D browser game using Three.js, showcasing realistic graphics and smooth user controls, best viewed in a landscape mode.",
      tech: ["Three.js", "Javascript", "Spline"],
      link: "https://github.com/Kizatti/3D-shooter-game",
      demo: "http://kizatti-shooter-game.vercel.app",
    },
    {
      image: quiz,
      name: "Quiz App",
      brief:
        "I created a responsive quiz app with React featuring timers, score tracking, and category-based questions.",
      tech: ["React", "Typescript", "API"],
      link: "https://github.com/Kizatti/quiz-app",
      demo: "http://kizatti-quiz-app.netlify.app",
    },
    {
      image: slides,
      name: "E-commerce App",
      brief:
        "I developed a modern e-commerce site using Javascript and CSS with product listings, modals, and amazing scrolling effects.",
      tech: ["Html", "CSS", "JavaScript"],
      link: "https://github.com/Kizatti/kiana-signature",
      demo: "http://kiana-signature.vercel.app",
    },
    {
     image: url,
      name: "URL Shortener",
      brief:
        "I built a URL shortener with Node.js and MongoDB featuring analytics and link management.",
      tech: ["Next.js", "Node.js", "MongoDB"],
      link: "https://github.com/Kizatti/react-url-shortener",
      demo: "https://kaybee-url-shortener.vercel.app",
    },
    {
      image: weather,
      name: "Weather App",
      brief:
        "I designed a weather app using the OpenWeather API to display real-time forecasts and location-based data.",
      tech: ["React", "Typescipt", "ShadCN"],
      link: "https://github.com/Kizatti/climate",
      demo: "https://kay-weather-app.netlify.app",
    },
    {
      image: movies,
      name: "Movie App",
      brief:
        "I created a movie discovery app using TMDB API with search, filters, and favorites features.",
      tech: ["React", "TailwindCSS", "API"],
      link: "https://github.com/Kizatti/react-movie-app",
      demo: "https://kizatti-movie-app.netlify.app",
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
            Featured Projects
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


