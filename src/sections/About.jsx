import RevealOnScroll from "../Ui/RevealOnScroll"; 
function About() {
  const skills = [
    "Html",
    "Css",
    "Javascript",
    "TypeScript ",
    "React",
    "Git/Github",
    "Node Js",
    "Vue Js",
    "Next.js",
    "Boostrap",
    "TailwindCSS",
    "Angular",
    "Spline",
    "MongoDB",
    "Vercel",
    "Netlify",
    "AWS",
    "Copilot",
    "Gemini",
  ];
  return (
    <section
      id="about"
      className="min-h-screen font-mono flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="max-w-3xl text-4xl font-semibold mb-12 bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent text-center ">
            About Me
          </h2>
          <div className="p-8 mb-6 rounded-xl border-white/10 border-2 hover:-translate-y-1 transition-all ">
            <p className="text-gray-300 mb-5 text-base">
             I am a passionate Software Engineer and a Full-Stack Developer specializing in frontend engineering with 5+ years of experience and 40+ completed projects. 
             I specialize in building clean, responsive, and user-friendly web applications with modern tools like React.js, Tailwind CSS, and TypeScript, 
             delivering solutions that meet both user needs and business goals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-2xl text-center font-bold mb-8">💼 Skills</h3>
              <div className="flex justify-center flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-balance hover:bg-blue-500/20 hover:shadow-[9_2px_8px_rgba(59,130,22.46,0.2)] transition "
                    key={index}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-2xl text-center font-bold mb-8">
                📚 Education
              </h3>
              <ul className="pl-5 list-disc list-inside text-base text-gray-300">
                
                  <strong>
                    {" "}
                    <em className="whitespace-nowrap">♦ B.Sc in Computer Science </em>{" "}
                  </strong> <br />
                  Kwara State University, Malete. <br />
                  Second Class Upper Division. <br />
                  (2021-2024) <br />
              
                <br />
                  <strong>
                    {" "}
                    <em className="whitespace-nowrap">♦ CPN-licensed Professional </em>{" "}
                  </strong> <br />
                  Chartered Information Technology Practitioner[C.I.T.P]. <br />
                  (2019-2022).
                  <br />
              
              <br />
                  <strong>
                    {" "}
                    <em className="whitespace-nowrap">♦ OND in Computer Science </em>{" "}
                  </strong> <br />
                  Federal Polytechnic, Ede. <br />
                  Upper Credit. <br />
                  (2016-2018)
              
              </ul>
            </div>
          </div>
          <div className="p-6 hover:-translate-y-1 transition-all">
            <h3 className="text-2xl text-center font-bold mb-8">
              💻 Work Experience
            </h3>
            <ul className="pl-5 list-disc list-inside text-base text-gray-300">
              <li>
                <strong className="text-blue-400">
                  <em>Frontend Developer (Freelance / Contract)</em>
                </strong> </li>
                <li> Remote | Jan 2020 - Present </li>
                <li> TaTech Hub | Feb 2024 - Nov 2024 </li>
                <li> Built responsive and accessible websites using React.js,
                Next.js, and Tailwind CSS</li>
                 <li>
               Real Estate Listing Site - Created with Angular, TypeScript, and Firebase, 
               featuring property search and filters.</li>
                <li> 3D Gaming Web App - Built with React.js, Tailwind CSS, 
                  and Spline for immersive 3D experiences. </li>
                <li> Integrated RESTful APIs and optimized performance for faster
                load times.
              </li>
               <li> Task Management Tool - Designed with React.js, Node.js, 
                and MongoDB for efficient task tracking. </li>
                <li> And so many other beautiful projects... </li>
             </ul>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default About;
