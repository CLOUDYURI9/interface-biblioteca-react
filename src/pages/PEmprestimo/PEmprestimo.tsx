import Cabecalho from "../../components/Cabecalho/Cabecalho";
import Rodape from "../../components/Rodape/Rodape";
import TabelaEmprestimo from "../../components/Tabelas/TabelaEmprestimo/TabelaEmprestimo";

function PEmprestimo() {
    return(
        <>
            <Cabecalho/>
            <TabelaEmprestimo/>
            <Rodape/>
        </>
    )
}

export default PEmprestimo;