import React from "react";
import { educationBackground } from "../constants";
import '../styles/education.css'


const Education = () => {
  return (
    <section>
      <h1>Educational Background</h1>

      <table className="table-auto">
        <tbody>
          {educationBackground.map((edu) => (
            <tr key={edu.id}>
              <td class="text-edu">
                {edu.mindegree}
              </td>
              <td>
                <p class="text-maind">{edu.college}</p>
                <br />
                {edu.maindegree}
                <br />
                {edu.year}
                <br />
                {edu.details}
                <br />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Education;
