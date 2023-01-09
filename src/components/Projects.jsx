import React from "react";
import "../styles/projects.css";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { projects } from "../assets";
import SectionTitle from "./SectionTitle";

const Projects = () => {

  const [width, setWidth] = useState(0);
  const carousel = useRef();

  // to determin how much to scroll
  useEffect(() => {
      console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  },[])

  return (
    <div className="projects">
    <SectionTitle heading="Projects"/>
      <motion.div ref={carousel} className="carousel" whileTap={{cursor:"grabbing"}}>
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel"
        >
          {projects.map((image) => {
            return (
              <motion.div className="item" key={image}>
                <img src={image} alt="project"></img>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Projects;
