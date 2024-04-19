import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NomeCompleto from "./pages/NomeCompleto";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>} ></Route>
            <Route path="/nome" element={<NomeCompleto/>} ></Route>
        </Routes>
    );
}

export default AppRoutes