import {Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import About from "./Routes/About";
import Services from "./Routes/Services";



export default function App() {

  return (
    <div className="App">
      <Routes>
        <Route element={<Home/>} path="/"/>
        <Route element={<Services/>} path="/services"/>
        <Route element={<Contact/>} path="/contact"/>
        <Route element={<About/>} path="/about"/>
      </Routes>
    </div>
  );
}