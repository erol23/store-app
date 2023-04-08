import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FavoritesPage from "./pages/FavoritesPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-slate-500 min-h-screen text-center">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/favorite" element={<FavoritesPage />}/>
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
