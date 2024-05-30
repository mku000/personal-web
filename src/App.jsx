import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from "./pages/Landing";
import Shelf from './pages/Shelf';



function App() {
  
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/shelf" element={<Shelf />} />
      </Routes>
    </Router>
  )
}

export default App
