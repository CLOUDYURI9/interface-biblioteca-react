import { useEffect, useState } from 'react';
import AlunoRequests from '../../../fetch/LivroRequests';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import styles from './TabelaLivro.module.css';



function TabelaLivro() {
    const [livros, setLivros] = useState([]);

    const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />;
    const paginatorRight = <Button type="button" icon="pi pi-download" text />;


    useEffect(() => {
        const fetchLivros = async () => {
            try {
                const listaDeLivros = await AlunoRequests.listarLivros()
                setLivros(listaDeLivros)
                listaDeLivros.forEach((l: any) => {
                    l.valorAquisicao = Number(l.valorAquisicao).toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    });
                });
            } catch (error) {
                console.error(`Erro ao buscar livros:`, error);
            }
        };
        fetchLivros();
    }, [livros]);

    return (
        <>
            <DataTable value={livros} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} className={styles.tabelaLivro} tableStyle={{ minWidth: '50rem' }}
                paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                currentPageReportTemplate="{first} to {last} of {totalRecords}" paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}>
                <Column field="titulo" header="titulo" style={{ width: '25%' }}></Column>
                <Column field="autor" header="autor" style={{ width: '25%' }}></Column>
                <Column field="editora" header="Editora" style={{ width: '25%' }}></Column>
                <Column field="isbn" header="Isbn" style={{ width: '25%' }}></Column>
                <Column field="valorAquisicao" header="Valor Aquisicao" style={{ width: '25%' }}></Column>


            </DataTable>
        </>
    )
}

export default TabelaLivro