import "./assets/main.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NomeCompleto from "./pages/NomeCompleto";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>} ></Route>
                <Route path="/nome" element={<NomeCompleto/>} ></Route>
            </Routes>
        </BrowserRouter>

    );
}

export default AppRoutes