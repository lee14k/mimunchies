import Navbar from '../components/Navbar'
import './App.css'
import Home from '../components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Ourmenu from '../components/Ourmenu';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import About from '../components/About';

function App() {
  return (
      <div>
        <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Ourmenu" element={<Ourmenu />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />

        </Routes>
      </Router>
<Footer/>
   </div>
  )
}

export default App
