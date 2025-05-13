// importo destrutturando i componenti per le rotte da react-router-dom (dopo aver installato il pacchetto)
import { BrowserRouter, Route, Routes } from "react-router-dom";

// importo le pagine
import MoviesPage from "../pages/Movies";
import MoviesDetail from "../pages/MoviesDetail";

// importo il layout
import DefaultLayout from "../layouts/Defaultlayout";

function App() {

  return (
    <>
      {/* struttura per far funzionare le rotte */}
      <BrowserRouter>
        <Routes>
          {/* tutte le rotte passerando prima dal layout */}
          <Route element={<DefaultLayout />}>
            {/* cercando URL generico finiscono sulla home page */}
            <Route path="/" element={<div>Home page</div>} />
            {/* cercando URL con un path specifico finiscono nelle altre pagine */}
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:id" element={<MoviesDetail />} />
            <Route path="/contacts" element={<div>Contatti</div>} />
            <Route path="/about" element={<div>Chi siamo</div>} />
            {/* path in caso di errore nel URl */}
            <Route path="*" element={<div>error 404</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App