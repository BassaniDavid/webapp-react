import { BrowserRouter, Route, Routes } from "react-router-dom";
import MoviesPage from "../pages/Movies";
import MoviesDetail from "../pages/MoviesDetail";
import DefaultLayout from "../layouts/Defaultlayout";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<div>Home page</div>} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:id" element={<MoviesDetail />} />
            <Route path="/contacts" element={<div>Contatti</div>} />
            <Route path="/about" element={<div>Chi siamo</div>} />
            <Route path="*" element={<div>error 404</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
