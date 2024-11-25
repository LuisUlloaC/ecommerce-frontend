import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { clearErrorLogin, resetSuccessLogin } from "../redux/slices/session";
import { loginUser } from "../redux/slices/session/loginUser"
import { useNavigate } from "react-router-dom";


const Login = () => {
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const [isRedirectiing, setRedirecting] = useState(false)

    const error = useSelector(state => state.login.errorLogin)
    const success = useSelector(state => state.login.successLogin)

    useEffect(() => {
        if (success) {
            dispatch(resetSuccessLogin())
            setTimeout(() => {
                setRedirecting(true)
                navigate('/')
            }, 1000)
        } else if (error) {
            dispatch(clearErrorLogin())
            console.log('error: ', error)
        }
    }, [success, error, dispatch,])

    function authenticate() {
        console.log('aaaaaaaaaaaaaaaaaaaaa ')
        dispatch(loginUser({ email: "admin@admin.com", password: "admin" }))
    }

    return (
        <div className="bg-gray-800" onClick={authenticate}>
            LOGIN
        </div>
    )
}


export default Login;