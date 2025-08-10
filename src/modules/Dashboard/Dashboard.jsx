import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Header } from "../../components/Header";
import '../../assets/scss/modules/_dashboard.scss';
import DashboardCharts from './Dashboardcharts';

function Dashboard() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50
    });
  }, []);

  return (
    <>
      <Header />
      <div className="dashboard">
        <div className="container">
          <h1 data-aos="fade-right">Панель управления</h1>

          {/* Доход */}
          <div className="stats-cards">
            {[
              { title: 'Доход за 1 день', value: '₽12,000', delay: 100 },
              { title: 'Доход за 1 неделю', value: '₽80,000', delay: 200 },
              { title: 'Доход за 1 месяц', value: '₽350,000', delay: 300 },
              { title: 'Доход за 1 год', value: '₽4,200,000', delay: 400 },
            ].map((item, index) => (
              <div
                key={index}
                data-aos="slide-up"
                data-aos-delay={item.delay}
                className="stat-card"
              >
                <h3>{item.title}</h3>
                <p>{item.value}</p>
              </div>
            ))}
          </div>

          {/* Общая сумма */}
          <div data-aos="zoom-in" data-aos-delay="500" className="total-sum">
            <h2>Общая сумма</h2>
            <p>₽5,000,000</p>
          </div>

          {/* Статистика лекарств */}
          <div className="medicine-stats">
            <h2 data-aos="fade-left" data-aos-delay="600">Статистика лекарств</h2>
            <div className="stats-cards">
              {[
                { title: 'Общее количество', value: '3,120', delay: 100 },
                { title: 'Продано сегодня', value: '268', delay: 200 },
                { title: 'Продано за неделю', value: '892', delay: 300 },
                { title: 'Просрочено', value: '104', delay: 400 },
                { title: 'Остаток на складе', value: '2,748', delay: 500 },
                { title: 'Самый продаваемый', value: 'Парацетамол', delay: 600 },
                { title: 'Минимальный остаток', value: 'Нурофен – 4 шт', delay: 700 },
              ].map((item, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={item.delay}
                  className="stat-card"
                >
                  <h3>{item.title}</h3>
                  <p>{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Графики */}
          <div data-aos="fade-up" data-aos-delay="800">
            <DashboardCharts />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
