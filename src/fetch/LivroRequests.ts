import { SERVER_CFG } from "../appConfig";

class LivroRequests {
    
    private serverURL;
    private routeListaLivro;
    private routeCadastraLivro;
    private routeAtualizaLivro;
    private routeRemoveLivro;


    constructor() {
        this.serverURL = SERVER_CFG.SERVER_URL;
        this.routeListaLivro = '/lista/livros'; // Rota configurada na API
        this.routeCadastraLivro = '/novo/livro'; // Rota configurada na API
        this.routeAtualizaLivro = '/atualiza/livro'; // Rota configurada na API
        this.routeRemoveLivro = '/remove/livro'; // Rota configurada na API
    }

    /**
     * Função que busca a lista de alunos na API
     * @returns Lista com os livros cadastrados no sistema
     */
    async listarLivros() {
        try {
            const respostaAPI = await fetch(`${this.serverURL}${this.routeListaLivro}`);

            if(respostaAPI.ok) {
                const listaDeLivros = await respostaAPI.json();
                return listaDeLivros;
            }
            
        } catch (error) {
            console.error(`Erro ao fazer a consulta: ${error}`)
            return null;
        }
    }
}

export default new LivroRequests();