import React from "react";
import UserItem from "../UserItem/UserItem";
import Icon from "../../kit/Icon";
import Button from "../../kit/Button";

const Header: React.FC = () => {
  return (
    <header className=" hidden px-16 lg:flex items-center justify-end pt-6 gap-[32px] lg:col-start-4 lg:col-end-5 row-start-1 lg:row-span-1 lg: self-end">
      <UserItem />
      <Icon name="notifications" width={32} height={32} />
      <Icon name="dark-mode" width={32} height={32} />
      <Button
        type="primary"
        buttonText="Logout"
        className="bg-accent text-background text-xl px-10 py-2"
      />
    </header>
  );
};

export default Header;
