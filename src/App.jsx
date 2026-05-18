import "./App.css";
import Accesibilidad from "./components/Accesibilidad/Accesibilidad";

function App() {
  return (
    <div className="app-wrapper">
      {/* Navegación */}
      <nav className="navbar">
        <div className="nav-brand">
          <span className="nav-logo">♿</span>
          <span>Widget de Accesibilidad</span>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#inicio">Inicio</a>
          </li>
          <li>
            <a href="#herramientas">Herramientas</a>
          </li>
          <li>
            <a href="#contenido">Contenido</a>
          </li>
          <li>
            <a href="#contacto">Contacto</a>
          </li>
        </ul>
      </nav>

      {/* Hero */}
      <section id="inicio" className="hero">
        <h1>Accesibilidad Web para Todos</h1>
        <p className="hero-subtitle">
          Esta es una demostración de las herramientas de accesibilidad
          disponibles. Utilizá el botón azul en la esquina inferior derecha para
          activarlas.
        </p>
        <div className="hero-actions">
          <button className="btn-primary">Comenzar ahora</button>
          <button className="btn-secondary">Ver más</button>
        </div>
      </section>

      {/* Sección de herramientas */}
      <section id="herramientas" className="section">
        <h2>Herramientas disponibles</h2>
        <p>
          El widget incluye múltiples herramientas diseñadas para mejorar la
          experiencia de usuarios con diferentes necesidades. Podés activarlas
          desde el panel en la parte inferior de la pantalla.
        </p>

        <div className="cards-grid">
          <div className="card">
            <span className="card-icon">🔊</span>
            <h3>Texto a Voz</h3>
            <p>
              Hacé click en cualquier elemento para escuchar su contenido leído
              en voz alta mediante la Web Speech API.
            </p>
            <a href="#herramientas">Ver más</a>
          </div>

          <div className="card">
            <span className="card-icon">🔗</span>
            <h3>Resaltar Enlaces</h3>
            <p>
              Resalta visualmente todos los <a href="#herramientas">enlaces</a>{" "}
              y botones de la página para identificarlos fácilmente.
            </p>
            <a href="#herramientas">Ver más</a>
          </div>

          <div className="card">
            <span className="card-icon"></span>
            <h3>Encabezados Grandes</h3>
            <p>
              Amplía el tamaño de los encabezados (h1–h4) al 400% para mejorar
              la jerarquía visual del contenido.
            </p>
            <a href="#herramientas">Ver más</a>
          </div>

          <div className="card">
            <span className="card-icon">📏</span>
            <h3>Guía de Lectura</h3>
            <p>
              Muestra una línea horizontal que sigue el cursor para guiar la
              lectura del texto en toda la página.
            </p>
            <a href="#herramientas">Ver más</a>
          </div>

          <div className="card">
            <span className="card-icon">🎨</span>
            <h3>Color de Fuente</h3>
            <p>
              Cambia el color del texto ciclando entre varios colores para
              mejorar la legibilidad según tus necesidades.
            </p>
            <a href="#herramientas">Ver más</a>
          </div>

          <div className="card">
            <span className="card-icon">📖</span>
            <h3>Fuente para Dislexia</h3>
            <p>
              Activa la fuente Open-Dyslexic, especialmente diseñada para
              personas con dislexia.
            </p>
            <a href="#herramientas">Ver más</a>
          </div>

          <div className="card">
            <span className="card-icon">🌓</span>
            <h3>Contraste</h3>
            <p>
              Alterna entre modos de contraste: invertido, oscuro y claro para
              mayor visibilidad.
            </p>
            <a href="#herramientas">Ver más</a>
          </div>

          <div className="card">
            <span className="card-icon">👁️</span>
            <h3>Modo Daltonismo</h3>
            <p>
              Aplica filtros de color para simular y compensar distintos tipos
              de daltonismo.
            </p>
            <a href="#herramientas">Ver más</a>
          </div>
        </div>
      </section>

      {/* Sección de contenido de ejemplo */}
      <section id="contenido" className="section section-alt">
        <h2>Contenido de ejemplo</h2>
        <p>
          Esta sección contiene texto de ejemplo para probar las distintas
          herramientas de accesibilidad. Probá hacer click en este párrafo con
          la herramienta <strong>Texto a Voz</strong> activa.
        </p>

        <div className="content-columns">
          <div className="content-col">
            <h3>¿Qué es la accesibilidad web?</h3>
            <p>
              La accesibilidad web significa que los sitios web, las
              herramientas y las tecnologías están diseñadas y desarrolladas de
              tal manera que las personas con discapacidades puedan usarlas.
              Esto abarca todos los tipos de discapacidades que afectan el
              acceso a la Web, incluidas las visuales, auditivas, físicas, del
              habla, cognitivas y neurológicas.
            </p>
            <p>
              La accesibilidad web también beneficia a personas sin
              discapacidades, por ejemplo, en situaciones como uso bajo luz
              solar intensa, con una mano ocupada, o con conexión lenta a
              internet.
            </p>
          </div>

          <div className="content-col">
            <h3>Estándares internacionales</h3>
            <p>
              Las Pautas de Accesibilidad para el Contenido Web (WCAG) son
              desarrolladas por el World Wide Web Consortium (W3C) a través de
              la Iniciativa de Accesibilidad Web (WAI).
            </p>
            <ul className="content-list">
              <li>
                <strong>Perceptible:</strong> la información debe poder
                percibirse.
              </li>
              <li>
                <strong>Operable:</strong> la interfaz debe poder operarse.
              </li>
              <li>
                <strong>Comprensible:</strong> la información debe ser
                comprensible.
              </li>
              <li>
                <strong>Robusto:</strong> el contenido debe ser robusto e
                interpretable.
              </li>
            </ul>
          </div>
        </div>

        <div className="demo-block">
          <h3>Texto de prueba para herramientas</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <div className="demo-buttons">
            <button className="btn-primary">Botón primario</button>
            <button className="btn-secondary">Botón secundario</button>
            <a href="#contenido" className="btn-link">
              Enlace de ejemplo
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="footer">
        <div className="footer-content">
          <div className="footer-col">
            <h3>Widget de Accesibilidad</h3>
            <p>
              Herramienta para mejorar la inclusión digital en sitios web
              gubernamentales.
            </p>
          </div>
          <div className="footer-col">
            <h3>Recursos</h3>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/WAI/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  W3C WAI
                </a>
              </li>
              <li>
                <a
                  href="https://www.argentina.gob.ar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Argentina.gob.ar
                </a>
              </li>
              <li>
                <a href="#inicio">Volver al inicio</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Atajo de teclado</h3>
            <p>
              Presioná <kbd>Alt + A</kbd> para abrir o cerrar el panel de
              accesibilidad.
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Secretaría de Modernización — Widget de Accesibilidad v1.0</p>
        </div>
      </footer>

      {/* Widget de accesibilidad */}
      <Accesibilidad />
    </div>
  );
}

export default App;
