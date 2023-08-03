import NavBar from "./NavBar"
import Hero from "./Hero"
import Features from "./Features"
import Videos from "./Videos"
import Projects from "./Projects"
import Footer from "./Footer"
function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden flex flex-col">
     {/* width screen and minimum height of screen */}
       <>
       <Hero/>
       <Features/>
       <Videos/>
       <Projects/>
       </>
    </div>
  )
}

export default Home;
