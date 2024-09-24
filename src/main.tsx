import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router ,Routes, Route,} from "react-router-dom";

import './global.css'
import Home from './pages/home/home'
import ErrorPage from './pages/error/error';
import BackToTop from './components/back-to-top';
import NavBar from './components/nav-bar';
import Footer from './components/footer';
import ExamesCirurgias from './pages/exames e cirurgias/exames-e-cirurgias';
import Convenios from './pages/convenios/conveios';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <NavBar/>
      <main className=''>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/exames-cirugias" element={<ExamesCirurgias />}/>
          <Route path="/convenios" element={<Convenios />}/>
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
        <BackToTop/>
      </main>
      <Footer />
    </Router>
  </React.StrictMode>,
)
