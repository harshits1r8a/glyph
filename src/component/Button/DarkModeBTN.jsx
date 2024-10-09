import { useEffect, useState } from "react";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";

const DarkModeBTN = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Add or remove dark class to the HTML element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="bg-gray-300 hover:bg-gray-200 dark:bg-white text-black dark:text-white px-2 py-2 rounded-full transition ease-in-out duration-300"
    >
      {darkMode ? <MdDarkMode className="text-black text-xl"/> : <MdOutlineDarkMode  className="text-black text-xl"/>}
    </button>
  );
};

export default DarkModeBTN;
