import { useSession } from "../hook/useSession";

const Home = () => {
  const { user, logout } = useSession();

  return (
    <div>
      <h2>Bienvenido, {user.name}</h2>
      <button onClick={logout}>Cerrar sesión</button>
    </div>
  );
};

export default Home;
