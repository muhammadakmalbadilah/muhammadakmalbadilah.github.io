import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Project from "./components/Project"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Journey from './components/Journey'

export default function App() {
  return (
    <>
      <Navbar />
        <main>
          <Hero />
          <About />
          <Project />
          <Journey />
          <Skills />
          <Contact />
        </main>
    </>
  )
}