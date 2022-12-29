import React from "react";
import { educationBackground } from "../constants";

const Education = () => {
  return (
    <section>
    <h1>Educational Background</h1>

      <table className="table-auto">
        <tbody>
          {educationBackground.map((edu) => (
            <tr key={edu.id}>
              <td text-xs text-gray-700 uppercase bg-gray-700 text-gray-400>{edu.mindegree}</td>
              <td>
                {edu.college}<br />
                {edu.maindegree}<br />
                {edu.year}<br />
                {edu.details}<br />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Education;
