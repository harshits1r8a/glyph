import { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import DarkModeBTN from "../Button/DarkModeBTN";
import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import LogoutBTN from "./LogoutBTN";
const Header = () => {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Glyphs",
      slug: "/glyphs",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "Create Glyph",
      slug: "/create-glyph",
      active: authStatus,
    },
  ];

  // responsive navbar
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <Container className={"sticky top-0 "}>
      <header >
        <nav className=" flex sm:flex justify-between items-center relative z-50">
          <HiMenuAlt1
            className="sm:hidden text-3xl cursor-pointer"
            onClick={toggleMenu}
          />
          <div>
            <Logo width={"w-[2rem]"} />
          </div>
          <div className="flex items-center gap-5">
            <ul className="hidden sm:flex items-center gap-5">
              {navItems.map((item) =>
                item.active ? (
                  <li key={item.name}>
                    <button
                      className="font-medium"
                      onClick={() => navigate(item.slug)}
                    >
                      {item.name}
                    </button>
                  </li>
                ) : null
              )}
              {authStatus && (
                <li>
                  <LogoutBTN />
                </li>
              )}
            </ul>
            <DarkModeBTN />
          </div>
        </nav>
        {/* Mobile Menu - Dropdown */}
        <div
          className={`sm:hidden z-20 bg-white dark:bg-gray-900 w-[40%] h-screen absolute left-0  transition-all duration-300 ease-in-out  transform ${
            isOpen ? "translate-x-0" : "-translate-x-[400%]"
          }`}
        >
          <nav className="px-4 py-4">
            <a
              href="#"
              className="block py-2 text-gray-900 dark:text-white hover:text-blue-500"
            >
              Home
            </a>
            <a
              href="#"
              className="block py-2 text-gray-900 dark:text-white hover:text-blue-500"
            >
              About
            </a>
            <a
              href="#"
              className="block py-2 text-gray-900 dark:text-white hover:text-blue-500"
            >
              Services
            </a>
            <a
              href="#"
              className="block py-2 text-gray-900 dark:text-white hover:text-blue-500"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>
    </Container>
  );
};

export default Header;
