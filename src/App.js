import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from './components/common/Header';
import Home from './pages/Home';
import Page from './pages/Page';

// here app catches the suspense from page in case translations are not yet loaded
export default function App() {
  return (
    <Router>
      <Header />
      <div className='mb-25'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/:choice/:option?' component={Page} />
        </Switch>
      </div>
    </Router>
  );
}
