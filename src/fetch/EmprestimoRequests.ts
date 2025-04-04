import { SERVER_CFG } from "../appConfig";

class EmprestimoRequests {
    
    private serverURL;
    private routeListaEmprestimo;
    private routeCadastraEmprestimo;
    private routeAtualizaEmprestimo;
    private routeRemoveEmprestimo;


    constructor() {
        this.serverURL = SERVER_CFG.SERVER_URL;
        this.routeListaEmprestimo = '/lista/emprestimos'; // Rota configurada na API
        this.routeCadastraEmprestimo = '/novo/emprestimo'; // Rota configurada na API
        this.routeAtualizaEmprestimo = '/atualiza/emprestimo'; // Rota configurada na API
        this.routeRemoveEmprestimo = '/remove/emprestimo'; // Rota configurada na API
    }

    /**
     * Função que busca a lista de alunos na API
     * @returns Lista com os emprestimos cadastrados no sistema
     */
    async listarEmprestimos() {
        try {
            const respostaAPI = await fetch(`${this.serverURL}${this.routeListaEmprestimo}`);

            if(respostaAPI.ok) {
                const listaDeEmprestimos = await respostaAPI.json();
                return listaDeEmprestimos;
            }
            
        } catch (error) {
            console.error(`Erro ao fazer a consulta: ${error}`)
            return null;
        }
    }
}

export default new EmprestimoRequests();