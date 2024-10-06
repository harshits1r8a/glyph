import { useEffect, useState } from "react";

import { Footer } from "./component/index";
  


function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Add or remove dark class to the HTML element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (

    <>
    <button
        onClick={() => setDarkMode(!darkMode)}
        className="bg-gray-300 dark:bg-gray-700 text-black dark:text-white px-4 py-2 rounded"
      >
        Toggle Dark Mode
      </button>
      <Footer/>
    </>
  )
}

export default App
