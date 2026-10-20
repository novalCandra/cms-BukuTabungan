import HeaderOrganismAuth from "@/components/organism/Header-Organism-Auth";
import { Outlet } from "react-router-dom";

export default function LayoutsAuthPage() {
    return (
        <>
            <HeaderOrganismAuth />
            <Outlet />
        </>
    )
}
