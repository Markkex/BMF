import React, { useState } from "react";
import Menu from "./Components/Menu";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateProcess from "./Components/CreateProcess";
import DataTable from "./Components/DataTable";
import CourseTable from "./Components/CourseTable";
{
  /* 

React Router
Material-ui
Material-ui icons
Axios

 */
}

function App() {
  const [process, setProcess] = useState<Array<string | number | Date>>([]);
  return (
    <div className='App'>
      <Router>
        <Menu />
        <CourseTable process={process} setProcess={setProcess} />
        <Switch>
          <Route
            path='/novoprocesso'
            render={(props) => (
              <CreateProcess setProcess={setProcess} process={process} />
            )}
          />
          <Route
            path='/processosconcluidos'
            render={(props) => <DataTable process={process} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
