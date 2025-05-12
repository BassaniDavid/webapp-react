import { Outlet } from "react-router-dom"
import Header from "../components/Header"

const DefaultLayout = () => {
    return (
        <>
            <Header />
            <main className="bg-secondary">
                <div className="container py-4">
                    <Outlet />
                </div>
            </main>
        </>
    )
}

export default DefaultLayout;