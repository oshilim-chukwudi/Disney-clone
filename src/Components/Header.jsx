import React from "react";
import logo from "./../assets/Images/logo.png";
import "./../App.css"; // Import your app.css file

export const Header = () => {
  return (
    <div className="img">
      <img
        src={logo}
        className="w-40 h-auto md:w-115 md:h-auto object-cover logo"
        alt="Logo"
      />
    </div>
  );
};
