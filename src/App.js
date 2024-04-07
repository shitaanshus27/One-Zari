import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Aboutus from "./components/Aboutus";
import Intro from "./components/Intro";
import Products from "./components/Products";
import OurVision from "./components/OurVision";
import OurTeam from "./components/OurTeam";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="text-black text-2xl">
      {/*Navbar*/}
      <Navbar />
      {/* Hero */}
      <Hero />
      {/* Aboutus */}
      <Aboutus />
      {/* Introduction */}
      <Intro />
      {/* Products */}
      <Products />
      {/* Our Vision */}
      <OurVision />
      {/* Our Team */}
      <OurTeam />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
