import React, { useState } from "react";
import Icon from "../../kit/Icon";
import Logo from "../../kit/Logo/Logo";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  { icon: "home-icon", label: "Home", path: "/" },
  { icon: "search-icon", label: "Search A Book", path: "/search" },
  { icon: "saved-icon", label: "Saved Books", path: "/saved" },
  { icon: "what-to-read", label: "Hmm... Choose A Book", path: "/choose" },
  {
    icon: "translate-to-voice",
    label: "Let`s transform to voice",
    path: "/voice",
  },
  { icon: "add-friend", label: "Add Friends", path: "/friends" },
  { icon: "settings", label: "Settings", path: "/settings" },
];

interface SideMenuProps {
  onMenuHoverChange: (isHovered: boolean) => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ onMenuHoverChange }) => {
  const [hovered, setHovered] = useState(false);
  const location = useLocation();

  const handleMouseEnter = () => {
    setHovered(true);
    onMenuHoverChange(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    onMenuHoverChange(false);
  };

  const handleMenuItemClick = () => {
    setHovered(false);
    onMenuHoverChange(false);
  };

  return (
    <div
      className="relative flex h-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Closed menu*/}
      <aside className="flex flex-col gap-8  items-center justify-start w-fit py-[42px] px-[34px] border-r border-border bg-background z-50 h-full">
        <Logo className="mb-[8rem]" />
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <Link key={item.icon} to={item.path} className="block">
              {" "}
              <Icon
                name={item.icon}
                className={`p-2 ${isActive ? "bg-accent text-background" : "text-dark-default"}`}
              />
            </Link>
          );
        })}
      </aside>

      {/* Opened menu */}
      {hovered && (
        <aside className="absolute top-0 z-50 flex flex-col gap-8 items-start justify-start w-max h-full py-[42px]  bg-background text-dark-default ">
          <Link
            to="/"
            className="flex items-center gap-2 mb-[8rem] px-[34px] cursor-pointer"
          >
            <Logo />
            <span className="text-4xl font-bold">BookVista</span>
          </Link>
          <ul className="flex flex-col gap-4 w-full">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <li
                  key={item.icon}
                  className="flex items-center gap-4 w-full px-[34px] py-2 hover:bg-[#E0E0E0]  transition-colors duration-200"
                >
                  <Link
                    to={item.path}
                    className="flex items-center gap-4 w-full h-full"
                    onClick={handleMenuItemClick}
                  >
                    <Icon
                      name={item.icon}
                      className={`p-2 ${isActive ? "bg-accent text-background" : "text-dark-default"}`}
                    />
                    <span className="text-2xl font-light">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </aside>
      )}
    </div>
  );
};

export default SideMenu;
