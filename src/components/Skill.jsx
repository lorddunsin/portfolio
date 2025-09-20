import React from "react"

const skills = ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Git", "GitHub", "Vite"]

function Skills() {
  return (
    <section id="skills" className="py-20 px-10 text-center bg-gray-800">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
        {skills.map((skill, index) => (
          <div key={index} className="p-4 bg-gray-700 rounded-lg shadow hover:scale-105 transition">
            {skill}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
