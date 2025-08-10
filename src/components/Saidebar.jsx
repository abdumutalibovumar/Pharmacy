import SidebarItem from "./SidebarItem";
import { RiDashboardLine, RiShoppingCart2Line, RiBox3Line, RiRobot2Line } from "react-icons/ri";
import Logo from "../assets/images/Logo.png";
import '../assets/scss/components/_saidebar.scss'

export const Saidebar = () => {
  const menu = [
    {
      label: "Dashboard",
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
    {
      label: "О нас",
      icon: <RiRobot2Line />,
      path: "/about",
    }
  ];

  return (
    <div className="saidebar">
      <img src={Logo} alt="logo" className="saidebar__logo" />

      <ul className="sidebar_list">
        {menu.map((item, index) => (
          <SidebarItem key={index} label={item.label} icon={item.icon} path={item.path} />
        ))}
      </ul>
    </div>
  );
};
