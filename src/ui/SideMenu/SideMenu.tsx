import React from "react";
import Icon from "../../kit/Icon";
import Logo from "../../kit/Logo/Logo";
const iconNames = [
  "home-icon",
  "search-icon",
  "saved-icon",
  "what-to-read",
  "translate-to-voice",
  "add-friend",
  "settings",
];
const SideMenu: React.FC = () => {
  return (
    <aside
      className=" flex flex-col gap-8 h-full items-center justify-flex-start  w-fit py-[42px] px-[34px] md: mr-6
 border-r border-[#C1C1C1] "
    >
      <Logo className="mb-[8rem]" />
      {iconNames.map((iconName, index) => (
        <Icon
          key={iconName}
          name={iconName}
          className={`p-2 ${
            index === 0 ? "bg-[#FF4F5B] text-[#F1EFE3]" : "text-[#2A2A2A]"
          }`}
        />
      ))}
    </aside>
  );
};

export default SideMenu;
