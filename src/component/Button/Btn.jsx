const Btn = ({
  children,
  btnHandler,
  type = "button",
  className = "",
  ...props
}) => {
  return (
    <>
      <button
        type={type}
        className={`${className} w-fit bg-black hover:bg-[#1a1a1a] dark:bg-white dark:text-black dark:font-semibold text-white  py-2 px-4 rounded-md transition ease-in-out duration-300`}
        onClick={btnHandler}
        {...props}
      >
        {children}
      </button>
    </>
  );
};

export default Btn;
