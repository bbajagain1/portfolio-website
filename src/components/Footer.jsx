import React from "react";
import "../styles/footer.css";

import { SiFacebook, SiTwitter, SiGithub, SiLinkedin } from "react-icons/si";

function Footer() {
    return (
      <div className="footer">
        <div className="socialMedia">
          <SiFacebook className="icon" />
          <SiTwitter className="icon" />
          <SiGithub className="icon"/>
          <SiLinkedin className="icon"/>
        </div>
        <p> &copy; 2022 bibektech.com</p>
      </div>
    );
  }
  

export default Footer;
