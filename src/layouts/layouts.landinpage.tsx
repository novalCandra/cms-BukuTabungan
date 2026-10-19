import FooterLandingPage from "@/components/organism/Footer-Organism-LandingPage"
import HeaderOrganismLandingPage from "@/components/organism/Header-Organism-LandingPage"
import { Outlet } from "react-router-dom"

const layoutsLandingPage = () => {
    return (
        <>
            <HeaderOrganismLandingPage />
            <Outlet />
            <FooterLandingPage />
        </>
    )
}

export default layoutsLandingPage
