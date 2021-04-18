import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Production from './pages/Production';
import Moy from './pages/Moy';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={['/']}>
          <Home />
        </Route>
        <Route exact path={['/portfolio']}>
          <Portfolio />
        </Route>
        <Route exact path={['/production']}>
          <Production />
        </Route>
        <Route exact path={['/moy']}>
          <Moy />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
