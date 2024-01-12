import React from "react";
import Logo from "./../Components/Images/Logo.png";

export const Header = () => {
  return (
    <div>
      <img src={Logo} className="w-[80px] object-cover" />
    </div>
  );
};
