import React from "react";
import "../styles/footer.css";

function Footer() {
    return (
      <div className="foo">
      <footer>
        <ul className="social-icon">
          <li><a href="1"><ion-icon name="logo-facebook"></ion-icon></a></li>
          <li><a href="2"><ion-icon name="logo-github"></ion-icon></a></li>
          <li><a href="3"><ion-icon name="logo-instagram"></ion-icon></a></li>
          <li><a href="4"><ion-icon name="logo-linkedin"></ion-icon></a></li>
        </ul>
        <p>© All rights reserved.</p>
        </footer>
      </div>
    );
  }
  

export default Footer;
