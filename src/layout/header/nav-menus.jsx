import { NavLink } from "react-router-dom";
import menuData from "../../data/menu-data";

const NavMenus = () => {
  return (
    <nav id="mobile-menu">
      <ul>
        {menuData.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.path}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {item.label}
            </NavLink>
            {item.submenu && (
              <ul className="submenu">
                {item.submenu.map((submenuItem, submenuIndex) => (
                  <li key={submenuIndex}>
                    <NavLink to={submenuItem.path}>{submenuItem.label}</NavLink>
                    {submenuItem.submenu && (
                      <ul className="submenu">
                        {submenuItem.submenu.map(
                          (submenuItem, submenuIndex) => (
                            <li key={submenuIndex}>
                              <NavLink to={submenuItem.path}>
                                {submenuItem.label}
                              </NavLink>
                            </li>
                          )
                        )}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenus;
