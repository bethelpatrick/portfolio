import React from "react";
import "./App.css";

function App() {

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">
        <h1 className="logo">Bethel Patrick</h1>

        <div className="nav-links">
          <button onClick={() => scrollTo("about")}>About</button>
          <button onClick={() => scrollTo("skills")}>Skills</button>
          <button onClick={() => scrollTo("projects")}>Projects</button>
          <button onClick={() => scrollTo("contact")}>Contact</button>
        </div>
      </nav>


      {/* HERO */}
      <section className="hero">
        <h2>Computer Science Graduate</h2>
        <p>
          I build clean, efficient and user-focused web applications.
        </p>

        <button
          className="hero-button"
          onClick={() => scrollTo("projects")}
        >
          View Projects
        </button>
      </section>


      {/* ABOUT */}
      <section id="about" className="about">
        <h2>About Me</h2>

        <p>
          I'm a Computer Science graduate passionate about building
          modern web applications and solving real-world problems
          through clean, efficient code.
        </p>

        <p>
          My interests include web development, software engineering,
          and building user-friendly digital products using modern
          technologies like JavaScript and React.
        </p>
      </section>


      {/* SKILLS */}
      <section id="skills" className="skills">
        <h2>Skills</h2>

        <div className="skills-grid">

          <div className="skill">JavaScript</div>
          <div className="skill">React</div>
          <div className="skill">Java</div>
          <div className="skill">HTML</div>
          <div className="skill">CSS</div>
          <div className="skill">MySQL</div>
          <div className="skill">Git</div>
          <div className="skill">REST APIs</div>

        </div>
      </section>


      {/* PROJECTS */}
      <section id="projects" className="projects">
        <h2>Projects</h2>

        <div className="projects-grid">

          <div className="project-card">
            <h3>Quiz & Puzzle App</h3>
            <p>
              A dynamic quiz and puzzle platform built with
              Java, MySQL and React featuring multiple quiz modes,
              scoring, and leaderboards.
            </p>
          </div>

          <div className="project-card">
            <h3>Portfolio Website</h3>
            <p>
              A modern responsive developer portfolio built
              with React showcasing projects and technical skills.
            </p>
          </div>

          <div className="project-card">
            <h3>Digit Recognition AI</h3>
            <p>
              A handwritten digit recognition system using
              Convolutional Neural Networks trained on the
              MNIST dataset.
            </p>
          </div>

        </div>
      </section>


      {/* CONTACT */}
      <section id="contact" className="contact">
        <h2>Contact</h2>

        <p>
          Feel free to reach out if you'd like to collaborate,
          discuss opportunities, or connect.
        </p>

        <p>Email: bethelpatrick60@gmail.com</p>
        <p>Number: +44 7300213616</p>
        <p>
  LinkedIn: 
  <a 
    href="https://www.linkedin.com/in/bethel-patrick-72b729270/"
    target="_blank"
    rel="noopener noreferrer"
  >
    View my LinkedIn
  </a>
</p>

      </section>

    </div>
  );
}

export default App;

