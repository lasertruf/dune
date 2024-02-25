import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './output.css';
import App from './App';
import Characters from './characters/characters';
import { BrowserRouter as Router, Route, Switch, Routes  } from "react-router-dom";
import Header from './header/header';
import Organizations from './organizations/organizations';
import Lore from './lore/lore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <BrowserRouter>
    <Router>
        <Header></Header>

      <Routes>
        <Route exact path="/"  Component={Characters} />
        <Route exact path="/characters" Component={Characters} />
        <Route exact path="/organizations" Component={Organizations} />
        <Route exact path="/lore" Component={Lore} />
      </Routes>
    </Router>
  //   </BrowserRouter>
  // </React.StrictMode>
);

