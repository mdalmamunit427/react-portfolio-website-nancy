import React from "react";
import contactImg from "../assets/contact.jpg"

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      {/* Contact info */}
      <div className="contact-info">
        <h2>Hire Me.</h2>
        <p>
          I am available for freelance work. Connect with me via phone:{" "}
          <span>01923 088574</span> or email: <span>admin@example.com</span>
        </p>
        {/* forms */}
        <form>
            <input type="text" name="name" id="name"  placeholder="Your name *" required/>
            <input type="email" name="email" id="email"  placeholder="Your email *" required/>
            <input type="text" name="subject" id="subject"  placeholder="Write a subject"/>
            <textarea name="message" id="message" cols="30" rows="10" placeholder="Your massage"></textarea>
            <button className="btn">Submit</button>
        </form>
      </div>
      {/* image */}
      <div className="contact-img">
        <img src={contactImg} alt="" />
      </div>
    </div>
  );
};

export default Contact;
