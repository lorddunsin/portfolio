import React from "react"

const projects = [
  {
    title: "Deluxe Food",
    description: "A food ordering platform with authentication and product listings.",
    demo: "https://deluxe-food.vercel.app",
    login: "https://deluxe-food.vercel.app/auth/login",
    github: "https://github.com/lorddunsin/deluxe-food" // Replace with repo link later
  },
  {
    title: "Claim Portal",
    description: "An insurance claim management portal built with React.",
    demo: "https://claim-portal-4rol.vercel.app/",
    github: "https://github.com/lorddunsin/claim-portal" // Replace with repo link later
  }
]

function Projects() {
  return (
    <section id="projects" className="py-20 px-10 text-center">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a href={project.demo} target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">Live Demo</a>
              {project.login && (
                <a href={project.login} target="_blank" rel="noreferrer" className="text-green-400 hover:underline">Login Page</a>
              )}
              <a href={project.github} target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
