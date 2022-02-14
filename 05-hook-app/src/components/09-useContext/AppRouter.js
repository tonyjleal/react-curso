import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
  } from "react-router-dom";
import { AboutPage } from './AboutPage';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';
import { NavBar } from './NavBar';


export const AppRouter = () => {
  return <Router>
        <div>
            <NavBar />
            
            <Routes>
                <Route path="/"      element={ <HomePage />  } />
                <Route path="/about" element={ <AboutPage /> } />
                <Route path="/login" element={ <LoginPage /> } />

                <Route path="*"  element={<Navigate to="/" />} />
            </Routes>
        </div>
    </Router>
  ;
};
