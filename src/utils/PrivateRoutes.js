import { Navigate } from 'react-router-dom'
import { useState , useContext } from 'react'
import AuthContext from '../context/AuthContext'






const PrivateRoutes = ({children, ...rest}) => {
    let { user } = useContext(AuthContext)
    //let [user , setUser] = useState(null)

    return !user ? <Navigate to='/login'/> : children;
}

export default PrivateRoutes;