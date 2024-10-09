
import { useDispatch } from 'react-redux'

import authService from '../../appwrite/authService'
import { logout } from '../../store/reducers/authSlice'
import Btn from '../Button/Btn'

const LogoutBTN = () => {
    const dispatch = useDispatch()
    const logoutHandler = ()=>{
        authService.logout()
                    .then(()=>dispatch(logout()))
    }
  return (
    <Btn btnHandler={logoutHandler} >Logout</Btn>
  )
}

export default LogoutBTN
