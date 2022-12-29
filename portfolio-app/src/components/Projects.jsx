import React from "react";
import { shield, star, google, apple } from "../assets";

const Projects = () => {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        class="carousel slide bg-green-500"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="w-50 h-50" src={shield} alt="First slide" />
            <div class="carousel-caption d-none d-md-block">
              <h5>caption</h5>
              <p>caption description</p>
            </div>
          </div>
          <div class="carousel-item">
            <img class="w-70 h-50" src={star} alt="Second slide" />
            <div class="carousel-caption d-none d-md-block">
              <h5>caption1</h5>
              <p>caption description1</p>
            </div>
          </div>
          <div class="carousel-item">
            <img class="w-70 h-50" src={google} alt="Third slide" />
            <div class="carousel-caption d-none d-md-block">
              <h5>caption2</h5>
              <p>caption description2</p>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </>
  );
};

export default Projects;
