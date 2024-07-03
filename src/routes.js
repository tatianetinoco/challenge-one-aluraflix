import Home from "pages/Home";
import NovoVideo from "pages/NovoVideo";
import PaginaBase from "pages/PaginaBase";
import Player from "pages/Player";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"              element={<PaginaBase/>}>    
                    <Route index             element={<Home />}></Route>
                    <Route path="NovoVideo"  element={<NovoVideo />}></Route>
                    <Route path=":id"        element={<Player />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;