import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Aboutus from "./components/Aboutus";
import Intro from "./components/Intro";
import Products from "./components/Products";

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
    </div>
  );
}

export default App;
