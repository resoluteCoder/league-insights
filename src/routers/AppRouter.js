import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../components/HomePage';
import PageNotFound from '../components/PageNotFound';
import ChampionSelect from '../components/ChampionSelect';
import NavBar from '../components/NavBar';
import ChampionViewer from '../components/ChampionViewer';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <NavBar/>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route exact path ='/champion-select' component={ChampionSelect}/>
                <Route path = '/champion-select/:id' component={ChampionViewer}/>
                <Route component={PageNotFound}/>
            </Switch>            
        </div>
    </BrowserRouter>
);

export default AppRouter;