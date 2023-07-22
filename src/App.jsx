import Navbar from '../components/Navbar'
import './App.css'
import Home from '../components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Ourmenu from '../components/Ourmenu';

function App() {
  return (
      <div>
        <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Ourmenu" element={<Ourmenu />} />

        </Routes>
      </Router>

   </div>
  )
}

export default App
