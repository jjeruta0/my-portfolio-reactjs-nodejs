import styles from "./HomePage.module.css";
import homeProfileImg from "../../assets/cropped.png";
import xIcon from "../../assets/twitter-dark.svg";
import linkedInIcon from "../../assets/linkedin-dark.svg";
import githubIcon from "../../assets/github-dark.svg";
import CV from "../../assets/cv.pdf";

function HomePage() {
  return (
    <section id="home" className={styles.container}>
      <div className={styles.profilePicContainer}>
        <img
          className={styles.profilePic}
          src={homeProfileImg}
          alt="Profile pic of Joshua Jeruta"
        />
      </div>
      <div className={styles.info}>
        <h1>Joshua Jeruta</h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="https://x.com/" target="_blank">
            <img src={xIcon} alt="X icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/joshua-jeruta-ba7429219/"
            target="_blank"
          >
            <img src={linkedInIcon} alt="LinkedIn icon" />
          </a>
          <a href="https://github.com/jjeruta0" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
        </span>
        <p className={styles.description}>
          Motivated and adaptable Frontend Developer with hands-on experience in
          developing software applications and a strong interest in front-end
          development
        </p>
        <a href={CV} download>
          <button className="hoverResume">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default HomePage;
