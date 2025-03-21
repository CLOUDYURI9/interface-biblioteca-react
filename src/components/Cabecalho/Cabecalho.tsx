import estilo from './Cabecalho.module.css';
import logotipo from '../../assets/logotipo.png';
import { Link } from 'react-router-dom'

function Cabecalho() {
    return (
        <header className={estilo.cabecalho}>
            <a href="/"><img src={logotipo} alt="" className={estilo.imgLogo}/> </a>
            <ul>
                <li><a href='/login'>Login</a></li>
            </ul>
        </header>
    )

}

export default Cabecalho;