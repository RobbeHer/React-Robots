import './App.css';
import { Switch, Route, BrowserRouter, NavLink } from 'react-router-dom';

import HomeContainer from './containers/home';
import Robots from './containers/robot/index';
import Manufacturers from './containers/manufacturer/index';
import Categories from './containers/category/index';

const Header = () => (
  <div>
      <ul className="header">
        <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
        <li><NavLink to="/robots" activeClassName="active">Robots</NavLink></li>
        <li><NavLink to="/manufacturers" activeClassName="active">Manufacturers</NavLink></li>
        <li><NavLink to="/categories" activeClassName="active">Categories</NavLink></li>
      </ul>
  </div>
);

const Main = () => (
  <div className="content">
    <Switch>
      <Route exact path='/' component={HomeContainer}/>
      <Route path='/robots' component={Robots}/>
      <Route path='/manufacturers' component={Manufacturers}/>
      <Route path='/categories' component={Categories}/>
    </Switch>
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Main />
    </BrowserRouter>
  );
};

export default App;
