// importo destrutturando il componente Outlet da react-router-dom (dopo aver installato il pacchetto)
import { Outlet } from "react-router-dom"

// importo il componente header
import Header from "../components/Header"

const DefaultLayout = () => {
    return (
        <>
            <Header />
            <main className="bg-secondary">
                <div className="container py-4">
                    {/* questa parte verrà sostituita con il contenuto della pagina specifica */}
                    <Outlet />
                </div>
            </main>
        </>
    )
}

export default DefaultLayout;