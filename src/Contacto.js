function Contacto() {
  return (
    <main className="page-content contact-layout">
      <section>
        <p className="eyebrow">Hablemos de tu proyecto</p>
        <h1>Hagamos realidad tu próximo espacio</h1>
        <p className="page-intro">Cuéntanos qué tienes en mente y te ayudaremos a encontrar el acabado ideal.</p>
      </section>
      <section className="contact-card" aria-label="Información de contacto">
        <h2>Solicita tu cotización</h2>
        <p>Escríbenos o llámanos para conversar sobre tu proyecto.</p>
        <a className="button button-primary" href="mailto:contacto@acabadosypinturas.com">Enviar un correo</a>
        <a className="button button-primary" href="https://wa.me/573106296640" target="_blank" rel="noopener noreferrer">Escribir por WhatsApp</a>
        <p className="contact-note">Atendemos proyectos residenciales y comerciales.</p>
      </section>
    </main>
  );
}

export default Contacto;
