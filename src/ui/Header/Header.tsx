import React from "react";
import UserItem from "../UserItem/UserItem";
import Icon from "../../kit/Icon";
import Button from "../../kit/Button";

const Header: React.FC = () => {
  return (
    <header className=" hidden md:flex items-center justify-end pt-6 gap-[32px] md:col-start-4 md:col-end-5 row-start-1 md:row-span-1 md: self-end">
      <UserItem />
      <Icon name="notifications" width={32} height={32} />
      <Icon name="dark-mode" width={32} height={32} />
      <Button
        buttonText="Logout"
        className="bg-[#FF4F5B] text-[#F1EFE3] text-2xl px-10 py-2"
      />
    </header>
  );
};

export default Header;
