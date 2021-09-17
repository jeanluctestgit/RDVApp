import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, Link } from "react-router-dom";
import './App.css';

import AuthService from "./services/auth.service";

import Login from "./components/login.component";
import Home from "./components/home.component";

function App() {
  return (
    <div className="App">
      <div className="container mt-3">
          <Switch>
            <Route exact path={"/home"} component={Home} />
            <Route exact path={["/", "/login"]} component={Login} />
          </Switch>
        </div>
    </div>
  );
}

export default App;
