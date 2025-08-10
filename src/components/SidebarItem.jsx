import { NavLink } from "react-router-dom";

const SidebarItem = ({ label, icon, path }) => {
    return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        isActive ? "sidebar_item active" : "sidebar_item"
      }
    >
      <div className="sidebar__icon">{icon}</div>
      <span>{label}</span>
    </NavLink>
  );
};

export default SidebarItem;
