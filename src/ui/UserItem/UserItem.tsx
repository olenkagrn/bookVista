import React from "react";
import userLogo from "../../assets/userLogo.jpg";

const UserItem: React.FC = () => {
  return (
    <div className="flex items-center gap-[16px]">
      <img
        src={userLogo}
        alt="User Logo"
        className="rounded-[100px] w-[64px] h-[64px]"
      />
      <p>Olena Hrynko</p>
    </div>
  );
};

export default UserItem;
