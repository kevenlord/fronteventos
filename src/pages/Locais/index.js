import React, {useState, useMemo} from 'react';
import api from '../../service/api';

import camera from '../../assets/camera.png'

import './styles.css';

export default function Locais({ history }) {
const [imagem, setImagem] = useState(null);
const [data, setData] = useState('');
const [tipo, setTipo] = useState('');
const [empresa, setEmpresa] = useState('');
const [preco, setPreco] = useState('');
const [categoria, setCategoria] = useState('');

const previsualizar = useMemo(() => {
    return imagem ? URL.createObjectURL(imagem) : null;
},[imagem])
    


async function handleSubmit(event) {
    event.preventDefault();

    const info = new FormData();
    const user_id = localStorage.getItem('usuario');

    info.append('imagem', imagem);
    info.append('data', data);
    info.append('tipo', tipo);
    info.append('empresa', empresa);
    info.append('preco', preco);
    info.append('categoria', categoria);
    
    await api.post('/locais', info, {
        headers: { user_id }
    })

    history.push('/Perfil');

    }

    return (
        <form onSubmit={handleSubmit}>

            <label 
            id="imagem"
            style={{backgroundImage: `url(${previsualizar})`}}
            className={imagem ? 'has-imagem' : ''}
            >
                <input type="file" onChange={event => setImagem(event.target.files[0])}/>
                <img src={camera} alt="Selecionar imagem"/>
            </label>
           
            <label htmlFor="data">Data</label>
            <input 
            id="data" 
            placeholder="Data do seu evento"
            value={data}
            onChange={event => setData(event.target.value)}
            />

            <label htmlFor="tipo">Evento</label>
            <input 
            id="tipo" 
            placeholder="Qual o titulo do evento?"
            value={tipo}
            onChange={event => setTipo(event.target.value)}
            />

            <label htmlFor="empresa">Sua empresa</label>
            <input 
            id="empresa" 
            placeholder="Nome da sua empresa"
            value={empresa}
            onChange={event => setEmpresa(event.target.value)}
            />

            <label htmlFor="preco">Preço <span>(em branco para gratuito)</span></label>
            <input 
            id="preco" 
            placeholder="Preço do evento"
            value={preco}
            onChange={event => setPreco(event.target.value)}
            />

            <label htmlFor="categoria">Cursos <span>(separados por virgula)</span></label>
            <input 
            id="categoria" 
            placeholder="Quais são os cursos?"
            value={categoria}
            onChange={event => setCategoria(event.target.value)}
            />

            <button type="submit" className="btn">Cadastrar Evento!</button>
        </form>
    )
    
}