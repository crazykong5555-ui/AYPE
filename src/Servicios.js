const services = [
  ['Pintura interior y exterior', 'Renovación de muros y fachadas con preparación cuidadosa y aplicación uniforme.'],
  ['Estuco y reparación de superficies', 'Alistamiento, resanes y nivelación para lograr paredes listas para un acabado impecable.'],
  ['Acabados decorativos', 'Texturas y detalles personalizados para darle carácter a cada espacio.'],
  ['Enchapes', 'Instalación de enchapes para renovar y proteger pisos y paredes.'],
  ['Acabados en drywall', 'Soluciones en drywall para divisiones, cielos rasos y detalles interiores.'],
  ['Estuco tradicional', 'Aplicación de estuco para alisar y preparar superficies.'],
  ['Estuco veneciano', 'Acabado decorativo de apariencia marmolizada y brillo distintivo.'],
  ['Pinturas especiales decorativas', 'Acabados decorativos personalizados para transformar tus espacios.'],
  ['Óleos decorativos', 'Aplicación de óleos para crear acabados decorativos duraderos.'],
  ['Pinturas para hospitales, clínicas y consultorios', 'Pinturas con características antibacteriales y antifúngicas, según las necesidades y exigencias aplicables.'],
  ['Acabados de fachadas', 'Renovación y protección de fachadas con acabados adecuados para exteriores.'],
  ['Granimármol', 'Aplicación de acabado granimármol para fachadas y superficies.'],
  ['Carraplast', 'Aplicación de Carraplast para lograr superficies con textura decorativa.'],
  ['Lavado y sellado de fachadas', 'Limpieza y sellado para ayudar a proteger y conservar las fachadas.'],
  ['Aseo de obra', 'Limpieza final para entregar los espacios listos para su uso.'],
];

function Servicios() {
  return (
    <main className="page-content">
      <p className="eyebrow">Lo que hacemos</p>
      <h1>Servicios para renovar tus espacios</h1>
      <p className="page-intro">Te acompañamos desde la preparación hasta los últimos detalles del acabado.</p>
      <div className="service-grid">
        {services.map(([title, description]) => (
          <article className="service-card" key={title}>
            <span className="service-mark" aria-hidden="true">✳</span>
            <h2>{title}</h2>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </main>
  );
}

export default Servicios;
