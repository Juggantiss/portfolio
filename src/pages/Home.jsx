import logo from "../assets/icons/logo.svg";
import { IoIosArrowDown, IoLogoGithub, IoLogoTwitter } from "react-icons/io";
import { BsLinkedin } from "react-icons/bs";
import "../styles/Home.css";

function Home() {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert("Pronto estará disponible...");
  };

  return (
    <main className="Home">
      <section id="page-1" className="principal-container">
        <section className="social-cards">
          <a
            className="link"
            href="https://www.linkedin.com/in/juan-raul-martinez-lopez-4b552b211/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin size={30} />
          </a>
          <a
            className="link"
            href="https://github.com/Juggantiss"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoGithub size={30} />
          </a>
          <a
            className="link"
            href="https://twitter.com/Juggantiss"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoTwitter size={30} />
          </a>
        </section>
        <figure className="img-container">
          <img src={logo} className="logo" alt="logo" />
        </figure>
        <section className="text-container">
          <p className="title">Soy Juan Raúl.</p>
          <p className="subtitle">Desarrollador React y React Native Jr.</p>
        </section>
        <section className="text-footer">
          <p>Aprende más sobre mí y lo que hago</p>
          <a href="#page-2" className="link">
            <IoIosArrowDown size={30} />
          </a>
        </section>
        <section className="contact">
          <button>
            <a href="#contact-me" className="box link">
              Contáctame
            </a>
          </button>
          <button>
            <a
              className="box link"
              href="https://drive.google.com/file/d/1aUAhm6cE_MA-oOYQlZBEs5Bhr9gc3CnB/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Descarga mi cv
            </a>
          </button>
        </section>
      </section>

      <section id="page-2" className="second-container">
        <p>Proyectos...</p>
      </section>

      <section id="contact-me" className="contact-container">
        <div className="card">
          <h4 className="title-contact">Contáctame</h4>
          <form onSubmit={handleSubmit}>
            <div className="field">
              <input
                autoComplete="off"
                placeholder="Nombre"
                className="input-field"
                name="logname"
                type="text"
              />
            </div>
            <div className="field">
              <input
                autoComplete="off"
                placeholder="Email"
                className="input-field"
                name="logemail"
                type="email"
              />
            </div>
            <div className="field">
              <textarea
                rows={5}
                autoComplete="off"
                placeholder="Mensaje"
                className="input-field"
                name="logmessage"
                type="text"
              />
            </div>
            <button className="btn" type="submit">
              Enviar
            </button>
          </form>
        </div>
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
