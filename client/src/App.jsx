import Login from "./pages/LoginPage";
import Home from "./pages/Homepage";
import { useSession } from "./hook/UseSession";

const App = () => {
  const { user } = useSession();
  return user ? <Home /> : <Login />;
};

export default App;
