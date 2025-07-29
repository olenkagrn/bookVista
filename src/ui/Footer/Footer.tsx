import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className=" text-center py-11 md:col-start-2 md:col-end-5 row-start-3 md:row-end-4  ">
      <p className="text-dark-default text-2xl">
        © {new Date().getFullYear()} BookVista. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
