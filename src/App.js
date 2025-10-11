import Home from "./components/Home";
import Contents from "./components/Contents";
import AboutMe from "./components/AboutMe";
import Links from "./components/Links";
import ja from "./locales/ja";
import en from "./locales/en";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const isJapanese = navigator.language.startsWith("ja");
  const texts = isJapanese ? ja : en;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home texts={texts} />} />
        <Route path="/contents" element={<Contents texts={texts}/>} />
        <Route path="/aboutme" element={<AboutMe texts={texts} />} />
        <Route path="/links" element={<Links texts={texts} />} />
      </Routes>
    </Router>
  );
}

export default App;
