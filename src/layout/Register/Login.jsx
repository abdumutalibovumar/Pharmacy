import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const success = onLogin(username, password);

    if (!success) {
      toast.error("Неверный логин или пароль");
    }
  };

  return (
    <>
      <main className="login">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <h2>Medione</h2>
            <h3>Добро пожаловать ! Пожалуйста, ведите свою учетную запись</h3>
            <input
              type="text"
              placeholder="Имя"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <h4>Забыли пароль ?</h4>
            <button type="submit">Войти</button>
            <p>
              У вас нет учетной записи ? <span>Зарегистрируйтесь сейчас</span>
            </p>
          </form>
        </div>
      </main>
      <ToastContainer />
    </>
  );
};
