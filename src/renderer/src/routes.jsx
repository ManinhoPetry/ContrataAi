import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NomeCompleto from "./pages/NomeCompleto";
import Cpf from "./pages/Cpf";
import Contatos from "./pages/Contatos";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>} ></Route>
            <Route path="/cadastro/nome" element={<NomeCompleto/>} ></Route>
            <Route path="/cadastro/cpf" element={<Cpf/>} ></Route>
            <Route path="/cadastro/contatos" element={<Contatos/>} ></Route>
        </Routes>
    );
}

export default AppRoutes