import { useState } from "react";
import { useSession } from "../hook/useSession";

const Login = () => {
  const { login, loading } = useSession();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    const errorMessage = await login({ name, password });
    if (errorMessage) {
      setError(errorMessage);
    } else {
      setError("");
    }
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nombre"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Contraseña"
      />
      <button onClick={handleLogin} disabled={loading}>
        {loading ? "Cargando..." : "Iniciar sesión"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}{" "}
    </div>
  );
};

export default Login;
