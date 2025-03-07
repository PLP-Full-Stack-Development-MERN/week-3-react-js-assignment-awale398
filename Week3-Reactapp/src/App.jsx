import React from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import Counter from './components/Counter';
import "./styles/index.css";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Profile name="Abdiawal Aden" email="adenabdiawal.com" />
      <Counter />
    </div>
  );
};

export default App;