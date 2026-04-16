function Projetos() {
    const projetos = [
        {
         nome: "Portfólio React",
         descricao: "Um portfólio pessoal desenvolvido com React para a disciplina de Programação Web.",
        },
        {
         nome: "Landing Page",
         descricao: "Página moderna e responsiva",
        },
    ];

    return (
        <section id="projetos">
            <h2>Meus Projetos</h2>

            {projetos.map((projeto, index) => (
                <div key={index}>
                    <h3>{projeto.nome}</h3>
                    <p>{projeto.descricao}</p>
                </div>
            ))}
        </section>
    );
}

export default Projetos;