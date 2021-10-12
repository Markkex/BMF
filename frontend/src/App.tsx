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
  const [processes, setProcesses] = useState<Array<any>>([]);
  
  return (
    <div className='App'>
      <Router>
        <Menu />
        <Switch>
          <Route
            path='/novoprocesso'
            render={(props) => (
              <CreateProcess
                setProcesses={setProcesses}
                processes={processes}
              />
            )}
          />
          <Route
            path='/processosconcluidos'
            render={(props) => <DataTable processes={processes} />}
          />
          <Route
            path='/'
            render={(props) => (
              <CourseTable
                processes={processes}
                setProcesses={setProcesses}
              
              />
            )}
          />
         
        </Switch>
      </Router>
    </div>
  );
}

export default App;
