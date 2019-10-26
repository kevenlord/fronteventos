import React, {useState} from 'react';
import api from '../../service/api';

export default function Login({ history }) { 
    /* history é utilizado para navegação de forma automatica */
    const [email, setEmail] = useState('');

    async function handleSubmit(evento){
     evento.preventDefault();//Impede o funcionamento padrão de envio
     const response = await api.post('/sessao', { email });
     //Desestruturar para obter conteudo especifico dentro do data
      const { _id } = response.data;
     //armazenar o id do usuario no banco de dados do navegador
      localStorage.setItem('usuario', _id);

      history.push('/Perfil');
      /* history push eu envio o usuario pra rota X */
    }

    return (
        <>
            <p>
                Cadastre seu <strong>evento</strong> para pessoas interessadas na área, espalhe ao mundo o nome de sua <strong>Empresa</strong>
            </p>

            <form onSubmit={handleSubmit}>
              <label htmlFor="email">E-MAIL</label>
              <input type="email" id="email" placeholder="Informe seu E-Mail" value={email} onChange={ evento => setEmail(evento.target.value)}/>
              <button className="btn" type="submit">Entrar</button>
            </form>
        </>
    )
}