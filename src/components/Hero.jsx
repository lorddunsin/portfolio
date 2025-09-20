import React from "react"

function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-600 to-purple-700">
      <h1 className="text-5xl font-bold">Hi, I'm Isaiah Awokiya 👋</h1>
      <p className="mt-4 text-lg text-gray-200">
        Front-End Web Developer | Passionate about building responsive web apps
      </p>
      <div className="mt-6 flex gap-4">
        <a 
          href="#projects" 
          className="px-6 py-3 bg-white text-black rounded-lg font-semibold"
        >
          View My Work
        </a>
        <a 
          href="/Isaiah_Awokiya_Frontend_Resume.pdf"  
          target="_blank" 
          rel="noopener noreferrer"
          className="px-6 py-3 border border-white rounded-lg font-semibold"
        >
          View Resume
        </a>
      </div>
    </section>
  )
}

export default Hero
