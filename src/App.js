import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Dark from "./assets/sun.png";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import AboutPage from "./AboutPage/AboutPage";
// import * as Icons from "react-bootstrap-icons"

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Navbar /> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
        
      </div>
    );
  }
}

export default App;
