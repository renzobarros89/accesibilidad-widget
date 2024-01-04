import "./App.css";
import reactLogo from "./assets/react.svg";
import Accesibilidad from "./components/Accesibilidad";
import viteLogo from "/vite.svg";

const AccessibleTitle = ({ level, children }) => {
  const HeadingTag = `h${level}`; // Determina la etiqueta del título según el nivel proporcionado

  return <HeadingTag aria-label={`Título ${level}`}>{children}</HeadingTag>;
};

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Accesibilidad - Secretaría de Modernización</h1>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        <AccessibleTitle level={1}>Mi Título Principal</AccessibleTitle>
        <AccessibleTitle level={2}>Subtítulo 1</AccessibleTitle>
        <AccessibleTitle level={2}>Subtítulo 2</AccessibleTitle>
      </div>
      <Accesibilidad />
    </>
  );
}

export default App;
