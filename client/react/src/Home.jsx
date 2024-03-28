import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Login from "./Login";



const Homepage = () => {
  return (
    <div>
      <div className="backg-color">
        <div className="backg-img"></div>
      </div>
      <Routes>

        <Route path="*" element={<Homepage />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/About " element={<About/>} />
  
      </Routes>
      
    </div>
  );
};

export default Homepage;