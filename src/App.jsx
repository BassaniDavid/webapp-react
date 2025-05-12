import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>Home page</div>} />
          <Route path="/movies" element={<div>elenco film</div>} />
          <Route path="/movies/:id" element={<div>dettagli film</div>} />
          <Route path="/contacts" element={<div>Chi siamo</div>} />
          <Route path="*" element={<div>error 404</div>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
