import glyphLogo from "../../../public/logo.svg"
const Logo = ({width="w-[6.25rem]"}) => {
  return (
    <img src={glyphLogo} className={`${width}`} alt="glyphLogo" />
  )
}

export default Logo
