import React from "react";
import { FaBars, FaBell } from "react-icons/fa";
import "../assets/scss/components/_header.scss";


export const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <FaBars className="header__icon" />
      </div>

      <div className="header__right">
        
        <FaBell className="header__icon blue" />

        <select className="header__lang">
          <option>Выбрать язык</option>
          <option value="ru">Русский</option>
          <option value="uz">Кыргызский</option>
        </select>

        <div className="header__user">
          {/* <img src={UserImg} alt="User" className="header__avatar" /> */}
          <div>
            <div className="header__name">Умаров Али</div>
            <div className="header__role">Админ</div>
          </div>
        </div>
      </div>
    </header>
  );
};
