
const Container = ({children,className }) => {
  return (
    <div className={`w-full  ${className}`}>
      {/* <div className="max-w-screen-xl mx-auto  border-2 border-purple-400">
        {children}
      </div> */}
      <div className="max-w-screen-xl mx-auto">
        {children}
      </div>
    </div>
  )
}

export default Container
