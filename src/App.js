import Home from './pages/home';
import Login from './pages/login';
import Registeration from './pages/registeration';
import ScrollTop from './pages/scrollTop';
import { BrowserRouter, Route, Switch, } from 'react-router-dom'
import './App.css';

function App() {
  return (
      <BrowserRouter>
      <ScrollTop/>
       <Route exact path="/" component={Home}></Route>
       <Route exact path="/sign-in" component={Login}></Route>
       <Route exact path="/sign-up" component={Registeration}></Route>
      </BrowserRouter>
  );
}

export default App;
