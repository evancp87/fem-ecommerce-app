/* eslint-disable quotes */
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductPage from "./Components/ProductPage";
import Nav from "./Components/Nav";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Sidebar />
        <Routes>
          <Route path="/" element={<ProductPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
