import "./index.css";
import styles from "./styles";
import { Navbar, Hero, Education, Projects, Contact,Footer } from "./components";
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Education />} />
          <Route path="/experience" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
