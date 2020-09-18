import React from 'react';
import './App.css';
import Main from "./views/Main";
import { Router } from '@reach/router';
import Detail from "./views/Detail";
import Update from "./views/Update";
import Create from "./views/Create";

function App() {
  return (
      <div className="App">
        <Router>
          <Main path={"/"}/>
          <Create path={"/pets/new"}/>
          <Detail path={"/pets/:id"}/>
          <Update path={"/pets/edit/:id"} />
        </Router>
      </div>
  );
}

export default App;
