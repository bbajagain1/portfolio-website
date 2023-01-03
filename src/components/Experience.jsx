import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from '@mui/icons-material/Work';
import '../styles/experience.css';


function Experience() {
    return (
      <div>
      <h1 className="heading">My Experiences</h1>
        <VerticalTimeline lineColor="#3e497a">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2018 - 2020"
            iconStyle={{ background: "#e9d35b", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Back End Engineer - Apple
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Austin, Tx
            </h4>
            <p>Developed the backend infrastructure for internal tool.</p>
          </VerticalTimelineElement>
  
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - present"
            iconStyle={{ background: "#e9d35b", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Intern
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              San Francisco, CA
            </h4>
            <p>
              Dream of doing intern in big company.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    );
  }
  
  export default Experience;
