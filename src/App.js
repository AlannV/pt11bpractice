import React from "react";
import "./App.css";
import { Contador } from "./components/contador/Contador";
import { Card } from "./components/contador/Card";
import { Formulario } from "./components/contador/Formulario";
import { Routes, Route } from "react-router-dom";
import { Login } from "./components/contador/Login";
import { Formulario2 } from "./components/contador/Formulario2";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/form2" element={<Formulario2 />} />
        <Route exact path="/formulario" element={<Formulario />} />
        <Route path="/contador" element={<Contador />} />
        <Route path="/card" element={<Card />} />
      </Routes>
    </div>
  );
}

export default App;
