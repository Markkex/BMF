import React from "react";
import Menu from "./Components/Menu";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateProcess from "./Components/CreateProcess";
{
  /* 

React Router
Material-ui
Material-ui icons
Axios

 */
}

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Switch>
          <Route path="/novoprocesso" render={(props) => <CreateProcess />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
