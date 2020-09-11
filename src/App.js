import React, { Suspense } from 'react';
import './App.css';
import Loader from './components/Loader';
import Home from './pages/Home';
import Header from './components/Header';

// here app catches the suspense from page in case translations are not yet loaded
export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Header />
      <Home />
    </Suspense>
  );
}
