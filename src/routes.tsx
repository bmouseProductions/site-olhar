
import { Routes, Route } from "react-router-dom";

import Home from './pages/home/home'
import Clinica from "./pages/clinica/clinica";
import ExamesCirurgias from './pages/exames e cirurgias/exames-e-cirurgias';
import Convenios from './pages/convenios/conveios';
import ErrorPage from './pages/error/error';

export default function RoutesAplication() {
    return (
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/clinica" element={<Clinica />}/>
        <Route path="/exames-cirugias" element={<ExamesCirurgias />}/>
        <Route path="/convenios" element={<Convenios />}/>
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    )
}