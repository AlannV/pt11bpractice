import React from "react";
import "./App.css";
import { Contador } from "./components/contador/Contador";
import { Card } from "./components/contador/Card";
import { Formulario } from "./components/contador/Formulario";
import { Routes, Route } from "react-router-dom";
import { Login } from "./components/contador/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route exact path="/formulario" element={<Formulario />} />
        <Route path="/contador" element={<Contador />} />
        <Route path="/card" element={<Card />} />
      </Routes>
    </div>
  );
}

export default App;
