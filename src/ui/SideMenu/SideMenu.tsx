import React, { useState } from "react";
import Icon from "../../kit/Icon";
import Logo from "../../kit/Logo/Logo";

const menuItems = [
  { icon: "home-icon", label: "Home" },
  { icon: "search-icon", label: "Search A Book" },
  { icon: "saved-icon", label: "Saved Books" },
  { icon: "what-to-read", label: "Hmm... Choose A Book" },
  { icon: "translate-to-voice", label: "Let`s transform to voice" },
  { icon: "add-friend", label: "Add Friends" },
  { icon: "settings", label: "Settings" },
];

interface SideMenuProps {
  onMenuHoverChange: (isHovered: boolean) => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ onMenuHoverChange }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
    onMenuHoverChange(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    onMenuHoverChange(false);
  };

  return (
    <div
      className="relative flex h-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Згорнуте меню */}
      <aside className="flex flex-col gap-8  items-center justify-start w-fit py-[42px] px-[34px] border-r border-[#C1C1C1] bg-[#F1EFE3] z-50 h-full">
        <Logo className="mb-[8rem]" />
        {menuItems.map((item, index) => (
          <Icon
            key={item.icon}
            name={item.icon}
            className={`p-2 ${index === 0 ? "bg-[#FF4F5B] text-[#F1EFE3]" : "text-[#2A2A2A]"}`}
          />
        ))}
      </aside>

      {/* Розгорнуте меню */}
      {hovered && (
        <aside className="absolute top-0 z-50 flex flex-col gap-8 items-start justify-start w-max h-full py-[42px]  bg-[#F1EFE3] text-[#2A2A2A] ">
          <div className="flex items-center gap-2 mb-[8rem] px-[34px] cursor-pointer">
            <Logo />
            <span className="text-4xl font-bold">BookVista</span>
          </div>
          <ul className="flex flex-col gap-4 w-full">
            {menuItems.map((item, index) => (
              <li
                key={item.icon}
                className="flex items-center gap-4 w-full px-[34px] py-2 hover:bg-[#E0E0E0]  transition-colors duration-200"
              >
                <Icon
                  name={item.icon}
                  className={`p-2 ${index === 0 ? "bg-[#FF4F5B] text-[#F1EFE3]" : "text-[#2A2A2A]"}`}
                />
                <span className="text-2xl font-light">{item.label}</span>
              </li>
            ))}
          </ul>
        </aside>
      )}
    </div>
  );
};

export default SideMenu;
