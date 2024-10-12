import { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import DarkModeBTN from "../Button/DarkModeBTN";
import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import LogoutBTN from "./LogoutBTN";
const Header = () => {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // This makes the scroll smooth
    });
  };

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Glyphs",
      slug: "/all-glyph",
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

  // document.addEventListener('click', function() {
  //   setIsOpen(false)
  // });

  return (
    <Container className={"sticky top-0 bg-slate-200 dark:bg-black z-40"}>
      <header>
        <nav className=" flex sm:flex justify-between items-center relative">
          <HiMenuAlt1
            className="sm:hidden text-3xl cursor-pointer"
            onClick={toggleMenu}
          />
          <div onClick={handleLogoClick}>
            <Link to={"/"}>
              <Logo width={"w-[2rem]"} />
            </Link>
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
          className={`sm:hidden  bg-slate-200  dark:bg-black w-[45%] h-screen absolute left-0  transition-all duration-300 ease-in-out  transform ${
            isOpen ? "translate-x-0" : "-translate-x-[400%]"
          }`}
        >
          <nav className="px-4 py-4">
            <ul className=" flex flex-col gap-5 mt-5">
              {navItems.map((item) =>
                item.active ? (
                  <li key={item.name} >
                    <button
                      // className=""
                      className="font-medium w-full text-left hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black  px-3 py-2 rounded transition-all duration-500 ease-in-out"
                      onClick={() => {navigate(item.slug)
                        setIsOpen(false)
                      }}
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
          </nav>
        </div>
      </header>
    </Container>
  );
};

export default Header;
