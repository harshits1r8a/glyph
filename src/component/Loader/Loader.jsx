import './Loader.css'

import { GridLoader } from "react-spinners";


const Loader = () => {
  return (
    <div className="sweet-loading flex justify-center items-center h-screen w-full">
      <GridLoader className="gradiant" color='#4dffa0' height={4} width={100} loading={true} />
    </div>
  );
};

export default Loader;
