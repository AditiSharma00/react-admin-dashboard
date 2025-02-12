// src/Pages/LoginPage.js
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/authContext";

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (role) => {
    login(role);
    navigate("/");
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={() => handleLogin("admin")}>Login as Admin</button>
      <button onClick={() => handleLogin("user")}>Login as User</button>
    </div>
  );
};

export default LoginPage;
