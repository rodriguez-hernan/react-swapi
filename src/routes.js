import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Layout from './Hoc/Layout';

import Home from './Components/Home/Home';

import CharacterList from './Components/Lists/Characters/CharacterList';
import FilmList from './Components/Lists/Films/FilmList';
import StarShipList from './Components/Lists/Starships/StarshipList';
import Character from './Components/Lists/Characters/Character';

const Routes = (props) => {
  return (
    <div>
        <Layout>
          <Switch>
            <Route exact component={Home} path="/"></Route>
            <Route exact component={CharacterList} path="/characters"></Route>
            <Route exact component={FilmList} path="/films"></Route>
            <Route exact component={StarShipList} path="/starships"></Route>
            <Route path="/characters/:id" component={Character} />
          </Switch>
        </Layout>
    </div>
  )
}


export default Routes;
