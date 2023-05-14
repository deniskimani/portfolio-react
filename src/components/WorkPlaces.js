import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Oaknet from "./work/Oaknet";
import Fututrefast from "./work/Fututrefast";
import BlueReveal from "./work/BlueReveal";
import Deskim from "./work/Deskim";
import Freelance from "./work/Freelance";

const WorkPlaces = () => {
  return (
    <div className="work-places">
      <h2 className="numbered-heading">Where I’ve Worked</h2>
      <div className="work-navbar">
        <span>
          <Link to="/oaknetBusiness">Oaknet Business</Link>
          <Link to="/futureFast">FutureFast Technologies</Link>
          <Link to="/blueReveal">BlueReveal</Link>
          <Link to="/deskimHardware">Deskim Hardware</Link>
          <Link to="/freelance">Freelance</Link>
        </span>
      </div>
      <div className="router-view">
        <Routes>
          <Route element={<Oaknet />} path="/oaknetBusines" />
          <Route element={<Fututrefast />} path="/futureFast" />
          <Route element={<BlueReveal />} path="/blueReveal" />
          <Route element={<Deskim />} path="/deskimHardware" />
          <Route element={<Freelance />} path="/freelance" />
        </Routes>
      </div>
    </div>
  );
};

export default WorkPlaces;
