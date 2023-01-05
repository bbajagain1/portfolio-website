import "./index.css";
import styles from "./styles";
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
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap"
          rel="stylesheet"
        ></link>
        <Navbar />
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
