import logo from "../assets/icons/logo.svg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <p>Hola, Soy Juan Raul Martinez Lopez</p>
        <p>Frontend Developer Jr</p>
        <p>Este es mi portafolio, está en construcción...</p>
        <p>
          Mientras esperas puedes{" "}
          <a
            className="Home-link"
            href="https://drive.google.com/file/d/1aUAhm6cE_MA-oOYQlZBEs5Bhr9gc3CnB/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            descargar mi CV.
          </a>
        </p>
      </header>
    </div>
  );
}

export default Home;
