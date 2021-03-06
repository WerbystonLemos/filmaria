import './index.css';
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'

function Favoritos()
{
    const [filmes, setFilmes] = useState([]);

    useEffect( () => {
        const minhaLista = localStorage.getItem("filmes");
        // console.log( JSON.parse(minhaLista) )
        setFilmes( JSON.parse(minhaLista));
    }, [] )

    function handleDelete(id)
    {
        console.log(filmes)
        let filtroFilmes = filmes.filter( (item) => {
            return ( item.id != id )
        })

        setFilmes(filtroFilmes)
        localStorage.setItem('filmes', JSON.stringify(filtroFilmes))
    }

    return(
        <div id="meus-filmes">
            <h1>Meus Filmes</h1>

            <ul>
                {filmes.map( (item) => {
                    return(
                        <li key={item.id}>
                            <span>{item.nome}</span>
                            <div>
                                <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                                <button onClick={ () => handleDelete(`${item.id}`) }>Excluir</button>
                            </div>
                        </li>
                        )
                } )}
            </ul>

        </div>
    )
}
export default Favoritos;