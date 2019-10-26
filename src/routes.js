import React from 'react';

import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Login from './pages/Login/index';
import Perfil from './pages/Perfil/index';
import Locais from './pages/Locais/index';



export default function Routs(){
    return (
        <BrowserRouter> 
            <Switch> 
                {/* switch garante que apenas uma rota seja executada por vez */}
                {/* com o exact a rota so será chamada se estiver exatamente como declarada*/}
                <Route path="/" exact component={Login}/> 
                <Route path="/Perfil" component={Perfil}/>
                <Route path="/Locais" component={Locais}/>
                
            </Switch>
        </BrowserRouter>
    );
}