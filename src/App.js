// import logo from './logo.svg';
import './App.css';
import NavBar from "./component/NavBar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './component/Pages/Home';
import About from './component/Pages/About';
import Services from './component/Pages/Services';
import Log from './component/Pages/Log';
import Register from './component/Pages/Register';

function App() {
  return (
    <div >
      
      <Router>
        <NavBar/>
     
    <div className="pages">
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route  path="/about" component={About}/>
        <Route  path="/log" component={Log}/>
        <Route  path="/register" component={Register}/>
        <Route  path="/services" component={Services}/>
        
     </Switch>
    </div>
     </Router>

    </div>
  );
}

export default App;
