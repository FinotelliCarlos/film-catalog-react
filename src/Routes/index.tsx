import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { FilmDetails } from '../components/FilmDetails'
import { Films } from '../components/Films'

export function RoutesFilmCatalog() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Films />} />
        <Route path="/:id" element={<FilmDetails />} />
      </Routes>
    </BrowserRouter>
  )
}
