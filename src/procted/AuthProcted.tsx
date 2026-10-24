import { Link } from "react-router-dom";

const AuthProcted = () => {
    const sessionLocalStorage  = sessionStorage.getItem("token");
    if(!sessionLocalStorage){
        return <Link to={"/login"} />
    }
}

export default AuthProcted
