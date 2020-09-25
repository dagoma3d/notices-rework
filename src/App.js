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
import NotFound from './components/common/NotFound';

// here app catches the suspense from page in case translations are not yet loaded
export default function App() {
  return (
    <Router>
      <Header />
      <div className='mb-25'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/cura-by-dagoma/:printer?' component={Page} />
          <Route path='/printer/:printer/:step?' component={Page} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router >
  );
}
