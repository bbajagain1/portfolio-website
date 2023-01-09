import "./index.css";
import {
  Navbar,
  Hero,
  Skills,
  Experience,
  Education,
  Projects,
  Contact,
  Footer,
} from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        {/* #make the navbar sticky */}
        {/* <script type="text/javascript">
          {window.addEventListener("scroll",function(){
            var header = document.querySelector(Navbar);
            header.classList.toggle("sticky", window.scrollY > 0)
          })}
        </script> */}

        <Hero />
        <Routes>
          <Route exact path="/hero" component={Hero} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/experience" component={Experience} />
          <Route exact path="/education" component={Education} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
        </Routes>
        <Hero />

        <Skills /> 

        <Experience />

       <Education /> 

        <Projects />

        <Contact />

        <Footer />
      </Router>
    </div>
  );
}

export default App;
