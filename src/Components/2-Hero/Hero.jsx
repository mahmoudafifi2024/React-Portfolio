import Lottie from "lottie-react";
import { motion } from "framer-motion";
import laptobAnimation from "../../../src/Animation/laptob.json";
import "./hero.css";
const Hero = () => {
  return (
    <section className="hero flex">
      <div className="left-section">
        <div className="parent-avatar">
          <motion.img
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
            className="avatar"
            src="./me-modified.png"
            alt=""
          />
          <span className="icon-verified"></span>
        </div>

        <h1 className="title">
          Hi there I`m Mahmoud
          <br /> and I a Front End Developer
        </h1>
        <p className="sub-title">
        I am a passionate and highly skilled front-end developer with extensive 
        experience in building dynamic, responsive, and user-friendly web applications. 
        With a strong background in JavaScript, React, HTML, and CSS, I have worked on 10+ hands-on projects. 
        My expertise lies in transforming complex requirements into seamless and intuitive user interfaces. 
        Committed to continuous learning, I leverage cutting-edge technologies to deliver exceptional user experiences and drive
        </p>

        <div className="all-icons flex">
          <a href="https://x.com/Mahmoud1386277" target="blank"><div className="icon icon-x"></div></a>
          <a href="https://www.instagram.com/mahmoudafifi24/" target="blank"><div className="icon icon-instagram"></div></a>
          <a href="https://www.linkedin.com/in/mahmoud-afifi-7b57592ba/" target="blank"><div className="icon icon-linkedin"></div></a>
          <a href="https://github.com/mahmoudafifi2024" target="blank"><div className="icon icon-github"></div></a>
          
        </div>
      </div>

      <div className="right-section animation">
        <Lottie
          style={{ height: "30rem", width: "40rem" }}
          animationData={laptobAnimation}
          loop={true}
        />
      </div>
    </section>
  );
};

export default Hero;
