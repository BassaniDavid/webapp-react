// importo destrutturando i componenti per le rotte da react-router-dom (dopo aver installato il pacchetto)
import { BrowserRouter, Route, Routes } from "react-router-dom";

// importo le pagine
import MoviesPage from "../pages/Movies";
import MoviesDetail from "../pages/MoviesDetail";
import HomePage from "../pages/HomePage";
import Contact from "../pages/Contact";
import AboutUS from "../pages/AboutUS";


// importo il layout
import DefaultLayout from "../layouts/Defaultlayout";

// importo il context
import GlobalContext from "../context/globalContext";


import { useState } from "react";

function App() {

  const [isLoading, setIsLoading] = useState(false);

  return (
    <GlobalContext.Provider value={{
      isLoading,
      setIsLoading
    }}>
      < BrowserRouter>
        <Routes>
          {/* tutte le rotte passerando prima dal layout */}
          <Route element={<DefaultLayout />}>
            {/* cercando URL generico finiscono sulla home page */}
            <Route path="/" element={<HomePage />} />
            {/* si può anche scrivere
            <Route path="/" component={HomePage} /> */}

            {/* cercando URL con un path specifico finiscono nelle altre pagine */}
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:slug" element={<MoviesDetail />} />
            <Route path="/contacts" element={<Contact />} />
            <Route path="/about" element={<AboutUS />} />
            {/* path in caso di errore nel URl */}
            <Route path="*" element={<div>error 404</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  )
}

export default App