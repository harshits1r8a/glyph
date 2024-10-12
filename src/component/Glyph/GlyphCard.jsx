import parse from "html-react-parser"
import { FiUser } from "react-icons/fi";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";

// import authService from "../../appwrite/authService";
import storageService from "../../appwrite/storageService";

const GlyphCard = ({
  $id,
  title ,
  featuredImage,
  content
}) => {
  return (
    <Link to={`/glyph/${$id}`} >
      <div className="flex flex-col w-[18rem]  overflow-hidden bg-white dark:bg-[#1a1a1a]  rounded-lg transition-all ease-out duration-300 hover:scale-105">
        <div>
          {/* <img src={storageService.getFilePreview(featuredImg)} alt={title} /> */}
          <img
            src={ storageService.getFilePreview(featuredImage)}
            alt={title}
            className="w-full h-48 object-cover"
          />
        </div>
        <div className="px-3 py-3">
          <div className="flex gap-5">
            <div className="flex gap-[0.30rem] items-center bg-gray-200 px-3 py-1 rounded-md dark:text-[#1a1a1a]">
              <FiUser />
              <p className="text-base">xyx</p>
            </div>
            <div className="flex gap-[0.40rem] items-center bg-gray-200 px-3 py-1 rounded-md dark:text-[#1a1a1a]">
              <SlCalender />
              <p className="text-base">24 June 2023</p>
            </div>
          </div>
          <h1 className="text-lg capitalize mt-3 h-[5rem] overflow-hidden dark:text-white">{title}</h1>
          <p className="text-gray-500 mt-2 dark:text-gray-300">{parse(content.slice(0, 50))}...</p> {/* Shorten the content */}
          <button className="underline text-gray-800 hover:text-black font-semibold mt-4 dark:text-white">Read More</button>
        </div>
      </div>
    </Link>
  );
};

export default GlyphCard;
