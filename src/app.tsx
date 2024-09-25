import RoutesAplication from './routes';

import NavBar from './components/nav-bar';
import BackToTop from './components/back-to-top';
import Footer from './components/footer';

import './global.css'

export default function App() {
    return (
        <>
            <NavBar/>
            <main>
                <RoutesAplication />
                <BackToTop/>
            </main>
            <Footer />
        </>
    )
}