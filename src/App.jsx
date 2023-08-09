import Navbar from "../components/Navbar";
import "./App.css";
import Home from "../components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Ourmenu from "../components/Ourmenu";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import CandiesTreats from "../components/CandiesTreats";
import FruitsMore from "../components/FruitsMore";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Ourmenu" element={<Ourmenu />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/CandiesTreats" element={<CandiesTreats />} />
          <Route path="/FruitsMore" element={<FruitsMore />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
