import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NomeCompleto from "./pages/NomeCompleto";
import Contatos from "./pages/Contatos";
import Curriculo from "./pages/Curriculo";
import Concluido from "./pages/Concluido";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>} ></Route>
            <Route path="/cadastro/nome" element={<NomeCompleto/>} ></Route>
            <Route path="/cadastro/contatos" element={<Contatos/>} ></Route>
            <Route path="/cadastro/curriculo" element={<Curriculo/>} ></Route>
            <Route path="/cadastro/concluido" element={<Concluido/>} ></Route>
        </Routes>
    );
}

export default AppRoutes