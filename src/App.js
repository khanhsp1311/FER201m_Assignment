import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext } from "react";

// import data from "./components/data.json";
import React, { useEffect, useMemo, useState } from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import Body from "./components/Body";
export const UserContent = createContext();

function App() {
  const [user, setUser] = useState({});
  return (
    <UserContent.Provider value={{ setUser, user }}>
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/:id" element={<Body />} />
          <Route path="/" element={<Body />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />} /> // định nghĩa path
        </Routes>

      </div>
    </Router>
    </UserContent.Provider>
  );
}

export default App;
