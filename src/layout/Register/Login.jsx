import React from "react";

export const Login = () => {
  return (
    <main className="login">
      <div className="container">
        <form>
          <h2>I next</h2>
          <h3>Добро пожаловать ! Пожалуйсто ведите свою учетную запись</h3>
          <input type="text" placeholder="Имя" />
          <input type="password" placeholder="Пароль" />
          <h4>Забыли пароль ?</h4>
          <button>Войти</button>
          <p>
            У вас нет учетной записи ? <span>Зарегестрируйтесь сейчас</span>
          </p>
        </form>
      </div>
    </main>
  );
};
