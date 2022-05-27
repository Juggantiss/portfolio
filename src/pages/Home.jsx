import logo from "../assets/icons/logo.svg";
import { IoIosArrowDown } from "react-icons/io";
import "../styles/Home.css";

function Home() {
  return (
    <main className="Home">
      <section id="page-1" className="principal-container">
        <figure className="img-container">
          <img src={logo} className="logo" alt="logo" />
        </figure>
        <section className="text-container">
          <p className="title">Hola, Soy Juan Raúl Martínez López.</p>
          <p className="subtitle">Desarrollador React y React Native Jr.</p>
        </section>
        <section className="text-footer">
          <p>Aprende más sobre mí y lo que hago</p>
          <a href="#page-2" className="link">
            <IoIosArrowDown size={30} />
          </a>
        </section>
      </section>

      <section id="page-2" className="second-container">
        <p>Jugaaaaa</p>
      </section>
      {/* <p>
        Mientras esperas puedes{" "}
        <a
          className="Home-link"
          href="https://drive.google.com/file/d/1aUAhm6cE_MA-oOYQlZBEs5Bhr9gc3CnB/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          descargar mi CV.
        </a>
      </p> */}
    </main>
  );
}

export default Home;
