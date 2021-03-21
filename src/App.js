import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import useFetch from './customHooks/useFetch';
import ListItem from './components/ListItem';
import Header from './components/Header';
import PokemonInfo from './components/PokemonInfo';
import PokeLists from './components/PokeLists';
import './components/style.css';

function App() {
  
  return (
    <Router>
      <div className="App">
        <div className="header">
          <Header />
        </div>
        <div className="main-container">
        <Switch>
          <Route exact path="/:page?">
            <PokeLists />
          </Route>
          <Route exact path="/pokemon/:id">
            <PokemonInfo />
          </Route>
        </Switch>
        </div>
      </div>
    </Router>
    );
}

export default App;
