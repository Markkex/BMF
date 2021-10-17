import React, { useEffect, useState } from "react";
import Menu from "./Components/Menu";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateProcess from "./Components/CreateProcess";
import DataTable from "./Components/DataTable";
import CourseTable from "./Components/CourseTable";
import { Modal } from "@mui/material";
import {
  collection,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./firebase";
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
  const [updating, setUpdating] = useState<boolean>();
  useEffect(() => {
    getProcesses();
  }, [updating]);

  const getProcesses = async () => {
    const processCollectionRef = collection(db, "processes");
    const data = await getDocs(processCollectionRef);
    setProcesses(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };


  return (
    <div className='App'>
      <Router>
        <Menu />
        <Switch>
          <Route path='/novoprocesso' render={(props) => <CreateProcess setUpdating={setUpdating} />} />
          <Route
            path='/processosconcluidos'
            render={(props) => <DataTable processes={processes} />}
          />
          <Route
            path='/'
            render={(props) => (
              <CourseTable processes={processes} setUpdating={setUpdating} />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
