import { Link } from "react-router-dom";
import { AiFillGithub, AiOutlineLinkedin } from "react-icons/ai";
import { BsSpotify } from "react-icons/bs";
import "../styles/About.css";

function AboutItem({ title, content, children }) {
  return (
    <>
      <div className="about-item-cont">
        <h1 className="sw-text about-title">{title}</h1>
        <p className="about-content">{content}</p>
        {children}
      </div>
    </>
  );
}

function About() {
  return (
    <>
      <div className="about-container">
        <AboutItem
          title={"what is this?"}
          content={`This is Cantina: A web-app built using ReactJS and SWAPI (A star wars API).
          Star Wars is a franchise I really like, so I decided to put that fan-power to use.
          
          Cantina fetches data in a sequential manner from SWAPI, using axios. 
          The data is fetched in batches, using SWAPI's page number query.
          This app was just a personal project to help me learn API functionality. I spent quite some time on this and I'm happy with the end product.
          `}
        />
        <AboutItem
          title={"who am i?"}
          content={`My name is Prithvi Kumar.
        I'm a Computer Science student with interests in WebDev and Data Science.
        I also produce music, you can find me on Spotify as pkdaze
        Click on the links below to learn more about my projects and skills`}
        >
          <div className="social-cont">
            <a
              href="https://github.com/PrithviK21/"
              target={"_blank"}
              rel="noreferrer"
            >
              <AiFillGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/prithvi-kumar-6a977b204/"
              target={"_blank"}
              rel="noreferrer"
            >
              <AiOutlineLinkedin />
            </a>
            <a
              href="https://open.spotify.com/artist/04E4gFt42HgR0K8ySOfCdi"
              target={"_blank"}
              rel="noreferrer"
            >
              <BsSpotify />
            </a>
          </div>
        </AboutItem>
      </div>
      <Link to={"/"}>
        <span className="sw-text e404-btn about-home-btn">home</span>
      </Link>
    </>
  );
}

export default About;
