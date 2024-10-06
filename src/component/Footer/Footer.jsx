import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

// import { Link } from "react-router-dom";
import {Container, Logo} from "../index";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year
  return (
    <div>
      <Container
        className={
          "pt-4 pb-4 pr-5 pl-5 xl:pl-0 xl:pr-0 dark:bg-black dark:text-white transition-all ease-out duration-300  "
        }
      >
        <footer>
          <div className="w-full text-center">
            <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
              <div className="flex items-center gap-3 cursor-pointer">
                <Logo width={"w-[2rem]"} />
                <p className="text-[2rem] text-gray-400 dark:hover:text-gray-300 transition-all ease-in-out duration-300">GLYPH</p>
              </div>
              <ul className="flex gap-8 items-center mt-2 sm:mt-0">
                {/* <li>
                  <Link to={""} className="text-gray-700 font-medium dark:text-white">About</Link>
                </li> */}
                
                <li>
                  <a href="#" className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-all ease-in-out duration-300 font-medium dark:text-white">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-all ease-in-out duration-300 font-medium dark:text-white">Licensing</a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-all ease-in-out duration-300 font-medium dark:text-white">Contact</a>
                </li>
              </ul>
            </div>
            <hr className="h-[0.10rem] bg-gray-200 rounded mt-5 mb-5" />

            <div className="w-full  sm:flex sm:items-center sm:justify-between">
              <p className="text-base text-left text-gray-700 dark:text-white">
                &copy; {currentYear}{" "}
                <span className="font-semibold text-gray-400 dark:hover:text-gray-300 transition-all ease-in-out duration-300">GLYPH</span>
              </p>
              <div className="mt-4 flex  space-x-6 sm:mt-0 sm:justify-center ">
                  <FaInstagramSquare className="text-2xl text-gray-600 dark:text-white dark:hover:text-gray-300 hover:text-gray-800 transition-all ease-in-out duration-300 cursor-pointer" />
                  <FaSquareXTwitter className="text-2xl text-gray-600 dark:text-white dark:hover:text-gray-300 hover:text-gray-800 transition-all ease-in-out duration-300 cursor-pointer" />
                  <FaFacebookSquare className="text-2xl text-gray-600 dark:text-white dark:hover:text-gray-300 hover:text-gray-800 transition-all ease-in-out duration-300 cursor-pointer" />
                </div>
            </div>
          </div>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
