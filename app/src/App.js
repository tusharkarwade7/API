import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<ProtectedRoute element={<Home />} />} />
                <Route path="/about" element={<ProtectedRoute element={<About />} />} />
                <Route path="/contact" element={<ProtectedRoute element={<Contact />} />} />
            </Routes>
        </Router>
    );
};

export default App;
