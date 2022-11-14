import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Reg" element={<Reg />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
