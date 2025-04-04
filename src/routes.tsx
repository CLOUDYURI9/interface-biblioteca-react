import { BrowserRouter, Routes, Route } from "react-router-dom"
import { APP_ROUTES } from "./appConfig"
import PHome from "./pages/PHome/PHome"
import PLogin from "./pages/PLogin/PLogin"
import PAluno from "./pages/PAluno/PAluno"
import PLivro from "./pages/PLivro/PLivro"
import PEmprestimo from "./pages/PEmprestimo/PEmprestimo"

function appRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path={APP_ROUTES.ROUTE_HOME} element={<PHome/>}/>
                <Route path={APP_ROUTES.ROUTE_LOGIN} element={<PLogin/>}/>
                <Route path={APP_ROUTES.ROUTE_ALUNO} element={<PAluno/>}/>
                <Route path={APP_ROUTES.ROUTE_LIVRO} element={<PLivro/>}/>
                <Route path={APP_ROUTES.ROUTE_EMPRESTIMO} element={<PEmprestimo/>}/>

            </Routes>
        </BrowserRouter>
    )
}

export default appRoutes