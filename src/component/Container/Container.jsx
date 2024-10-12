
const Container = ({children,className }) => {
  return (
    <div className={`w-full pt-4 pb-4 pr-5 pl-5 xl:pl-0 xl:pr-0  dark:text-white transition-all ease-out duration-300  ${className}`}>
      {/* <div className="max-w-screen-xl mx-auto  border-2 border-purple-400">
        {children}
      </div> */}
      <div className="max-w-screen-xl mx-auto ">
        {children}
      </div>
    </div>
  )
}

export default Container
