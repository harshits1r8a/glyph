import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const BackHome = () => {
  const navigate = useNavigate()
  return (
    <button
      onClick={() => navigate('/')}
      className="bg-gray-300 text-xl hover:bg-gray-200 dark:bg-white text-black dark:text-black px-2 py-2 rounded-full transition ease-in-out duration-300"
    >
      <FaArrowLeft />
    </button>
  );
};

export default BackHome;
