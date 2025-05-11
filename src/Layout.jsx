import { Outlet } from "react-router-dom"
import { Navbar } from "./components/Navbar"

export function Layout() {
    return (
        <>
        <nav>
            <Navbar />
        </nav>
        <main>
            <Outlet />
        </main>
        </>
    )
}