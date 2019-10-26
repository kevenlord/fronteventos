import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';//componente link serve para criar links, ou seja, quando o usario clicar em um link ele sera redirecionado, encurta a vida e n precisa repetir o history
import api from '../../service/api';

import './styles.css';

export default function Perfil() {
    const [locais, setLocais] = useState ([]);

    useEffect(() => {
        async function carregarLocais(){
            const usu_id = localStorage.getItem('usuario');
            const response = await api.get('./perfil', {
                headers: { usu_id }
            });
            setLocais(response.data);
        }
        carregarLocais();
     }, []);

    return (
        <>
            <ul className="locais-list">
                {locais.map(locals => (
                    <li key={locals._id}>
                        <header style={{ backgroundImage: `url(${locals.imagem_url})` }}/>
                        <strong>{locals.empresa}</strong><br/>
                        <span>{locals.preco ? `R$ ${locals.preco}`: `GRATUITO`}</span>
                        <span>{locals.data}</span>
                        <span>{locals.tipo}</span>
                        <span>{locals.categoria}</span>
                    </li>
                ))}
            </ul>

            <Link to='/Locais'>
               <button className="btn">Cadastrar um novo evento</button> 
            </Link>
        </>
    )   
}