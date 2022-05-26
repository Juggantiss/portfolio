import logo from "./assets/logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hola, Soy Juan Raul Martinez Lopez</p>
        <p>Frontend Developer Jr</p>
        <p>Este es mi portafolio, está en construcción...</p>
        <p>
          Mientras esperas puedes{" "}
          <a
            className="App-link"
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

export default App;
