import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes
  } from "react-router-dom";
import { AboutPage } from './AboutPage';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';


export const AppRouter = () => {
  return <Router>
        <div>
            <Routes>
                <Route path="/"      element={ <HomePage />  } />
                <Route path="/about" element={ <AboutPage /> } />
                <Route path="/login" element={ <LoginPage /> } />
            </Routes>
        </div>
    </Router>
  ;
};
