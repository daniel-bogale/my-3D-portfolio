import React, { useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain"></img>
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            daniel-bogale
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={menu}
            alt="menu"
            className="w-[32px] h-[32px] object-contain cursor-pointer z-30"
            onClick={() => setToggle(!toggle)}
          />
          {/* Overlay */}
          <div
            className={`fixed inset-0 bg-black bg-opacity-60 transition-opacity duration-300 z-20 ${
              toggle
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
            onClick={() => setToggle(false)}
          ></div>
          {/* Slide-in menu */}
          <div
            className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-primary shadow-lg z-30 transform transition-transform duration-300 ${
              toggle ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex justify-end p-4">
              <img
                src={close}
                alt="close menu"
                className="w-6 h-6 cursor-pointer absolute right-6 top-6"
                onClick={() => setToggle(false)}
              />
            </div>
            <ul className="list-none flex flex-col gap-8 px-8">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`$ {
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-semibold text-lg cursor-pointer transition-colors duration-200`}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(false);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
