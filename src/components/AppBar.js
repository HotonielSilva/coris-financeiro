import { Link } from 'react-router-dom';

function AppBar () {
    return(
        <ul>
            <li>
                <Link to="/Home">Home</Link>
            </li>
            <li>
                <Link to="/Agentes">Agentes</Link>
            </li>
            <li>
                <Link to="/ContasPagar">Contas a Pagar</Link>
            </li>
            <li>
                <Link to="/NotasFiscais">Notas Fiscais</Link>
            </li>
        </ul>
    )
}

export default AppBar
