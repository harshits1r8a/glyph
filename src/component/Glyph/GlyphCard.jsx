import { FiUser } from "react-icons/fi";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";


// import storageService from "../../appwrite/storageService";
const GlyphCard = ({
  $id,
  title = "default title",
  featuredImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREO3tkIJnmJZcWmgLLR-z973QVHQ8zbwDGnw&s",
  user_id = "Harshit",
  content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dolores unde suscipit corrupti tempore dolorem. Quod, voluptates praesentium aperiam et deleniti dolorem vitae temporibus incidunt voluptate fugiat amet itaque, a culpa in esse ducimus. Laudantium obcaecati, architecto nihil sed repellendus maiores molestias id! Quis voluptatum optio architecto? Dolorem, quas iusto.",
  date = "Hune 24, 1999",
}) => {
  return (
    <Link to={`/post/${$id}`} >
      <div className="flex flex-col w-[20rem] overflow-hidden bg-white dark:bg-black  rounded-lg transition-all ease-out duration-300">
        <div>
          {/* <img src={storageService.getFilePreview(featuredImg)} alt={title} /> */}
          <img
            src={featuredImg}
            alt={title}
            className="w-full h-48 object-cover"
          />
        </div>
        <div className="px-3 py-3">
          <div className="flex gap-5">
            <div className="flex gap-[0.30rem] items-center bg-gray-200 px-3 py-1 rounded-md">
              <FiUser />
              <p className="text-base">{user_id}</p>
            </div>
            <div className="flex gap-[0.40rem] items-center bg-gray-200 px-3 py-1 rounded-md">
              <SlCalender />
              <p className="text-base">{date}</p>
            </div>
          </div>
          <h1 className="text-2xl capitalize mt-3 dark:text-white">{title}</h1>
          <p className="text-gray-500 mt-2 dark:text-gray-300">{content.slice(0, 100)}...</p> {/* Shorten the content */}
          <button className="underline text-gray-800 hover:text-black font-semibold mt-4 dark:text-white">Read More</button>
        </div>
      </div>
    </Link>
  );
};

export default GlyphCard;
