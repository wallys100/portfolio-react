function Contato() {
    return (
        <section id="contato">
            <h2>Contato</h2>
            <form>
                <input type="text"placeholder="Nome" />
                <input type="email" placeholder="Email" />
                <textarea placeholder="Mensagem"></textarea>
                <button>Enviar</button>
            </form>
        </section>    
        );
}

export default Contato;