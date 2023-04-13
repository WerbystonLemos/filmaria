import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import api from '../../services/api';
import './filme-info.css';

export default function Filme()
{
    let {id}                        = useParams()
    const [ filme, setFilme ]       = useState({});
    const [ loading, setLoading ]   = useState(true);
    
    useEffect( ()=>{
        async function loadFilme()
        {
            await api.get(`/movie/${id}`, { params:{
                api_key: '8eef1f105dfbb5e8939df12d84546a10',
                language: 'pt-BR'
            }})
            .then( (response) => {
                setFilme(response.data)
                setLoading(false)
            })
            .catch( (reject) => {
                console.log(reject)
            })
        }

        loadFilme()

        return () => {
            console.log('COMPONENTE DESMONTADO COM SUCESSO')
        }

    }, [])

    if(loading)
    {
        return(
            <div className='filme-info'>
                <h1>Carregando detalhes do Filme</h1>
            </div>
        )
    }
    
    return(
        <div className='filme-info'>
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
            
            <h3>Sinopse</h3>
            <span>{filme.overview}</span>
            <strong>Avaliação: {filme.vote_avarage}/10</strong>

            <div className='area-buttons'>
                <button type="">Salvar</button>
                <button>
                    <a href="#">Trailer</a>
                </button>
            </div>

        </div>
    )
}