import { Link } from 'react-router-dom';

function Presentacion() {
  return (
    <main className="hero">
      <div className="hero-content">
        <p className="eyebrow">Acabados y Pinturas</p>
        <h1>Espacios que inspiran. Acabados que perduran.</h1>
        <p className="hero-copy">
          Transformamos hogares y espacios comerciales con pintura profesional,
          acabados de calidad y atención en cada detalle.
        </p>
        <div className="hero-actions">
          <Link className="button button-primary" to="/contacto">Solicita una cotización</Link>
          <Link className="button button-secondary" to="/servicios">Conoce nuestros servicios</Link>
        </div>
      </div>
    </main>
  );
}

export default Presentacion;
