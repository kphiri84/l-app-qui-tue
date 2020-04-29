import React from 'react';
import Router from './Router'
import { MovieController} from './context/WebCamContext'
import './App.css';



function App() {
  return (
    <div className="App">
    <MovieController>
    <Router />
    </MovieController>
  </div>
  );
}

export default App;
