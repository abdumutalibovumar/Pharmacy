import SidebarItem from "./SidebarItem";
import { IoExitOutline } from "react-icons/io5";
import {
  RiDashboardLine,
  RiShoppingCart2Line,
  RiBox3Line,
  RiRobot2Line,
} from "react-icons/ri";
import Logo from "../assets/images/Logo.png";
import "../assets/scss/components/_saidebar.scss";

export const Saidebar = ({ onLogout }) => {
  const menu = [
    {
      label: "Приборная",
      icon: <RiDashboardLine />,
      path: "/",
    },
    {
      label: "Товары",
      icon: <RiBox3Line />,
      path: "/products",
    },
    {
      label: "Корзина",
      icon: <RiShoppingCart2Line />,
      path: "/cart",
    },
    {
      label: "AI-помощник",
      icon: <RiRobot2Line />,
      path: "/ai-helper",
    },
  ];

  return (
    <div className="saidebar">
      <img src={Logo} alt="logo" className="saidebar__logo" />

      <ul className="sidebar_list">
        {menu.map((item, index) => (
          <SidebarItem
            key={index}
            label={item.label}
            icon={item.icon}
            path={item.path}
          />
        ))}
      </ul>

      <button onClick={() => onLogout()} className="exit">
        Выход <IoExitOutline />
      </button>
    </div>
  );
};
