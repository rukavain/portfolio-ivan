import React, { useState } from "react";
import { headerLogo, Hamburger } from "../images/icons";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const listItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
    { href: "#profile", label: "Profile" },
    { href: "#projects", label: "Projects" },
  ];

  return (
    <nav className="flex justify-center max-lg:justify-between items-center py-5 px-16 mx-auto w-full bg-gray-900">
      <div className="flex justify-between items-center w-full max-w-7xl">
        <div>
          <a href="/">
            <img src={headerLogo} alt="header-logo" height={40} width={40} />
          </a>
        </div>
        <ul className="flex gap-16 lg:flex max-lg:hidden">
          {listItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="text-md cursor-pointer text-white font-semibold font-montserrat"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        {isMenuOpen && (
          <ul className="z-20 absolute top-20 right-0 flex flex-col gap-4 items-center rounded-b-md justify-center bg-gray-900 py-4 px-8 text-white lg:hidden">
            {listItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="text-md cursor-pointer font-semibold"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}
        <div
          className="lg:hidden block"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <img src={Hamburger} alt="hamburger" width={30} height={30} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
