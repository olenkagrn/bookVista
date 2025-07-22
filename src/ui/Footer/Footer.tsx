import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className=" text-center py-11 ">
      <p className="text-[#2A2A2A] text-2xl">
        © {new Date().getFullYear()} BookVista. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
