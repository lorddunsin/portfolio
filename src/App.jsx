import React from "react"
import Hero from "./components/Hero"
import About from "./components/About"
import Skill from "./components/Skill"
import Project from "./components/Project"
import Contact from "./components/Contact"
import Resume from "./components/Resume"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Hero />
      <About />
      <Skill />
      <Project />
      <Contact />
    </div>
  )
}

export default App
