import { useParams, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from './../../services/api';
import './filme-info.css';

function Filme()
{
    const { id }                =  useParams();
    const [filme, setFilme]     = useState([]);
    const [loading, setLoading] = useState(true);
    const history               = useHistory()

    useEffect( ()=>{

        async function loadFilme()
        {
            const response = await api.get(`r-api/?api=filmes/${id}`);

            if(response.data == 0)
            {
                history.replace('/');
                return;
            }

            setFilme(response.data);
            setLoading(false);
        }

        loadFilme();

        return;

    }, [id, history] )

    function salvaFilme()
    {
        const minhaLista = localStorage.getItem('filmes');
        let filmesSalvos = JSON.parse(minhaLista) || [];
        const hasFilms   = filmesSalvos.some( (filmesSalvos) => filmesSalvos.id == filme.id )
        if (hasFilms)
        {
            alert("Você já possui esse filme salvo!")
            return 
        }
        filmesSalvos.push(filme);
        localStorage.setItem(`filmes`, JSON.stringify(filmesSalvos))
        alert("Filme salvo com sucesso!")
    }

    if(loading)
    {
        return(
            <div className="filme-info">
                <h1>Carregando seu filme!!!</h1>
            </div>
        )
    }

    return(
        <div className="filme-info">
            <h1>{filme.nome}</h1>
            <img src={filme.foto} alt={filme.nome} />
            <h3>Sinopse</h3>
            {filme.sinopse}

            <div className='botoes'>
                <button onClick={ salvaFilme }>Salvar</button>
                <a href={`https://youtube.com/results?search_query=${filme.nome} Trailer`} target="_blank">
                    <button>Trailer</button>
                </a>
            </div>
        </div>
    )
}

export default Filme;