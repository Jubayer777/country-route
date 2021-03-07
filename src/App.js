import logo from './logo.svg';
import './App.css';

import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './Components/NoMatch/NoMatch';
import CountryDetail from './Components/CountryDetail/CountryDetail';

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
           <Switch>
                <Route path="/home">
                    <Home/>
                </Route>
                <Route path="/name/:countryName">
                    <CountryDetail/>
                </Route>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="*">
                    <NoMatch/>
                </Route>

           </Switch>
      </Router>
        
    </div>
  );
}

export default App;
