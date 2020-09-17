import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import CuraByDagoma from './pages/CuraByDagoma';

// here app catches the suspense from page in case translations are not yet loaded
export default function App() {
  return (
    <Router>
      <Header />
      <div className='mb-25'>
        <Switch>
          <Route path='/cura-by-dagoma'>
            <CuraByDagoma />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
