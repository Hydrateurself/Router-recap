import { Outlet } from "react-router-dom"
import Header from "../components/header"

export function RootLayout() {
    return (
        <>
        <Header/>
            <Outlet />
            {/* Outlet is the dynamic part and renders the children 
            that are apropriate for the element */}
        </>
    )
}