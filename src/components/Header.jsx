import "../assets/scss/components/_header.scss";

export const Header = ({ title }) => {
  const UserImg = "/src/assets/images/photo_2025-08-09_12-15-18.jpg";
  return (
    <header className="header">
      <div className="header__left">
        <h2>{title}</h2>
      </div>

      <div className="header__right">
        <div className="header__user">
          <img src={UserImg} alt="User" className="header__avatar" />
          <div>
            <div className="header__name">Умаров Али</div>
            <div className="header__role">Админ</div>
          </div>
        </div>
      </div>
    </header>
  );
};
