import { useState } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";
import Accesibilidad from "./components/Accesibilidad";
import ReadTextButton from "./components/ReadText/ReadTextButton";
import ReadingGuide from "./components/ReadingGuide/ReadingGuide";
import viteLogo from "/vite.svg";
import HighlightLinksButton from "./components/HighlightLinksButton/HighlightLinksButton";
import IncreaseHeadingSizeButton from "./components/IncreaseHeadingSizeButton/IncreaseHeadingSizeButton";
import ColorChanger from "./components/ColorChanger/ColorChanger";
import DislexiaToggle from "./components/DislexiaToggle/DislexiaToggle";

const AccessibleTitle = ({ level, children }) => {
  const HeadingTag = `h${level}`; // Determina la etiqueta del título según el nivel proporcionado

  return <HeadingTag aria-label={`Título ${level}`}>{children}</HeadingTag>;
};

function App() {
  const [count, setCount] = useState(0);

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
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <ReadTextButton />
      <ReadingGuide />
      <HighlightLinksButton />
      <IncreaseHeadingSizeButton />
      <ColorChanger />
      <DislexiaToggle />
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
