import { useState } from 'react';
import estilo from './FormLivro.module.css';
import LivroRequests from '../../../fetch/LivroRequests';

function FormLivro() {
    const [formData, setFormData] = useState({
        titulo: '',
        autor: '',
        editora: '',
        anoPublicacao: 0,
        isbn: '',
        quantTotal: 0,
        quantDisponivel: 0,
        valorAquisicao: 0
    });

    // Função para atualizar o state
    const handleChange = (nome: string, valor: string) => {
        setFormData({ ...formData, [nome]: valor });
    };

    // Função para recuperar dados do formulário e enviar
    const handleSubmit = async (formData: { titulo: string; autor: string; editora: string; anoPublicacao: number; isbn: string; quantTotal: number; quantDisponivel: number; valorAquisicao: number;}) => {
        const resposta = await LivroRequests.enviaFormularioLivro(JSON.stringify(formData));
        if (resposta) {
            alert('Livro cadastrado com sucesso.');
        } else {
            alert('Erro ao cadastrar livro.');
        }
    }

    return (
        <section className={estilo['sec-form-livro']}>
            <h1>Cadastro Livro</h1>
            <form action="post" onSubmit={(e) => { e.preventDefault(); handleSubmit(formData); }}
                className={estilo['form-livro']}
            >
                <label htmlFor="">
                    Titulo
                    <input
                        type="text"
                        name="titulo"
                        id="titulo"
                        required
                        minLength={2}
                        onChange={(e) => handleChange("titulo", e.target.value)}
                    />
                </label>

                <label htmlFor="">
                    Autor
                    <input
                        type="text"
                        name="autor"
                        id="autor"
                        required
                        minLength={3}
                        onChange={(e) => handleChange("autor", e.target.value)}
                    />
                </label>

                <label htmlFor="">
                    Editora
                    <input
                        type="text"
                        name="editora"
                        id="editora"
                        required
                        minLength={2}
                        onChange={(e) => handleChange("editora", e.target.value)}
                    />
                </label>

                <label htmlFor="">
                    Ano de Publicação
                    <input
                        type="number"
                        name="anoPublicacao"
                        id="anoPublicacao"
                        minLength={4}
                        onChange={(e) => handleChange("anoPublicacao", e.target.value)}
                    />
                </label>

                <label htmlFor="">
                    Isbn
                    <input
                        type="text"
                        name="isbn"
                        id="isbn"
                        minLength={5}
                        onChange={(e) => handleChange("isbn", e.target.value)}
                    />
                </label>

                <label htmlFor="">
                    Quantidade Total
                    <input
                        type="number"
                        name="quantTotal"
                        id="quantTotal"
                        minLength={1}
                        onChange={(e) => handleChange("quantTotal", e.target.value)}
                    />
                </label>
                <label htmlFor="">
                    Quantidade Disponivel
                    <input
                        type="number"
                        name="quantDisponivel"
                        id="quantDisponivel"
                        minLength={1}
                        onChange={(e) => handleChange("quantDisponivel", e.target.value)}
                    />
                </label>
                <label htmlFor="">
                    Valor Aquisição
                    <input
                        type="number"
                        name="valorAquisicao"
                        id="valorAquisicao"
                        step={0.01}                        
                        onChange={(e) => handleChange("valorAquisicao", e.target.value)}
                    />
                </label>
                
                <input type="submit" value="ENVIAR" />
            </form>
        </section>
    );
}

export default FormLivro;