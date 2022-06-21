import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Home from './pages/Home';
import HomePro from './pages/HomePro';
import Page from './pages/Page';
import NotFound from './components/common/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// here app catches the suspense from page in case translations are not yet loaded
export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/pro" component={HomePro} />
        <Route path="/:p0/:p1?/:p3?" component={Page} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
