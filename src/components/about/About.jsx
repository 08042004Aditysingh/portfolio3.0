import React from "react";
import "./about.css";
import ME from "../../assets/me2.jpeg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            {/* <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article> */}
            {/* <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article> */}
            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>8+ Completed</small>
            </article>
          </div>
          <p>
            Hello! I'm a Trainee Full Stack Developer with approximately one and half
            year of non-commercial experience in development.
            <br></br>
            Currently I work as a Web-facilitator in GDSC, AIT. 
            <br></br>Moreover,I am proficient in English, which means I'm equipped with
            the language skills needed to work effectively in professional
            environments, comprehend technical documentation, and collaborate in
            a global team. My dedication to learning, coupled with my hands-on
            experience, makes me ready to tackle any challenges. I am committed
            to continuous growth, always eager to learn more and push the
            boundaries of what I can achieve as a developer. Feel free to
            explore my portfolio, and do not hesitate to get in touch if you
            have any questions. I am always looking forward to new opportunities
            and collaborations.
          </p>
          <a href="#contact" className="btn btn-primary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
