import React from 'react';
import { BrowserRouter } from 'react-router-dom';

//importando da Aplicação
import Routes from './routes';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
