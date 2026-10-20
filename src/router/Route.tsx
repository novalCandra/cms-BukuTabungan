import App from "@/App";
import LayoutsAuthPage from "@/layouts/Layouts.authPage";
import layoutsLandingPage from "@/layouts/layouts.landinpage";
import LoginPage from "@/pages/auth/login";
import RegisterPage from "@/pages/auth/register";
// import RegisterPage from "@/pages/auth/register";
import { createBrowserRouter } from "react-router-dom";

const route = createBrowserRouter([
    {
        path : "/",
        Component : layoutsLandingPage,
        children : [
            {index : true, Component : App}
        ]
    },
    {
        path : "/auth",
        Component : LayoutsAuthPage,
        children : [
            {path : "login", Component : LoginPage},
            {path : "register", Component : RegisterPage},
        ]
    }
])

export default route