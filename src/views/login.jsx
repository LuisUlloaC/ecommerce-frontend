import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/actions/userActions";


const Login = ({location, history}) => {
    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin);
    const { loading, userInfo, error } = userLogin;

    function authenticate() {
        console.log("LOGIN")
        dispatch(login("admin@admin.com", "admin"))
    }

    return (
        <div className="bg-gray-800" onClick={authenticate}>
            LOGIN
        </div>
    )
}


export default Login;