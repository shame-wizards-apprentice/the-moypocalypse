import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Production from './pages/Production';
import Moy from './pages/Moy';
import Acting from './pages/Acting';
import Contact from './pages/Contact';
import CV from './pages/CV';
import News from './pages/News';

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
        <Route exact path={['/acting']}>
          <Acting />
        </Route>
        <Route exact path={['/contact']}>
          <Contact />
        </Route>
        <Route exact path={['/cv']}>
          <CV />
        </Route>
        <Route exact path={['/news']}>
          <News />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
