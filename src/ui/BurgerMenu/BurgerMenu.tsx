import React from "react";
import Icon from "../../kit/Icon";

const BurgerMenu = () => {
  return (
    <>
      <div className="rounded-full bg-[#ffffff] shadow-lg p-4 fixed top-4 left-4 z-50 ">
        <Icon
          name="burger-menu"
          className="size-6 text-[#FF4F5B] cursor-pointer h-10 w-10"
        />
      </div>
    </>
  );
};

export default BurgerMenu;
