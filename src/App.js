
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppBar from './components/AppBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import NotasFiscais from './pages/NotasFiscais'
import Agentes from './pages/Agentes'
import ContasPagar from './pages/ContasPagar'


function App() {
  return (
    <Router>
      <AppBar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Agentes" element={<Agentes />} />
        <Route path="/ContasPagar" element={<ContasPagar />} />
        <Route path="/NotasFiscais" element={<NotasFiscais />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
