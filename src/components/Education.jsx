import React from "react";
import { educationBackground } from "../constants";
import "../styles/education.css";

const Education = () => {
  return (
    <section>
      {/* <h1 className="text-3xl">Educational Background</h1>
      <table className="rounded-full">
        <tbody>
          {educationBackground.map((edu) => (
            <tr key={edu.id}>
              <td className="bg-blue-200 text-edu">{edu.mindegree}</td>
              <td className="flex-col bg-blue-100">
                <div class="text-maind big ">{edu.college}</div>
                <div class="small">{edu.maindegree}</div>
                <div class="small">{edu.year}</div>
                <div class="small">{edu.details}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </section>
  );
};

export default Education;
