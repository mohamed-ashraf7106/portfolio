import Contact from "./ContactPage";
export default function Home() {
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          background: "orange",
          width: "fit-content",
          padding: "10px 20px",
          borderRadius: "10px",
          margin: "0px auto",
        }}
      >
        Who am I?
      </h1>
      <p
        style={{
          fontSize: "20px",
          fontWeight: "400",
          textAlign: "center",
          width: "60%",
          margin: "10px auto",
          border: "1px solid black",
          padding: "15px 20px",
          borderRadius: "20px",
        }}
      >
        I am Mohamed Ashraf. I am a frontend web developer living in Egypt I
        enjoy coding and learning CS related subjects and always learning
        frontend related tech.
      </p>
      <h2
        style={{
          textAlign: "center",
          background: "#3dc2f0",
          width: "fit-content",
          padding: "10px 20px",
          borderRadius: "10px",
          margin: "10px auto",
        }}
      >
        My Skills
      </h2>
      <ul className="skills">
        <li>
          <h3>HTML</h3>
          <img
            src={require("../assets/html.png")}
            alt="error loading picture"
          />
        </li>
        <li>
          <h3>CSS</h3>
          <img src={require("../assets/css.png")} alt="error loading picture" />
        </li>
        <li>
          <h3>Tailwind</h3>
          <img
            src={require("../assets/tailwind.png")}
            alt="error loading picture"
          />
        </li>
        <li>
          <h3>JavaScript</h3>
          <img src={require("../assets/js.png")} alt="error loading picture" />
        </li>
        <li>
          <h3>React</h3>
          <img
            src={require("../assets/react.png")}
            alt="error loading picture"
          />
        </li>
        <li>
          <h3>react-redux</h3>
          <img
            src={require("../assets/redux.png")}
            alt="error loading picture"
          />
        </li>
        <li>
          <h3>Git</h3>
          <img src={require("../assets/git.png")} alt="error loading picture" />
        </li>
        <li>
          <h3>Github</h3>
          <img
            src={require("../assets/github.png")}
            alt="error loading picture"
          />
        </li>
      </ul>
      <h2
        style={{
          textAlign: "center",
          background: "#f05033",
          width: "fit-content",
          padding: "10px 20px",
          borderRadius: "10px",
          margin: "10px auto",
        }}
      >
        My Projects
      </h2>
      <div className="projects">
        <div className="project">
          <h3>Game</h3>
          <p>Its a game like flappy bird</p>
          <img src={require("../assets/game.png")} />
          <h3>Used</h3>
          <ul
            className="tech"
            style={{
              display: "flex",
            }}
          >
            <li>
              <img src={require("../assets/html.png")} />
            </li>
            <li>
              <img src={require("../assets/css.png")} />
            </li>
            <li>
              <img src={require("../assets/js.png")} />
            </li>
          </ul>
          <a
            className="projectDeploy"
            href="https://mohamed-ashraf7106.github.io/Game"
            target="_blank"
          >
            Project{" "}
          </a>
          <a
            className="projectCode"
            href="https://github.com/mohamed-ashraf7106/Game"
            target="_blank"
          >
            Project Code
          </a>
        </div>
        <div className="project">
          <h3>E-commerce site</h3>
          <p>Its an e-commerce site with a cart and dark mode</p>
          <img src={require("../assets/shop.png")} />
          <h3>Used</h3>
          <ul
            className="tech"
            style={{
              display: "flex",
            }}
          >
            <li>
              <img src={require("../assets/html.png")} />
            </li>
            <li>
              <img src={require("../assets/css.png")} />
            </li>
            <li>
              <img src={require("../assets/js.png")} />
            </li>
          </ul>
          <a
            className="projectDeploy"
            href="https://mohamed-ashraf7106.github.io/e-commerce"
            target="_blank"
          >
            Project{" "}
          </a>
          <a
            className="projectCode"
            href="https://github.com/mohamed-ashraf7106/e-commerce"
            target="_blank"
          >
            Project Code
          </a>
        </div>
        <div className="project">
          <h3>E-commerce site</h3>
          <p>Its an e-commerce site with a cart and sliders</p>
          <img src={require("../assets/shop-2.png")} />
          <h3>Used</h3>
          <ul
            className="tech"
            style={{
              display: "flex",
            }}
          >
            <li>
              <img src={require("../assets/html.png")} />
            </li>
            <li>
              <img src={require("../assets/tailwind.png")} />
            </li>
            <li>
              <img src={require("../assets/react.png")} />
            </li>
            <li>
              <img src={require("../assets/redux.png")} />
            </li>
          </ul>
          <a
            className="projectDeploy"
            href="https://mohamed-ashraf7106.github.io/e-commerce-2"
            target="_blank"
          >
            Project{" "}
          </a>
          <a
            className="projectCode"
            href="https://github.com/mohamed-ashraf7106/e-commerce-2"
            target="_blank"
          >
            Project Code
          </a>
        </div>
        <div className="project">
          <h3>Socialmedia app</h3>
          <p>Its an Socialmedia site with a shorts page</p>
          <img src={require("../assets/todo.png")} />
          <h3>Used</h3>
          <ul
            className="tech"
            style={{
              display: "flex",
            }}
          >
            <li>
              <img src={require("../assets/html.png")} />
            </li>
            <li>
              <img src={require("../assets/css.png")} />
            </li>
            <li>
              <img src={require("../assets/react.png")} />
            </li>
            <li>
              <img src={require("../assets/redux.png")} />
            </li>
          </ul>
          <a
            className="projectDeploy"
            href="https://mohamed-ashraf7106.github.io/todo"
            target="_blank"
          >
            Project{" "}
          </a>
          <a
            className="projectCode"
            href="https://github.com/mohamed-ashraf7106/todo"
            target="_blank"
          >
            Project Code
          </a>
        </div>
        <div className="project">
          <h3>Socialmedia app</h3>
          <p>Its an Socialmedia site with a shorts page</p>
          <img src={require("../assets/social.png")} />
          <h3>Used</h3>
          <ul
            className="tech"
            style={{
              display: "flex",
            }}
          >
            <li>
              <img src={require("../assets/html.png")} />
            </li>
            <li>
              <img src={require("../assets/tailwind.png")} />
            </li>
            <li>
              <img src={require("../assets/react.png")} />
            </li>
          </ul>
          <a
            className="projectDeploy"
            href="https://mohamed-ashraf7106.github.io/socialapp"
            target="_blank"
          >
            Project{" "}
          </a>
          <a
            className="projectCode"
            href="https://github.com/mohamed-ashraf7106/socialapp"
            target="_blank"
          >
            Project Code
          </a>
        </div>

        <div className="project">
          <h3>Loan form</h3>
          <p>Its a loan form using react</p>
          <img src={require("../assets/loan.png")} />
          <h3>Used</h3>
          <ul
            className="tech"
            style={{
              display: "flex",
            }}
          >
            <li>
              <img src={require("../assets/html.png")} />
            </li>
            <li>
              <img src={require("../assets/css.png")} />
            </li>
            <li>
              <img src={require("../assets/react.png")} />
            </li>
          </ul>
          <a
            className="projectDeploy"
            href="https://mohamed-ashraf7106.github.io/react-loan"
            target="_blank"
          >
            Project{" "}
          </a>
          <a
            className="projectCode"
            href="https://github.com/mohamed-ashraf7106/react-loan"
            target="_blank"
          >
            Project Code
          </a>
        </div>
        <div className="project">
          <h3>Simple site</h3>
          <p>
            Simple site with no js as i haven't learned it at the time i was
            making it
          </p>
          <img src={require("../assets/temp4.png")} />
          <h3>Used</h3>
          <ul
            className="tech"
            style={{
              display: "flex",
            }}
          >
            <li>
              <img src={require("../assets/html.png")} />
            </li>
            <li>
              <img src={require("../assets/css.png")} />
            </li>
          </ul>
          <a
            className="projectDeploy"
            href="https://mohamed-ashraf7106.github.io/tempate"
            target="_blank"
          >
            Project{" "}
          </a>
          <a
            className="projectCode"
            href="https://github.com/mohamed-ashraf7106/tempate"
            target="_blank"
          >
            Project Code
          </a>
        </div>
        <div style={{ width: "100%" }} className="project">
          <p>this portfolio is made using</p>
          <ul
            className="tech"
            style={{
              display: "flex",
            }}
          >
            <li>
              <img src={require("../assets/html.png")} />
            </li>
            <li>
              <img src={require("../assets/css.png")} />
            </li>
            <li>
              <img src={require("../assets/react.png")} />
            </li>
          </ul>
          <a
            className="projectCode"
            href="https://github.com/mohamed-ashraf7106/portfolio"
            target="_blank"
          >
            Project Code
          </a>
        </div>
        <a
          className="resume"
          href="https://drive.google.com/file/d/13M8k-CCPCf_Ptn78xkjd02VHXEg_Ooda/view?usp=sharing"
          target="_blank"
        >
          Resume
        </a>
      </div>
      <div className="contacthome" style={{ background: "#222" }}>
        <Contact></Contact>
      </div>
    </>
  );
}
