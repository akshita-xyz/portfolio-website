import { BrowserRouter as Router } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { MysticalWaves } from "./components/MysticalWaves";
import { Footer } from "./components/Footer";
import { MobileMessage } from "./components/MobileMessage";
import Parallax from "./components/parallax/parallax";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Banner />
        <Skills />
        <div className="parallax-projects-container">
          <Parallax type="services" />
          <MysticalWaves />
        </div>
        <Footer />
        <MobileMessage />
      </Router>
    </div>
  );
}

export default App;
