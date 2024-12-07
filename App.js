/import React from 'react';
import { DepTiplator } from './components/DepTiplator';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>DepTiplator</h1>
        <p>Split bills fairly with deposits & groups</p>
      </header>
      <main>
        <DepTiplator />
      </main>
    </div>
  );
}

export default App; 