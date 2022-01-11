import "./App.css";
import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Login/>} exact/>
      <Route path="/dashboard" element={<Dashboard/>} exact/>

      </Routes>
    </div>
  );
};
export default App;
