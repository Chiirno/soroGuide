import React from 'react';
import { Route, BrowserRouter as Router, Switch, HashRouter } from 'react-router-dom';
import Home from './Pages/Home';
import Thugs from './Pages/Thugs';
import Communions from './Pages/Communions';
import Navbar from './Components/Navbar';

function App() {
  return (
    <HashRouter>
      <>
        <Navbar/>
        <Switch>
        <Route path="/thugs" component={Thugs} />
        <Route path="/communions" component={Communions} />
        <Route path="/" component={Home} />
        </Switch>
      </>
    </HashRouter>
  );
}

export default App;
