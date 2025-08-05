import { useState } from "react";
import Icon from "../../kit/Icon";
import { menuItems } from "../../constants";
import { Link, useLocation } from "react-router-dom";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

  const handleOpenMenu = () => setIsOpen(true);
  const handleCloseMenu = () => setIsOpen(false);
  return (
    <>
      <div
        onClick={handleOpenMenu}
        className={`block lg:hidden rounded-full bg-[#ffffff] shadow-lg p-4 fixed top-4 left-4 z-50 transition-opacity duration-300 ${
          isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <Icon
          name="burger-menu"
          className="size-6 text-accent cursor-pointer h-10 w-10"
        />
      </div>

      <div
        className={`fixed inset-0 z-40 flex flex-col overflow-y-scroll justify-center items-center pt-24 bg-white transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={handleCloseMenu}
          className="absolute top-6 right-6 text-3xl"
        >
          ✕
        </button>

        <ul className="flex flex-col gap-4 w-full items-center">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <li
                key={item.icon}
                className="flex items-center gap-4 w-full px-[34px] py-2 hover:bg-[#E0E0E0] transition-colors duration-200"
              >
                <Link
                  to={item.path}
                  className="flex items-center gap-4 w-full h-full"
                  onClick={handleCloseMenu}
                >
                  <Icon
                    name={item.icon}
                    className={`p-2 ${
                      isActive
                        ? "bg-accent text-background"
                        : "text-dark-default"
                    }`}
                  />
                  <span className="text-2xl font-light">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default BurgerMenu;
