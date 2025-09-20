import React from "react"

function Contact() {
  return (
    <section id="contact" className="py-20 px-10 text-center bg-gray-800">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <p className="text-gray-300 mb-6">Let’s work together! Reach me via email or social links below.</p>
      <div className="flex justify-center gap-6">
        <a href="mailto:isaiaholuwadunsin@gmail.com" className="text-blue-400 hover:underline">Email</a>
        <a href="https://github.com/lorddunsin" className="text-blue-400 hover:underline">GitHub</a>
        <a href="https://linkedin.com/in/isaiah-awokiya
." className="text-blue-400 hover:underline">LinkedIn</a>
      </div>
    </section>
  )
}

export default Contact
