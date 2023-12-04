const Home = () => {
  return (
    <main className="home-page">
      <div className="container">
        <h1>Sistema de autenticação simples </h1>
        
        <section>
          <h2>Stack MERN</h2>
          <p>
            A stack MERN consiste em MongoDB, Express.js, React.js e Node.js. Essas tecnologias juntas formam um conjunto poderoso para desenvolvimento web full-stack.
          </p>
        </section>

        <section>
          <h2>Redux Toolkit</h2>
          <p>
            Redux Toolkit é uma biblioteca oficial para gerenciar o estado em aplicações React. Ele simplifica a configuração do Redux, oferecendo funcionalidades como "slices" para reducers e ações, tornando o desenvolvimento mais eficiente.
          </p>
        </section>

        <section>
          <h2>JWT para Autenticação</h2>
          <p>
            JSON Web Tokens (JWT) são usados para autenticação segura. Eles são tokens baseados em JSON que contêm informações específicas do usuário e são assinados para garantir integridade e autenticidade. Em uma aplicação MERN, JWT pode ser usado para autenticar usuários e gerenciar sessões.
          </p>
        </section>
      </div>
    </main>
  );
};

export default Home;
