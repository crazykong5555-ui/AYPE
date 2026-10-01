const projects = [
  ['Renovación residencial', 'Pintura interior · Bogotá'],
  ['Fachada renovada', 'Pintura exterior · Bogotá'],
  ['Detalles decorativos', 'Acabado especial · Bogotá'],
];

function Galeria() {
  return (
    <main className="page-content">
      <p className="eyebrow">Nuestro trabajo</p>
      <h1>Ideas que toman forma</h1>
      <p className="page-intro">Cada proyecto refleja nuestro cuidado por los detalles y los buenos acabados.</p>
      <div className="gallery-grid">
        {projects.map(([title, detail], index) => (
          <article className={`project-card project-card-${index + 1}`} key={title}>
            <div className="project-art" aria-hidden="true"><span>{String(index + 1).padStart(2, '0')}</span></div>
            <div className="project-caption"><h2>{title}</h2><p>{detail}</p></div>
          </article>
        ))}
      </div>
    </main>
  );
}

export default Galeria;
