import {
    BrowserRouter,
    Routes,
    Route,
    useLocation
} from "react-router-dom";


import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Servicios from "./pages/Servicios";
import Contacto from "./pages/Contacto";
import PreguntasFrecuentes from "./pages/PreguntasFrecuentes";
import ListaNegraBrokers from "./pages/ListaNegraBrokers";


import FraudesBancarios from "./pages/servicios/FraudesBancarios";
import FraudesDigitales from "./pages/servicios/FraudesDigitales";
import RoboIdentidad from "./pages/servicios/RoboIdentidad";
import EstafasInversion from "./pages/servicios/EstafasInversion";
import EstafasRomanticas from "./pages/servicios/EstafasRomanticas";
import EstafasPiramidales from "./pages/servicios/EstafasPiramidales";


import LoginAdministrador from "./pages/LoginAdministrador";
import PanelAdministrador from "./pages/PanelAdministrador";


function AppContent() {

    const location =
        useLocation();


   const adminRoute =
    location.pathname.startsWith(
        "/admin-login"
    ) ||

    location.pathname.startsWith(
        "/panel-administrador"
    );

    return (

        <>

            {!adminRoute && <Navbar />}


            <Routes>

                {/* PÁGINAS PÚBLICAS */}

                <Route
                    path="/"
                    element={<Home />}
                />


                <Route
                    path="/nosotros"
                    element={<Nosotros />}
                />


                <Route
                    path="/servicios"
                    element={<Servicios />}
                />


                <Route
                    path="/servicios/fraudes-bancarios"
                    element={<FraudesBancarios />}
                />


                <Route
                    path="/servicios/fraudes-digitales"
                    element={<FraudesDigitales />}
                />


                <Route
                    path="/servicios/robo-identidad"
                    element={<RoboIdentidad />}
                />


                <Route
                    path="/servicios/estafas-inversion"
                    element={<EstafasInversion />}
                />


                <Route
                    path="/servicios/estafas-romanticas"
                    element={<EstafasRomanticas />}
                />


                <Route
                    path="/servicios/estafas-piramidales"
                    element={<EstafasPiramidales />}
                />


                <Route
                    path="/lista-negra-brokers"
                    element={<ListaNegraBrokers />}
                />


                <Route
                    path="/preguntas-frecuentes"
                    element={<PreguntasFrecuentes />}
                />


                <Route
                    path="/contacto"
                    element={<Contacto />}
                />


                {/* ADMINISTRACIÓN */}

                <Route
                    path="/admin-login"
                    element={
                        <LoginAdministrador />
                    }
                />


                <Route
                    path="/panel-administrador"
                    element={
                        <PanelAdministrador />
                    }
                />

            </Routes>


            {!adminRoute && <Footer />}

        </>

    );

}


function App() {

    return (

        <BrowserRouter>

            <AppContent />

        </BrowserRouter>

    );

}


export default App;



