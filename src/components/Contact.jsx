import React, { useState } from "react";
import "../styles/contact.css";
import { AiOutlineMail, AiFillPhone } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
import { infosection } from "../constants";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="Contact">
      <h1>Contact me</h1>
      <div className="contactsection-wrapper">
        <div className="left-side">
          <div className="infoblock">
            <AiOutlineMail className="icon" />
            <div className="infotext">{infosection.email}</div>
          </div>
          <div className="infoblock">
            <AiFillPhone className="icon" />
            <div className="infotext">{infosection.phonenumber}</div>
          </div>
          <div className="infoblock">
            <IoLocationSharp className="icon" />
            <div className="infotext">{infosection.address}</div>
          </div>
        </div>
        <div className="right">
          <div className="contactform">
            <form className="formstyle">
              <div className="form-group">
                <label htmlFor="name" className="labelstyle">
                  Your name
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    className="inputstyle"
                    onChange={(e) => setName(e.target.value)}
                  />
                </label>
                <div className="form-group">
                  <label htmlFor="email" className="labelstyle">
                    Your email
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="inputstyle"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </label>
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="labelstyle">
                    Your message
                    <textarea
                      type="message"
                      id="message"
                      className="textstyle"
                      name="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </label>
                </div>
              </div>
              <button type="submit" className="buttonstyle">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
