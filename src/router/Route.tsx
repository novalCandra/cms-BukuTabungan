import App from "@/App";
import layoutsLandingPage from "@/layouts/layouts.landinpage";
import { createBrowserRouter } from "react-router-dom";

const route = createBrowserRouter([
    {
        path : "/",
        Component : layoutsLandingPage,
        children : [
            {index : true, Component : App}
        ]
    }
])

export default route