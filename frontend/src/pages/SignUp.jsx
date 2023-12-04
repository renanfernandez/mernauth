import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault;
    console.log("cadastro");
  };

  return (
    <main className="login-page">
      <form className="login-form" onSubmit={submitHandler}>
        <div className="form-input-control">
          <label className="form-label">
            Nome:
            <input
              className="form-input"
              type="text"
              value={email}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div className="form-input-control">
          <label className="form-label">
            Email:
            <input
              className="form-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="form-input-control">
          <label className="form-label">
            Senha:
            <input
              className="form-input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <div className="form-input-control">
          <label className="form-label">
            Confirmar Senha:
            <input
              className="form-input"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>
        </div>
        <button className="btn btn-primary" type="submit">
          Cadastrar
        </button>

        <p>
          Já tem um conta? <Link to="/entrar">Entre</Link>
        </p>
      </form>
    </main>
  );
};

export default SignUp;
