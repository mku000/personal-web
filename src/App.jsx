import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from "./pages/Landing";
import Shelf from './pages/Shelf';
import RandD from './pages/RandD';
import DetailRnD from './pages/DetailRnD';



function App() {
  
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/shelf" element={<Shelf />} />
        <Route path="/rnd" element={<RandD />} />
        <Route path="/rnd/details" element={<DetailRnD />} />
      </Routes>
    </Router>
  )
}

export default App
