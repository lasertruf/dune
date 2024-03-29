import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './output.css';
import Characters from './characters/characters';
import { BrowserRouter as Router, Route, Routes, Navigate  } from "react-router-dom";
import { redirect } from 'react-router-dom';
import Header from './header/header';
import Organizations from './organizations/organizations';
import Lore from './lore/lore';
import Timeline from './timeline/timeline';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <BrowserRouter>
    <Router>
        <Header></Header>

      <Routes>
        <Route exact path="/characters" Component={Characters} />
        <Route exact path="/organizations" Component={Organizations} />
        <Route exact path="/lore" Component={Lore} />
        <Route exact path="/timeline" Component={Timeline} />
        <Route path='/' element={<Navigate to='/characters' />} />
      </Routes>
    </Router>
  //   </BrowserRouter>
  // </React.StrictMode>
);

serviceWorkerRegistration.unregister();

reportWebVitals();

