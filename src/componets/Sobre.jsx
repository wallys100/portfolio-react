import foto from "../assets/minha-foto.jpeg";

function Sobre() {
  return (
    <section id="sobre" className="sobre-container">

      <div className="sobre-content">

        <img src={foto} alt="Minha Foto" className="foto-perfil" />

        <div className="sobre-texto">
          <h2>Sobre Mim</h2>

          <p>
            Olá! Sou Walis Barbosa, estudante de Tecnologia em Sistemas para Internet.
            Apaixonado por tecnologia, sempre buscando evoluir.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Sobre;
