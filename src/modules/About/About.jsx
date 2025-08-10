import React from "react";
import "../../assets/scss/modules/_about.scss";

export default function About() {
  return (
    <section className="about-us">
      <div className="about-us__container">
        <div className="about-us__content">
          <div className="about-us__text">
            <h2>О нас</h2>
            <p>
              Добро пожаловать в <strong>PharmacyEgzamen</strong> — вашу надёжную онлайн-аптеку.
              Мы предлагаем широкий ассортимент качественных лекарственных средств,
              витамины и медицинские товары с удобной доставкой и профессиональной
              поддержкой фармацевтов.
            </p>

            <h3>Наша миссия</h3>
            <p>
              Сделать важные лекарства и медицинские знания доступными для каждого.
              Мы стремимся к честным ценам, прозрачной информации о препаратах и
              безопасной обработке заказов.
            </p>

            <h3>Наши ценности</h3>
            <ul>
              <li>Качество и безопасность — только проверенные поставщики.</li>
              <li>Профессионализм — поддержка фармацевтов и точная информация.</li>
              <li>Удобство — быстрый поиск, простой заказ и гибкие способы оплаты.</li>
            </ul>

            <h3>Контакты</h3>
            <p>
              Есть вопросы? Пишите на <a href="mailto:info@pharmacyegzamen.net">info@pharmacyegzamen.net</a>
              или звоните: +996 551 93-22-21. Мы доступны по будням с 9:00 до 18:00.
            </p>

            <div className="about-us__contact-btn">
              <a href="/contacts">Связаться с нами</a>
            </div>
          </div>

          <div className="about-us__image-card">
            <img
              src="/assets/images/pharmacy-team.jpg"
              alt="Наша команда"
            />
            <div className="about-us__team-info">
              <h4>Команда</h4>
              <p>
                Наша команда — это фармацевты, технологи и специалисты по логистике,
                которые заботятся о ваших заказах на каждом этапе.
              </p>
              <div className="about-us__features">
                <div>
                  <strong>Работа с рецептом</strong>
                  <span>Конфиденциально и безопасно</span>
                </div>
                <div>
                  <strong>Доставка</strong>
                  <span>По городу и пригороду</span>
                </div>
                <div>
                  <strong>Консультации</strong>
                  <span>Онлайн и по телефону</span>
                </div>
                <div>
                  <strong>Гарантия</strong>
                  <span>Качество и возврат</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-us__bottom">
          <div>
            <h5>Почему выбирают нас</h5>
            <p>Быстро. Надёжно. Профессионально.</p>
          </div>
          <div>
            <a href="/catalog">Посмотреть каталог</a>
          </div>
        </div>
      </div>
    </section>
  );
}