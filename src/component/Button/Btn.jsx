const Btn = ({
  children,
  type = "button",
  className = "",
  ...props
}) => {
  return (
    <>
      <button
        type={type}
        className={`${className} w-fit bg-black hover:bg-[#282828] dark:bg-white dark:text-black dark:font-semibold text-white  py-2 px-4 rounded-md transition ease-in-out duration-300`}
        {...props}
      >
        {children}
      </button>
    </>
  );
};

export default Btn;
