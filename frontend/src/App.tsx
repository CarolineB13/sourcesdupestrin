// frontend/src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Histoire from "./pages/Histoire/Histoire";
import Valeurs from "./pages/Valeurs/Valeurs";
import Collection from "./pages/Collection/Collection";
import Contact from "./pages/Contact/Contact";
import PlaygroundButtons from "./pages/Playground/PlaygroundButtons";
import PlaygroundInputs from "./pages/Playground/PlaygroundInputs";
import PlaygroundCards from "./pages/Playground/PlaygroundCards";
import PlaygroundSections from "./pages/Playground/PlaygroundSections";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export default function App(){
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/playground/buttons" element={<PlaygroundButtons/>}/>
        <Route path="/playground/inputs" element={<PlaygroundInputs />} />
        <Route path="/playground/cards" element={<PlaygroundCards />} />
        <Route path="/playground/sections" element={<PlaygroundSections />} />
        <Route path="/histoire" element={<Histoire/>}/>
        <Route path="/valeurs" element={<Valeurs/>}/>
        <Route path="/collection" element={<Collection/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
