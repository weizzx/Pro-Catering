import { Outlet } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { EmailForm } from "./components/EmailForm"

export function Layout() {
    return (
        <>
        <Navbar />
        <Header />
        <Outlet />
        <EmailForm />
        <Footer />
        </>
    )
}