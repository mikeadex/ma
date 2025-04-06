import { useEffect, useState } from "react";
import menuData from "../../data/menu-data";
import { NavLink } from "react-router-dom";

export default function MobileMenus({ openOffcanvas }) {
    const [subMenu, setSubMenu] = useState("");
    const [navTitle, setNavTitle] = useState("");
    //openMobileMenu
    const openMobileMenu = (menu) => {
        if (navTitle === menu) {
            setNavTitle("");
        } else {
            setNavTitle(menu);
        }
    };
    // openSubMobileMenu
    const openSubMobileMenu = (s_menu) => {
        if (subMenu === s_menu) {
            setSubMenu("");
        } else {
            setSubMenu(s_menu);
        }
    };

    useEffect(() => {
        if (!openOffcanvas) {
            setNavTitle("");
            setSubMenu("");
        }
    }, [openOffcanvas]);
    return (
        <div className="mobile-menu mean-container">
            <div className="mean-bar">
                <nav className="mean-nav">
                    <ul>

                        {menuData.map((item, index) => (
                            <li key={index} className={item.submenu ? "dropdown-opened" : ""}>
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) => (isActive ? "active" : "")}
                                >
                                    {item.label}
                                </NavLink>
                                {item.submenu && (
                                    <ul className="submenu" style={{
                                        display: navTitle === item.label ? "block" : "none",
                                    }}>
                                        {item.submenu.map((submenuItem, submenuIndex) => (
                                            <li key={submenuIndex}>
                                                <NavLink to={submenuItem.path}>{submenuItem.label}</NavLink>
                                                {submenuItem.submenu && (
                                                    <ul className="submenu" style={{
                                                        display: subMenu === submenuItem.label ? "block" : "none",
                                                    }}>
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
                                                {submenuItem.submenu && <a
                                                    className={`mean-expand ${subMenu === submenuItem.label ? "mean-clicked" : ""}`}
                                                    onClick={() => openSubMobileMenu(submenuItem.label)}
                                                    style={{ fontSize: "18px", cursor: 'pointer' }}
                                                >
                                                    <i className="fal fa-plus"></i>
                                                </a>}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                {item.submenu && (
                                    <a
                                        className={`mean-expand ${navTitle === item.label ? "mean-clicked" : ""}`}
                                        onClick={() => openMobileMenu(item.label)}
                                        style={{ fontSize: "18px", cursor: 'pointer' }}
                                    >
                                        <i className="fal fa-plus"></i>
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    )
}
