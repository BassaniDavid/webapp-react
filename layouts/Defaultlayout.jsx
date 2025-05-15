// importo destrutturando il componente Outlet da react-router-dom (dopo aver installato il pacchetto)
import { Outlet } from "react-router-dom"

// importo il componente header
import Header from "../components/Header"

// contesto e loader
import { useContext } from "react"
import GlobalContext from "../context/globalContext"
import Loader from "../components/loader"

const DefaultLayout = () => {

    const { isLoading } = useContext(GlobalContext)

    return (
        <>
            <Header />
            <main className="bg-secondary min-vh-100">
                <div className="container py-4">
                    {/* questa parte verrà sostituita con il contenuto della pagina specifica */}
                    <Outlet />
                </div>
            </main>
            {isLoading && <Loader />}
        </>
    )
}

export default DefaultLayout;