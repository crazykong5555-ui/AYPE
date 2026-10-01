import { BrowserRouter as Router, Routes, Route, NavLink, Link } from 'react-router-dom';
import Presentacion from './Presentacion';
import Galeria from './Galeria';
import Servicios from './Servicios';
import Contacto from './Contacto';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="site-header">
          <Link className="brand" to="/" aria-label="Acabados y Pinturas, inicio">
            <span className="brand-mark" aria-hidden="true">A</span>
            <span>Acabados<span className="brand-amp">&</span>Pinturas</span>
          </Link>
          <nav className="main-nav" aria-label="Navegación principal">
            <NavLink to="/" end>Inicio</NavLink>
            <NavLink to="/servicios">Servicios</NavLink>
            <NavLink to="/galeria">Galería</NavLink>
            <NavLink to="/contacto">Contacto</NavLink>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Presentacion />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<Presentacion />} />
        </Routes>
        <footer className="site-footer">Acabados y Pinturas <span>·</span> Calidad en cada detalle</footer>
      </div>
    </Router>
  );
}

export default App;
