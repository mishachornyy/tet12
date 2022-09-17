import Menu from './component/Menu'
import './App.css';


import {Route, Routes} from "react-router-dom";
import Home from "./page/home";

import Contact from "./page/Contact";

import React from "react";
import Application from "./page/Application";
import License from "./page/License";
import Administrative from "./page/Administrative";
import Reports from "./page/Reports";
function App() {
  return (
    <>
      <Menu />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Application" element={<Application />} />
        <Route path="/License" element={<License />} />
        <Route path="/Administrative" element={<Administrative />} />
        <Route path="/Application" element={<Application />} />
        <Route path="/Reports" element={<Reports />} />


      </Routes>



    </>
  );

}

export default App;


