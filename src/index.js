import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="sucre.JPG" alt="sucre papii" />;
}

function Intro() {
  return (
    <div>
      <h1> Sucre Papii </h1>
      <p>
        A skilled frontend developer with a passion for creating intuitive and
        visually appealing web applications. With a background in graphic design
        and a career transition into frontend development,I have honed my
        expertise in HTML, CSS, JavaScript, and modern frameworks such as React.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="💪" color="#123456" />
      <Skill skill="HTML+CSS" emoji="💪" color="orangered" />
      <Skill skill="Javascript" emoji="💪" color="yellow" />
      <Skill skill="Graphic Design" emoji=" 🖥️ " color="orange" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
