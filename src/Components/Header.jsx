import React from "react";
import logo from "./../assets/Images/logo.png";
import "./../App.css"; // Import your app.css file

export const Header = () => {
  return (
    <div className="img">
      <img
        src={logo}
        className="w-10 h-auto md:w-20 md:h-auto object-cover logo"
        alt="Logo"
      />
    </div>
  );
};
