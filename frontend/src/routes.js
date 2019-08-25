import React from 'react';
import { Switch, Route } from 'react-router-dom';

//Importando páginas para as rotas
import Feed from './pages/Feed';
import New from './pages/New';

function Routes(){
    return (
        <Switch>
            <Route path='/' exact component={Feed} />
            <Route path='/new' exact component={New} />
        </Switch>
    );
}

export default Routes;